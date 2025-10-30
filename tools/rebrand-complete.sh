#!/usr/bin/env bash
# Script completo de rebranding Muscle Levels
# Execute este script no diretório raiz do projeto

set -euo pipefail

echo "🔄 INICIANDO REBRANDING COMPLETO PARA MUSCLE LEVELS"
echo "================================================="

# Configurações
OLD_DOMAIN_REGEX="workout\.cool"
OLD_SIMPLE="workout"
OLD_AUTHOR=""
NEW_SIMPLE="muscle-levels"
NEW_AUTHOR="BenjaminCoder0814"
NEW_PROJECT_NAME="Muscle Levels"

echo "1️⃣ BACKUP - Criando backup da branch atual..."
git archive -o ../muscle-levels-backup-$(date +%Y%m%d-%H%M%S).zip HEAD || true

echo "2️⃣ VERIFICAÇÃO - Listando arquivos que contêm referências antigas:"
echo "   🔍 Domínio 'Muscle Levels':"
git grep -Il "$OLD_DOMAIN_REGEX" . || true
echo "   🔍 Termo 'workout':"
git grep -Il "$OLD_SIMPLE" . | head -10 || true
echo "   🔍 Autor '':"
git grep -Il "$OLD_AUTHOR" . || true

echo "3️⃣ SUBSTITUIÇÃO - Executando substituições em massa..."

# Substitui domínio primeiro (mais específico)
echo "   📝 Substituindo domínio Muscle Levels -> muscle-levels..."
if command -v sed >/dev/null 2>&1; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        grep -RIl "$OLD_DOMAIN_REGEX" . | xargs -I {} sed -i '' "s/$OLD_DOMAIN_REGEX/$NEW_SIMPLE/g" {}
    else
        # Linux/WSL
        grep -RIl "$OLD_DOMAIN_REGEX" . | xargs -I {} sed -i "s/$OLD_DOMAIN_REGEX/$NEW_SIMPLE/g" {}
    fi
fi

# Substitui termos simples
echo "   📝 Substituindo workout -> muscle-levels..."
if command -v perl >/dev/null 2>&1; then
    grep -RIl "\\b$OLD_SIMPLE\\b" . | xargs -I {} perl -pi -e "s/\\b$OLD_SIMPLE\\b/$NEW_SIMPLE/g" {}
fi

# Substitui autor
echo "   📝 Substituindo autor  -> BenjaminCoder0814..."
if command -v perl >/dev/null 2>&1; then
    grep -RIl "$OLD_AUTHOR" . | xargs -I {} perl -pi -e "s/$OLD_AUTHOR/$NEW_AUTHOR/g" {}
fi

echo "4️⃣ ARQUIVOS - Verificando arquivos essenciais..."

# Verificar se logo existe
if [[ ! -f "public/logo.svg" ]]; then
    echo "   📁 Criando logo.svg..."
    cat > public/logo.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" fill="none">
  <rect width="240" height="240" rx="20" fill="#000000"/>
  <g transform="translate(30 36)">
    <rect x="20" y="64" width="140" height="24" rx="6" fill="#6AD0F8"/>
    <rect x="14" y="52" width="18" height="48" rx="4" fill="#ffffff20"/>
    <rect x="148" y="52" width="18" height="48" rx="4" fill="#ffffff20"/>
    <circle cx="120" cy="76" r="30" fill="#6AD0F8" opacity="0.3"/>
    <path d="M105 65 Q120 55 135 65 Q120 85 105 65" fill="#ffffff" opacity="0.8"/>
    <text x="120" y="150" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#6AD0F8">ML</text>
  </g>
</svg>
EOF
fi

# Verificar se manifest existe
if [[ ! -f "public/site.webmanifest" ]]; then
    echo "   📁 Criando site.webmanifest..."
    cat > public/site.webmanifest << 'EOF'
{
  "name": "Muscle Levels",
  "short_name": "MuscleLevels",
  "description": "Transforme seu corpo com a Muscle Levels",
  "icons": [
    { "src": "/logo.svg", "type": "image/svg+xml", "sizes": "any" },
    { "src": "/logo.svg", "type": "image/svg+xml", "sizes": "512x512" }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#6AD0F8",
  "background_color": "#000000"
}
EOF
fi

echo "5️⃣ VERIFICAÇÃO - Arquivos modificados:"
git status --porcelain | head -20

echo ""
echo "🔍 REVISÃO NECESSÁRIA!"
echo "======================"
echo "Antes de continuar, revise as mudanças:"
echo "   git diff package.json"
echo "   git diff README.md"
echo "   git diff --name-only | head -20"
echo ""
echo "Se tudo estiver correto, execute:"
echo "   git add -A"
echo "   git commit -m \"feat: complete rebranding to Muscle Levels\""
echo ""
echo "Para criar novo repositório:"
echo "   git remote set-url origin https://.com/BenjaminCoder0814/Muscle-Levels.git"
echo "   git push -u origin main --force"
echo ""
echo "Para apagar repositório antigo (CUIDADO!):"
echo "   gh repo delete BenjaminCoder0814/TCC --confirm"
echo ""
echo "✅ Script de rebranding concluído!"
echo "📝 Próximo passo: Revisar mudanças e commitar"