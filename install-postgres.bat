@echo off
echo ========================================
echo  INSTALANDO POSTGRESQL PARA WORKOUT-COOL
echo ========================================

echo Baixando PostgreSQL...
powershell -Command "Invoke-WebRequest -Uri 'https://get.enterprisedb.com/postgresql/postgresql-15.8-1-windows-x64.exe' -OutFile 'postgresql-installer.exe'"

echo.
echo Iniciando instalacao do PostgreSQL...
echo IMPORTANTE: Durante a instalacao:
echo - Senha do postgres: postgres
echo - Porta: 5432
echo - Locale: Portuguese, Brazil

start /wait postgresql-installer.exe

echo.
echo Criando banco de dados...
"C:\Program Files\PostgreSQL\15\bin\createdb.exe" -U postgres workout_cool

echo.
echo PostgreSQL instalado com sucesso!
echo Agora execute: pnpm run setup-db
pause
