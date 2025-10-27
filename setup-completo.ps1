# ========================================
# WORKOUT COOL - SETUP COMPLETO
# Copie e cole este bloco no PowerShell
# ========================================

Write-Host "🚀 Configurando Workout Cool..." -ForegroundColor Green

# 1. Verificar se estamos no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erro: package.json não encontrado!" -ForegroundColor Red
    Write-Host "Execute: cd 'C:\Users\User\Downloads\workout-cool-main\workout-cool-main'" -ForegroundColor Yellow
    exit 1
}

# 2. PostgreSQL via Docker (mais simples)
Write-Host "🐘 Iniciando PostgreSQL..." -ForegroundColor Yellow
try {
    docker run --name workout-pg -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=workout_cool -p 5432:5432 -d postgres:15 2>$null
    Write-Host "✅ PostgreSQL iniciado via Docker" -ForegroundColor Green
    Start-Sleep -Seconds 5
} catch {
    Write-Host "⚠️ Docker não disponível. Vamos usar PostgreSQL online..." -ForegroundColor Yellow
    Write-Host "👉 Acesse: https://supabase.com/dashboard (grátis)" -ForegroundColor Cyan
    Write-Host "Crie um projeto e copie a Database URL" -ForegroundColor Cyan
    $dbUrl = Read-Host "Cole sua DATABASE_URL aqui"
    if ($dbUrl) {
        (Get-Content ".env") -replace 'DATABASE_URL=".*"', "DATABASE_URL=`"$dbUrl`"" | Set-Content ".env"
    }
}

# 3. Gerar Prisma Client
Write-Host "🔧 Gerando Prisma Client..." -ForegroundColor Yellow
npx prisma generate

# 4. Aplicar Migrations
Write-Host "📊 Criando tabelas..." -ForegroundColor Yellow
npx prisma migrate deploy

# 5. Seed (opcional)
Write-Host "🌱 Populando dados..." -ForegroundColor Yellow
if (Test-Path "./data/sample-exercises.csv") {
    pnpm run import:exercises-full ./data/sample-exercises.csv
}

# 6. Iniciar servidor
Write-Host "🎉 Tudo pronto! Iniciando servidor..." -ForegroundColor Green
Write-Host "📱 Acesse: http://localhost:3000" -ForegroundColor Cyan

Start-Process "http://localhost:3000"
pnpm dev
