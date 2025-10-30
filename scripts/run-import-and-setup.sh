#!/usr/bin/env bash
set -euo pipefail

# scripts/run-import-and-setup.sh
# Orquestrador principal para importação completa de dados do Muscle Levels

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "🚀 MUSCLE LEVELS - Importação Completa de Dados"
echo "=============================================="
echo "📁 Diretório: $ROOT"
echo "⏰ Início: $(date)"
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função de log
log() {
    echo -e "${GREEN}[$(date +'%H:%M:%S')]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[$(date +'%H:%M:%S')] AVISO:${NC} $1"
}

error() {
    echo -e "${RED}[$(date +'%H:%M:%S')] ERRO:${NC} $1"
}

info() {
    echo -e "${BLUE}[$(date +'%H:%M:%S')] INFO:${NC} $1"
}

# Verificar se está no diretório correto
if [[ ! -f "package.json" ]]; then
    error "package.json não encontrado. Execute este script da raiz do projeto."
    exit 1
fi

if [[ ! -f "prisma/schema.prisma" ]]; then
    error "prisma/schema.prisma não encontrado. Verifique a estrutura do projeto."
    exit 1
fi

log "✅ Estrutura do projeto verificada"

# Função para confirmar ações destrutivas
confirm() {
    local message="$1"
    echo -e "${YELLOW}⚠️ $message${NC}"
    read -p "Deseja continuar? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Operação cancelada pelo usuário"
        exit 0
    fi
}

# Função para backup do banco
backup_database() {
    log "💾 Fazendo backup do banco de dados..."
    
    local backup_dir="backups"
    local backup_file="$backup_dir/backup_$(date +%Y%m%d_%H%M%S).sql"
    
    mkdir -p "$backup_dir"
    
    if docker ps | grep -q "workout-postgres"; then
        log "📦 Fazendo backup via Docker..."
        if docker exec workout-postgres pg_dump -U musclelevels musclelevels > "$backup_file" 2>/dev/null; then
            log "✅ Backup salvo em: $backup_file"
        else
            warn "⚠️ Falha no backup via Docker, continuando sem backup..."
        fi
    else
        warn "⚠️ Container PostgreSQL não encontrado, pulando backup..."
    fi
}

# Verificar e instalar dependências
install_dependencies() {
    log "📦 Verificando dependências..."
    
    # Verificar se node_modules existe
    if [[ ! -d "node_modules" ]]; then
        log "📥 Instalando dependências do projeto..."
        if command -v pnpm > /dev/null; then
            pnpm install
        elif command -v npm > /dev/null; then
            npm install
        else
            error "npm ou pnpm não encontrado. Instale Node.js primeiro."
            exit 1
        fi
    else
        log "✅ Dependências já instaladas"
    fi
    
    # Verificar dependências específicas para scraping
    local deps_needed=("axios" "cheerio" "uuid")
    local missing_deps=()
    
    for dep in "${deps_needed[@]}"; do
        if ! grep -q "\"$dep\"" package.json; then
            missing_deps+=("$dep")
        fi
    done
    
    if [[ ${#missing_deps[@]} -gt 0 ]]; then
        log "📥 Instalando dependências adicionais: ${missing_deps[*]}"
        if command -v pnpm > /dev/null; then
            pnpm add "${missing_deps[@]}"
        else
            npm install "${missing_deps[@]}"
        fi
    fi
}

# Preparar banco de dados
setup_database() {
    log "🗄️ Configurando banco de dados..."
    
    # Verificar se PostgreSQL está rodando
    if ! docker ps | grep -q "workout-postgres"; then
        log "🐳 Iniciando container PostgreSQL..."
        if [[ -f "docker-compose.yml" ]]; then
            docker compose up -d postgres
            sleep 5
        else
            error "Docker Compose não encontrado e PostgreSQL não está rodando"
            exit 1
        fi
    fi
    
    # Executar migrações
    log "🔄 Executando migrações do Prisma..."
    if command -v pnpm > /dev/null; then
        pnpm prisma db push
    else
        npx prisma db push
    fi
    
    log "✅ Banco de dados configurado"
}

# Executar scraping
run_scraping() {
    log "🕷️ Iniciando geração de dados de exercícios..."
    
    if [[ -f "scripts/generate-exercise-data.js" ]]; then
        info "📡 Gerando dados de exercícios para o Muscle Levels..."
        
        if node scripts/generate-exercise-data.js; then
            log "✅ Scraping concluído com sucesso"
            return 0
        else
            warn "⚠️ Falha no scraping, continuando com dados de exemplo..."
            return 1
        fi
    else
        warn "⚠️ Script de scraping não encontrado, pulando..."
        return 1
    fi
}

# Transformar dados para CSV
transform_data() {
    log "🔄 Transformando dados para formato CSV..."
    
    if [[ -f "scripts/transform-to-csv.js" ]]; then
        if node scripts/transform-to-csv.js; then
            log "✅ Transformação concluída"
            return 0
        else
            warn "⚠️ Falha na transformação"
            return 1
        fi
    else
        warn "⚠️ Script de transformação não encontrado"
        return 1
    fi
}

# Importar exercícios
import_exercises() {
    log "📥 Importando exercícios para o banco..."
    
    local csv_file="data/exercises-for-import.csv"
    
    if [[ -f "$csv_file" ]]; then
        log "📊 Importando dados do CSV: $csv_file"
        
        if command -v pnpm > /dev/null; then
            if pnpm run import:exercises-full "$csv_file"; then
                log "✅ Importação via CSV concluída"
                return 0
            fi
        else
            if npx tsx scripts/import-exercises-with-attributes.ts "$csv_file"; then
                log "✅ Importação via CSV concluída"  
                return 0
            fi
        fi
        
        warn "⚠️ Falha na importação via CSV"
    fi
    
    # Fallback: usar seed padrão
    log "🌱 Executando seed de fallback..."
    
    if [[ -f "prisma/seed-full.ts" ]]; then
        if command -v pnpm > /dev/null; then
            pnpm exec tsx prisma/seed-full.ts
        else
            npx tsx prisma/seed-full.ts
        fi
    else
        # Usar seed existente
        if command -v pnpm > /dev/null; then
            pnpm run db:seed 2>/dev/null || warn "Seed padrão não encontrado"
        else
            npm run db:seed 2>/dev/null || warn "Seed padrão não encontrado"
        fi
    fi
    
    log "✅ Dados básicos inseridos no banco"
}

# Preencher placeholders
fill_placeholders() {
    log "🖼️ Preenchendo placeholders de imagens e instruções..."
    
    if [[ -f "scripts/fill-exercise-placeholders.js" ]]; then
        if node scripts/fill-exercise-placeholders.js; then
            log "✅ Placeholders preenchidos"
        else
            warn "⚠️ Falha ao preencher placeholders"
        fi
    else
        warn "⚠️ Script de placeholders não encontrado"
    fi
}

# Baixar thumbnails
download_thumbnails() {
    log "📸 Baixando thumbnails dos exercícios..."
    
    if [[ -f "scripts/download_thumbnails_from_db.sh" ]]; then
        chmod +x scripts/download_thumbnails_from_db.sh
        
        if bash scripts/download_thumbnails_from_db.sh; then
            log "✅ Download de thumbnails concluído"
        else
            warn "⚠️ Falha no download de thumbnails"
        fi
    else
        warn "⚠️ Script de download não encontrado"
    fi
}

# Gerar relatório final
generate_report() {
    log "📊 Gerando relatório final..."
    
    if [[ -f "scripts/final-report.ts" ]]; then
        if command -v pnpm > /dev/null; then
            pnpm exec tsx scripts/final-report.ts
        else
            npx tsx scripts/final-report.ts
        fi
    elif [[ -f "check-data.js" ]]; then
        node check-data.js
    else
        info "📈 Verificando dados no banco..."
        
        # Verificação simples via Docker
        if docker ps | grep -q "workout-postgres"; then
            echo "🏋️ Contagem de exercícios:"
            docker exec workout-postgres psql -U musclelevels -d musclelevels -c "SELECT COUNT(*) as total_exercises FROM exercises;" 2>/dev/null || echo "  Erro ao consultar banco"
            
            echo "👥 Contagem de usuários:"
            docker exec workout-postgres psql -U musclelevels -d musclelevels -c "SELECT COUNT(*) as total_users FROM \"User\";" 2>/dev/null || echo "  Erro ao consultar banco"
        fi
    fi
    
    log "📋 Relatório concluído"
}

# Função principal
main() {
    echo ""
    log "🎯 Iniciando processo de importação completa..."
    
    # Confirmação para operações destrutivas
    confirm "Esta operação irá modificar o banco de dados. Backup será criado automaticamente."
    
    # 1. Backup do banco
    backup_database
    
    # 2. Instalar dependências
    install_dependencies
    
    # 3. Configurar banco
    setup_database
    
    # 4. Scraping (opcional)
    log "🕷️ FASE 1: Coleta de dados"
    if run_scraping; then
        # 5. Transformação para CSV
        log "🔄 FASE 2: Transformação de dados"
        transform_data
    else
        warn "Pulando transformação devido a falha no scraping"
    fi
    
    # 6. Importação
    log "📥 FASE 3: Importação para banco"
    import_exercises
    
    # 7. Placeholders
    log "🖼️ FASE 4: Processamento de assets"
    fill_placeholders
    
    # 8. Downloads
    download_thumbnails
    
    # 9. Relatório
    log "📊 FASE 5: Relatório final"
    generate_report
    
    echo ""
    echo "🎉 IMPORTAÇÃO CONCLUÍDA COM SUCESSO!"
    echo "=============================================="
    echo "⏰ Finalizado em: $(date)"
    echo ""
    echo "🚀 Para iniciar o servidor:"
    echo "   pnpm dev  (ou npm run dev)"
    echo ""
    echo "🌐 Acesse: http://localhost:3000"
    echo ""
}

# Tratamento de erros
trap 'error "Script interrompido. Verificar logs acima para detalhes do erro."; exit 1' ERR

# Executar função principal
main "$@"