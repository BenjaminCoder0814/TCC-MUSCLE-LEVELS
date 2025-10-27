# Script PowerShell para rebranding completo Muscle Levels
# Execute este script no diretório raiz do projeto

Write-Host "🔄 INICIANDO REBRANDING COMPLETO PARA MUSCLE LEVELS" -ForegroundColor Green
Write-Host "================================================="

# Configurações
$OLD_DOMAIN = "workout\.cool"
$OLD_SIMPLE = "workout" 
$OLD_AUTHOR = "Snouzy"
$NEW_SIMPLE = "muscle-levels"
$NEW_AUTHOR = "BenjaminCoder0814"
$NEW_PROJECT_NAME = "Muscle Levels"

Write-Host "1️⃣ BACKUP - Criando backup da branch atual..." -ForegroundColor Yellow
try { git archive -o "../muscle-levels-backup-$(Get-Date -Format 'yyyyMMdd-HHmmss').zip" HEAD } catch { Write-Warning "Backup falhou - continuando..." }

Write-Host "2️⃣ VERIFICAÇÃO - Listando arquivos com referências antigas:" -ForegroundColor Yellow
Write-Host "   🔍 Procurando 'workout.cool':"
try { git grep -Il $OLD_DOMAIN . } catch { Write-Host "   Nenhuma ocorrência encontrada" }

Write-Host "   🔍 Procurando 'workout':"
try { git grep -Il $OLD_SIMPLE . | Select-Object -First 10 } catch { Write-Host "   Nenhuma ocorrência encontrada" }

Write-Host "   🔍 Procurando 'Snouzy':"
try { git grep -Il $OLD_AUTHOR . } catch { Write-Host "   Nenhuma ocorrência encontrada" }

Write-Host "3️⃣ SUBSTITUIÇÃO - Executando substituições..." -ForegroundColor Yellow

# Função para substituir texto em arquivos
function Replace-InFiles {
    param($Pattern, $Replacement, $Description)
    
    Write-Host "   📝 $Description"
    $files = Get-ChildItem -Recurse -File | Where-Object { 
        $_.Extension -in @('.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.yml', '.yaml', '.txt', '.env') -and
        $_.Name -notlike '*.lock' -and
        $_.DirectoryName -notlike '*node_modules*' -and
        $_.DirectoryName -notlike '*.git*'
    }
    
    foreach ($file in $files) {
        try {
            $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
            if ($content -and $content -match $Pattern) {
                $newContent = $content -replace $Pattern, $Replacement
                Set-Content -Path $file.FullName -Value $newContent -NoNewline
                Write-Host "     ✓ Atualizado: $($file.Name)" -ForegroundColor Green
            }
        } catch {
            Write-Warning "Erro ao processar $($file.Name): $_"
        }
    }
}

# Executar substituições
Replace-InFiles "workout\.cool" $NEW_SIMPLE "Substituindo domínio workout.cool -> muscle-levels..."
Replace-InFiles "\bworkout\b" $NEW_SIMPLE "Substituindo workout -> muscle-levels..."  
Replace-InFiles $OLD_AUTHOR $NEW_AUTHOR "Substituindo autor Snouzy -> BenjaminCoder0814..."

Write-Host "4️⃣ ARQUIVOS - Verificando arquivos essenciais..." -ForegroundColor Yellow

# Criar logo se não existir
if (!(Test-Path "public/logo.svg")) {
    Write-Host "   📁 Criando logo.svg..."
    New-Item -ItemType Directory -Path "public" -Force | Out-Null
    @'
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
'@ | Set-Content "public/logo.svg"
}

# Criar manifest se não existir  
if (!(Test-Path "public/site.webmanifest")) {
    Write-Host "   📁 Criando site.webmanifest..."
    @'
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
'@ | Set-Content "public/site.webmanifest"
}

Write-Host "5️⃣ VERIFICAÇÃO - Arquivos modificados:" -ForegroundColor Yellow
try { git status --porcelain | Select-Object -First 20 } catch { Write-Host "Git status não disponível" }

Write-Host ""
Write-Host "🔍 REVISÃO NECESSÁRIA!" -ForegroundColor Red
Write-Host "======================"
Write-Host "Antes de continuar, revise as mudanças:"
Write-Host "   git diff package.json"
Write-Host "   git diff README.md" 
Write-Host "   git diff --name-only | head -20"
Write-Host ""
Write-Host "Se tudo estiver correto, execute:"
Write-Host "   git add -A"
Write-Host "   git commit -m `"feat: complete rebranding to Muscle Levels`""
Write-Host ""
Write-Host "Para criar novo repositório:"
Write-Host "   git remote set-url origin https://github.com/BenjaminCoder0814/Muscle-Levels.git"
Write-Host "   git push -u origin main --force"
Write-Host ""
Write-Host "Para apagar repositório antigo (CUIDADO!):"
Write-Host "   gh repo delete BenjaminCoder0814/TCC --confirm"
Write-Host ""
Write-Host "✅ Script de rebranding concluído!" -ForegroundColor Green
Write-Host "📝 Próximo passo: Revisar mudanças e commitar" -ForegroundColor Cyan