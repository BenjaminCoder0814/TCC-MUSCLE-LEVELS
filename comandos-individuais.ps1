# ===========================================
# WORKOUT COOL - COMANDOS MANUAIS INDIVIDUAIS
# Execute linha por linha se preferir controle total
# ===========================================

# 1. PostgreSQL via Docker (mais fácil)
docker run --name workout-pg -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=workout_cool -p 5432:5432 -d postgres:15

# 2. Aguardar PostgreSQL iniciar
Start-Sleep -Seconds 5

# 3. Gerar Prisma Client
npx prisma generate

# 4. Aplicar schema (migrations)
npx prisma migrate deploy

# 5. Popular exercícios (opcional)
pnpm run import:exercises-full ./data/sample-exercises.csv

# 6. Iniciar Next.js
pnpm dev

# 7. Abrir no navegador
Start-Process "http://localhost:3000"
