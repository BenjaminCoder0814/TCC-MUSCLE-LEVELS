# 🗄️ GUIA: Como Acessar o Banco de Dados PostgreSQL

## ✅ STATUS ATUAL DO PROJETO
- **106 exercícios** importados no banco
- **509 atributos** de exercícios
- PostgreSQL rodando no Docker
- Site funcionando perfeitamente em http://localhost:3000

---

## 📦 OPÇÃO 1: DBeaver (RECOMENDADO)

### Instalação:
1. Baixe em: https://dbeaver.io/download/
2. Instale o DBeaver Community Edition (gratuito)

### Configuração:
1. Abra o DBeaver
2. Clique em "Nova Conexão" (ícone de plug com +)
3. Selecione **PostgreSQL**
4. Preencha:
   - **Host**: `localhost`
   - **Port**: `5432`
   - **Database**: `musclelevels`
   - **Username**: `musclelevels`
   - **Password**: `musclelevels2025`
5. Clique em "Test Connection"
6. Se der erro de driver, clique em "Download" para baixar o driver PostgreSQL
7. Clique em "Finish"

### Usando o DBeaver:
- **Ver tabelas**: Expanda `musclelevels` → `Schemas` → `public` → `Tables`
- **Ver exercícios**: Clique com direito em `Exercise` → "View Data"
- **Executar SQL**: Clique em "SQL Editor" e digite queries
- **Editar dados**: Dê duplo clique em qualquer célula

---

## 📦 OPÇÃO 2: pgAdmin 4 (Ferramenta Oficial)

### Instalação:
1. Baixe em: https://www.pgadmin.org/download/
2. Instale o pgAdmin 4

### Configuração:
1. Abra o pgAdmin
2. Clique com direito em "Servers" → "Create" → "Server"
3. Aba "General":
   - **Name**: `Muscle Levels Local`
4. Aba "Connection":
   - **Host name/address**: `localhost`
   - **Port**: `5432`
   - **Maintenance database**: `musclelevels`
   - **Username**: `musclelevels`
   - **Password**: `musclelevels2025`
   - ✅ Marque "Save password"
5. Clique em "Save"

---

## 📦 OPÇÃO 3: TablePlus (Interface Moderna)

### Instalação:
1. Baixe em: https://tableplus.com/
2. Tem 14 dias de trial grátis

### Configuração:
1. Abra o TablePlus
2. Clique em "Create a new connection"
3. Selecione **PostgreSQL**
4. Preencha:
   - **Name**: `Muscle Levels`
   - **Host**: `localhost`
   - **Port**: `5432`
   - **User**: `musclelevels`
   - **Password**: `musclelevels2025`
   - **Database**: `musclelevels`
5. Clique em "Connect"

---

## 🔧 OPÇÃO 4: Via Terminal (sem interface gráfica)

### Acessar via Docker:
```cmd
docker exec -it workout-postgres psql -U musclelevels -d musclelevels
```

### Comandos úteis no psql:
```sql
-- Ver todas as tabelas
\dt

-- Ver exercícios
SELECT id, name, "nameEn" FROM "Exercise" LIMIT 10;

-- Contar exercícios
SELECT COUNT(*) FROM "Exercise";

-- Ver atributos
SELECT * FROM "ExerciseAttribute" LIMIT 10;

-- Sair
\q
```

---

## 📊 ESTRUTURA DO BANCO DE DADOS

### Tabelas Principais:
1. **Exercise** - 106 exercícios
   - `id`, `name`, `nameEn`, `fullVideoUrl`, `fullVideoImageUrl`

2. **ExerciseAttribute** - 509 atributos
   - Liga exercícios com seus atributos (músculo, equipamento, etc)

3. **ExerciseAttributeName** - Tipos de atributos
   - PRIMARY_MUSCLE, SECONDARY_MUSCLE, EQUIPMENT, TYPE, MECHANICS_TYPE

4. **ExerciseAttributeValue** - Valores dos atributos
   - CHEST, BACK, SHOULDERS, BICEPS, BARBELL, DUMBBELL, etc.

5. **User** - Usuários do sistema

6. **WorkoutSession** - Sessões de treino dos usuários

---

## 🎯 QUERIES ÚTEIS

### Ver todos os exercícios com seus músculos primários:
```sql
SELECT 
  e.name AS exercicio,
  e."nameEn" AS nome_ingles,
  eav.value AS musculo_primario
FROM "Exercise" e
JOIN "ExerciseAttribute" ea ON e.id = ea."exerciseId"
JOIN "ExerciseAttributeValue" eav ON ea."attributeValueId" = eav.id
JOIN "ExerciseAttributeName" ean ON ea."attributeNameId" = ean.id
WHERE ean.name = 'PRIMARY_MUSCLE'
LIMIT 20;
```

### Contar exercícios por grupo muscular:
```sql
SELECT 
  eav.value AS grupo_muscular,
  COUNT(*) AS total_exercicios
FROM "Exercise" e
JOIN "ExerciseAttribute" ea ON e.id = ea."exerciseId"
JOIN "ExerciseAttributeValue" eav ON ea."attributeValueId" = eav.id
JOIN "ExerciseAttributeName" ean ON ea."attributeNameId" = ean.id
WHERE ean.name = 'PRIMARY_MUSCLE'
GROUP BY eav.value
ORDER BY total_exercicios DESC;
```

### Ver exercícios de peito:
```sql
SELECT DISTINCT
  e.id,
  e.name AS exercicio,
  e."nameEn" AS nome_ingles
FROM "Exercise" e
JOIN "ExerciseAttribute" ea ON e.id = ea."exerciseId"
JOIN "ExerciseAttributeValue" eav ON ea."attributeValueId" = eav.id
JOIN "ExerciseAttributeName" ean ON ea."attributeNameId" = ean.id
WHERE ean.name = 'PRIMARY_MUSCLE'
  AND eav.value = 'CHEST';
```

---

## 🚀 CREDENCIAIS DE ACESSO

```
Host:     localhost
Port:     5432
Database: musclelevels
User:     musclelevels
Password: musclelevels2025
```

---

## ⚠️ IMPORTANTE

1. **Docker deve estar rodando**: Verifique com `docker ps`
2. **Container PostgreSQL ativo**: Nome `workout-postgres`
3. **Porta 5432 livre**: Não pode ter outro PostgreSQL usando a porta

---

## 🎓 RECOMENDAÇÃO FINAL

**Para o seu TCC, recomendo usar DBeaver** porque:
- ✅ Gratuito e open source
- ✅ Interface profissional
- ✅ Suporta múltiplos bancos (caso precise no futuro)
- ✅ Exportar dados para Excel/CSV facilmente
- ✅ Editor SQL com autocomplete
- ✅ Visualização de relacionamentos entre tabelas

Baixe aqui: https://dbeaver.io/download/
