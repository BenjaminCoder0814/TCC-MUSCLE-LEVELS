# ========================================
# SETUP RÁPIDO WORKOUT-COOL (Windows)
# ========================================

Write-Host "🚀 Configurando Workout Cool..." -ForegroundColor Green

# 1. Instalar PostgreSQL via Chocolatey (se disponível)
Write-Host "1️⃣ Verificando PostgreSQL..." -ForegroundColor Yellow

if (Get-Command choco -ErrorAction SilentlyContinue) {
    Write-Host "Instalando PostgreSQL via Chocolatey..." -ForegroundColor Green
    choco install postgresql15 -y --params '/Password:postgres /Port:5432'
    
    # Aguardar instalação
    Start-Sleep -Seconds 10
    
    # Adicionar ao PATH
    $env:PATH += ";C:\Program Files\PostgreSQL\15\bin"
    
    # Criar banco
    & "C:\Program Files\PostgreSQL\15\bin\createdb.exe" -U postgres -h localhost workout_cool
    
    Write-Host "✅ PostgreSQL instalado!" -ForegroundColor Green
} else {
    Write-Host "⚠️ Chocolatey não encontrado. Usando PostgreSQL online..." -ForegroundColor Yellow
    Write-Host "Visite: https://supabase.com/dashboard para criar um banco grátis" -ForegroundColor Cyan
    Read-Host "Pressione ENTER quando tiver o DATABASE_URL"
}

# 2. Gerar Prisma Client
Write-Host "2️⃣ Configurando Prisma..." -ForegroundColor Yellow
npx prisma generate

# 3. Executar migrations
Write-Host "3️⃣ Criando tabelas..." -ForegroundColor Yellow
npx prisma migrate deploy

# 4. Importar dados de exemplo (se disponível)
Write-Host "4️⃣ Importando exercícios..." -ForegroundColor Yellow
if (Test-Path "./data/sample-exercises.csv") {
    pnpm run import:exercises-full ./data/sample-exercises.csv
}

# 5. Iniciar servidor
Write-Host "5️⃣ Iniciando servidor..." -ForegroundColor Yellow
Write-Host "🎉 Abrindo http://localhost:3000" -ForegroundColor Green

Start-Process "http://localhost:3000"
pnpm dev
