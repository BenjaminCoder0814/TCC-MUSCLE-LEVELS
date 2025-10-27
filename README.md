# 💪 Muscle Levels

Plataforma completa de performance e triagem fitness feita com Next.js, React e Tailwind CSS.

## 🌐 Visão Geral

O **Muscle Levels** é um ecossistema fitness digital que conecta treino, nutrição e gamificação em um só lugar. Nossa plataforma oferece:

- 🔍 **Autoanálise corporal** - Sistema completo de avaliação física
- 🏋️ **Treinos personalizados** - Exercícios adaptados ao seu nível
- 📊 **Monitoramento de progresso** - Acompanhe sua evolução
- 🎮 **Gamificação** - Sistema de pontos e conquistas
- 🏆 **Ranking** - Compare seu desempenho
- 💪 **Comunidade** - Conecte-se com outros atletas

---

## 🚀 Tecnologias

- **Next.js 15** com App Router e Turbopack
- **React 19** com Server Components  
- **TypeScript** para tipagem estática
- **Tailwind CSS + DaisyUI** para estilização
- **Prisma + PostgreSQL** para banco de dados
- **Better Auth** para autenticação segura

## ⚡ Instalação

### Pré-requisitos

- Node.js 18+
- pnpm ou npm
- PostgreSQL

### Setup

```bash
# Clone o repositório
git clone https://github.com/BenjaminCoder0814/Muscle-Levels.git

# Entre no diretório
cd Muscle-Levels

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Execute as migrações do banco
pnpm prisma migrate dev

# Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 🛠️ Comandos

```bash
pnpm dev          # Desenvolvimento
pnpm build        # Build produção
pnpm prisma studio # Interface do banco
```

## 📱 Funcionalidades

- **🎯 Criador de Treinos** - Seleção por músculos e equipamentos
- **📊 Estatísticas** - Gráficos de volume e progressão  
- **🔐 Autenticação** - Login seguro com Google OAuth
- **🌍 Multilíngue** - Suporte a 6 idiomas

## 🔧 Configuração do Ambiente

### Variáveis de Ambiente

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/muscle_levels"

# Auth
BETTER_AUTH_URL="http://localhost:3000"
BETTER_AUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

##  Autor

**Benjamin Maciel**

- GitHub: [@BenjaminCoder0814](https://github.com/BenjaminCoder0814)
- Email: benjamin@muscle-levels.com

## � Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

---

<div align="center">

**💪 Transforme seu corpo com Muscle Levels!**

[⭐ Star no GitHub](https://github.com/BenjaminCoder0814/Muscle-Levels)

</div>
