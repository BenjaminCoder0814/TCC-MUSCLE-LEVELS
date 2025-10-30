#!/usr/bin/env bash
# scripts/download_thumbnails_from_db.sh
# Consulta o DB por full_video_image_url e baixa as imagens para public/images/exercises
# Uso: chmod +x scripts/download_thumbnails_from_db.sh && ./scripts/download_thumbnails_from_db.sh <pg_container>
set -euo pipefail

PG_CONTAINER=${1:-workout-pg}

echo "🔍 Verificando container PostgreSQL: $PG_CONTAINER"

# Verificar se o container existe e está rodando
if ! docker ps --format "table {{.Names}}" | grep -q "^$PG_CONTAINER$"; then
    echo "❌ Container '$PG_CONTAINER' não encontrado ou não está rodando."
    echo "📋 Containers disponíveis:"
    docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}"
    exit 1
fi

echo "✅ Container encontrado!"

# Criar diretório para imagens se não existir
IMAGES_DIR="public/images/exercises"
mkdir -p "$IMAGES_DIR"
echo "📁 Diretório criado/verificado: $IMAGES_DIR"

# Consultar URLs de imagens no banco
echo "🔍 Consultando URLs de imagens no banco de dados..."
URLS=$(docker exec -it "$PG_CONTAINER" psql -U postgres -d Muscle Levels -t -c "
SELECT DISTINCT full_video_image_url 
FROM exercises 
WHERE full_video_image_url IS NOT NULL 
  AND full_video_image_url != '' 
  AND full_video_image_url LIKE 'http%'
  AND full_video_image_url NOT LIKE '%unsplash%'
ORDER BY full_video_image_url;
" | tr -d '\r' | sed '/^$/d')

if [ -z "$URLS" ]; then
    echo "⚠️  Nenhuma URL de imagem válida encontrada no banco."
    echo "💡 Dica: Execute o script fill-exercise-placeholders.js primeiro"
    exit 0
fi

TOTAL_URLS=$(echo "$URLS" | wc -l)
echo "📊 Encontradas $TOTAL_URLS URLs únicas para download"

# Baixar imagens
DOWNLOADED=0
SKIPPED=0
FAILED=0

echo "⬇️  Iniciando downloads..."
echo ""

while IFS= read -r url; do
    if [ -z "$url" ]; then
        continue
    fi
    
    # Extrair nome do arquivo da URL
    filename=$(basename "$url" | sed 's/[?&].*$//' | head -c 50)
    
    # Se não tem extensão, adicionar .jpg
    if [[ "$filename" != *.* ]]; then
        filename="${filename}.jpg"
    fi
    
    # Remover caracteres especiais do nome do arquivo
    filename=$(echo "$filename" | sed 's/[^a-zA-Z0-9._-]/_/g')
    
    filepath="$IMAGES_DIR/$filename"
    
    # Verificar se já existe
    if [ -f "$filepath" ]; then
        echo "⏭️  Já existe: $filename"
        ((SKIPPED++))
        continue
    fi
    
    # Tentar baixar
    echo "📥 Baixando: $url -> $filename"
    if curl -L --max-time 30 --retry 2 -s -o "$filepath" "$url" 2>/dev/null; then
        # Verificar se o arquivo foi baixado corretamente
        if [ -s "$filepath" ]; then
            file_size=$(stat -c%s "$filepath" 2>/dev/null || stat -f%z "$filepath" 2>/dev/null || echo "0")
            if [ "$file_size" -gt 1000 ]; then  # Arquivo maior que 1KB
                echo "✅ Sucesso: $filename (${file_size} bytes)"
                ((DOWNLOADED++))
            else
                echo "⚠️  Arquivo muito pequeno: $filename - removendo"
                rm -f "$filepath"
                ((FAILED++))
            fi
        else
            echo "❌ Falha no download: $filename"
            rm -f "$filepath"
            ((FAILED++))
        fi
    else
        echo "❌ Erro de conexão: $filename"
        rm -f "$filepath"
        ((FAILED++))
    fi
    
    # Pequena pausa para não sobrecarregar os servidores
    sleep 0.5
    
done <<< "$URLS"

echo ""
echo "📊 RESUMO DOS DOWNLOADS:"
echo "   ✅ Baixadas: $DOWNLOADED"
echo "   ⏭️  Puladas (já existiam): $SKIPPED"
echo "   ❌ Falharam: $FAILED"
echo "   📁 Diretório: $IMAGES_DIR"

# Listar arquivos baixados
TOTAL_FILES=$(find "$IMAGES_DIR" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" | wc -l)
echo "   📸 Total de imagens no diretório: $TOTAL_FILES"

if [ "$DOWNLOADED" -gt 0 ]; then
    echo ""
    echo "🎉 Downloads concluídos! As imagens estão em /$IMAGES_DIR"
    echo "💡 Para usar localmente, atualize as URLs no banco para:"
    echo "   UPDATE exercises SET full_video_image_url = '/images/exercises/nome-do-arquivo.jpg' WHERE ..."
fi

echo ""
echo "✅ Script finalizado!"