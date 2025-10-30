# 💪 Muscle Levels

> **Uma plataforma moderna de fitness desenvolvida especialmente para acompanhamento de treinos e evolução muscular**

[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.18.0-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)

## 🎯 Sobre o Projeto

Muscle Levels é uma aplicação completa de acompanhamento de treinos, desenvolvida com tecnologias modernas para ajudar usuários a alcançarem seus objetivos fitness através de monitoramento detalhado de exercícios, progressão de cargas e análise de desempenho.

### A História do Muscle Levels

🏗️ **Desenvolvimento Próprio**: Criado inteiramente do zero como projeto acadêmico  
� **Inovação**: Implementação de funcionalidades avançadas de tracking e analytics  
🎓 **Finalidade Acadêmica**: Desenvolvido como Trabalho de Conclusão de Curso (TCC)  
� **Foco em Dados**: Sistema robusto de análise de progressão e métricas de performance  
� **Tecnologia Moderna**: Utilização das mais recentes tecnologias web para performance otimizada  

### Por que o Muscle Levels Existe

**Necessidade de uma solução completa.**

O mercado precisava de uma plataforma que combinasse simplicidade de uso com análise profunda de dados.

**Foco na experiência do usuário.**

Muscle Levels foi criado pensando na necessidade real dos praticantes de musculação de ter uma ferramenta completa, confiável e moderna para acompanhar sua evolução nos treinos.

## 🎯 Funcionalidades Principais

### 💪 Sistema de Treinos
- **181+ exercícios** catalogados com informações detalhadas
- **Construtor de treinos** intuitivo e personalizável  
- **Timer integrado** com períodos de descanso configuráveis
- **Progressão automática** de cargas baseada no desempenho
- **Histórico completo** de todas as sessões de treino

### 📊 Analytics Avançados
- **Gráfico de atividades** estilo  mostrando consistência
- **Métricas de volume** semanal e mensal de treinamento
- **Recordes pessoais** com detecção automática de PRs
- **Análise de progresso** com tendências e estatísticas
- **Composição corporal** para acompanhamento completo
## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18+)
- **pnpm** (v8+)
- **Docker**

### Installation

1. **Clone o repositório**

```bash
git clone https://.com/BenjaminCoder0814/Muscle-Levels.git
cd Muscle-Levels
```

2. **Choose your installation method:**

#### 🐳 With Docker

```bash
# Start the database
docker compose up -d

# Install dependencies
pnpm install

# Set up environment
cp .env.example .env

# Run database migrations
pnpm run db:migrate

# Seed the database
pnpm run db:seed

# Start the development server
pnpm dev
```

#### � Without Docker

```bash
# Install dependencies
pnpm install

# Set up your database connection in .env
# DATABASE_URL="postgresql://username:password@localhost:5432/muscle_levels"

# Run database migrations
pnpm run db:migrate

# Seed the database with sample data
pnpm run db:seed

# Start the development server
pnpm dev
```

## 🏋️ Exercise Database Import

The project includes a comprehensive exercise database. To import a sample of exercises:

### Prerequisites for Import

**Prepare your CSV file**

Your CSV should have these columns:

```csv
id,name,name_en,description,description_en,full_video_url,full_video_image_url,introduction,introduction_en,slug,slug_en,attribute_name,attribute_value
```

You can use the provided example.

### Import Commands

```bash
# Import exercises from a CSV file
pnpm run import:exercises-full /path/to/your/exercises.csv

# Example with the provided sample data
pnpm run import:exercises-full ./data/sample-exercises.csv

# Quick seed with included sample data
pnpm run db:seed
```

### CSV Format Example

```csv
id,name,name_en,description,description_en,full_video_url,full_video_image_url,introduction,introduction_en,slug,slug_en,attribute_name,attribute_value
157,"Fentes arrières à la barre","Barbell Reverse Lunges","<p>Stand upright...</p>","<p>Stand upright...</p>",https://youtube.com/...,https://img.youtube.com/...,slug-fr,slug-en,TYPE,STRENGTH
157,"Fentes arrières à la barre","Barbell Reverse Lunges","<p>Stand upright...</p>","<p>Stand upright...</p>",https://youtube.com/...,https://img.youtube.com/...,slug-fr,slug-en,PRIMARY_MUSCLE,QUADRICEPS
```

**Want unlimited exercises for local development?**

Just ask ChatGPT with the prompt from `./scripts/import-exercises-with-attributes.prompt.md`

## 🏗️ Project Architecture

This project follows **Feature-Sliced Design (FSD)** principles with **Next.js App Router**:

```
src/
├── app/            # Next.js pages, routes and layouts
├── processes/      # Business flows (multi-feature)
├── widgets/        # Composable UI with logic (Sidebar, Header)
├── features/       # Business units (auth, exercise-management)
├── entities/       # Domain entities (user, exercise, workout)
├── shared/         # Shared code (UI, lib, config, types)
└── styles/         # Global CSS, themes
```

### Architecture Principles

- **Feature-driven**: Each feature is independent and reusable
- **Clear domain isolation**: shared → entities → features → widgets → app
- **Consistency**: Between business logic, UI, and data layers

### Example Feature Structure

```
features/
└── exercise-management/
    ├── ui/         # UI components (ExerciseForm, ExerciseCard)
    ├── model/      # Hooks, state management (useExercises)
    ├── lib/        # Utilities (exercise-helpers)
    └── api/        # Server actions or API calls
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Create an issue** for the feature/bug you want to work on. Say that you will work on it (or no)
2. **Fork the repository**
3. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
4. **Make your changes** following our code standards
5. **Commit your changes** (`git commit -m 'feat: add amazing feature'`)
6. **Push to the branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request** (one issue = one PR)

📋 For complete contribution guidelines, see our [Contributing Guide](CONTRIBUTING.md)

### Code Style

- Follow **TypeScript** best practices
- Use **Feature-Sliced Design** architecture
- Write **meaningful commit messages**

- �️ **Exercise Management**: Comprehensive exercise database with categories
- ⏱️ **Workout Timer**: Built-in timer for workout sessions
- 📊 **Progress Tracking**: Track your fitness journey
- 🏆 **Leaderboards**: Compete with the community
- � **Workout Builder**: Create custom workout routines
- 📱 **Responsive Design**: Mobile-first approach
- 🌍 **Internationalization**: Multi-language support
- 🔐 **Authentication**: Secure user management
- 💾 **Offline Support**: PWA capabilities

## 🚀 Deployment / Self-hosting

📖 For detailed self-hosting instructions, see our [Complete Self-hosting Guide](docs/SELF-HOSTING.md)

To seed the database with the sample exercises, set the `SEED_SAMPLE_DATA` env variable to `true`.

### Using Docker

```bash
# Build the Docker image
docker build -t yourusername/muscle-levels .

# Run the container
docker run -p 3000:3000 --env-file .env.production yourusername/muscle-levels
```

### Using Docker Compose

**DATABASE_URL**  
Update the host to point to the postgres service instead of localhost:  
`DATABASE_URL=postgresql://username:password@postgres:5432/muscle_levels`

```bash
docker compose up -d
```

### Manual Deployment

```bash
# Build the application
pnpm build

# Run database migrations
export DATABASE_URL="your-production-db-url"
npx prisma migrate deploy

# Start the production server
pnpm start
```

## 📋 Available Scripts

```bash
pnpm dev                    # Start development server
pnpm build                  # Build for production
pnpm start                  # Start production server
pnpm lint                   # Run ESLint
pnpm lint:fix              # Fix ESLint issues

# Database
pnpm db:seed               # Seed with sample data
pnpm db:migrate            # Run database migrations
pnpm db:studio             # Open Prisma Studio

# Exercise Import
pnpm import:exercises-full # Import exercises from CSV
pnpm import:hundreds       # Import hundreds of exercises

# Development Tools
pnpm email                 # Start email development
pnpm stripe-webhooks       # Listen for Stripe webhooks
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.2.3 (App Router), React, TypeScript
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: Better Auth
- **Styling**: Tailwind CSS, Radix UI
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod
- **Email**: React Email
- **Deployment**: Docker, Vercel-ready

## � Comandos Úteis

```bash
pnpm dev              # Desenvolvimento (com Turbopack)
pnpm build            # Build para produção
pnpm start            # Servidor de produção
pnpm lint             # Executa linter
pnpm prisma studio    # Interface visual do banco
pnpm db:seed          # Popula banco com dados de exemplo
```

---

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

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## � Support the Project

If **Muscle Levels** has helped you in your fitness journey, consider:

- ⭐ **Starring** the repository
- � **Reporting** bugs and issues
- 💡 **Suggesting** new features
- 🤝 **Contributing** to the codebase
- 📢 **Sharing** with the community

---

**Made with ❤️ for the fitness community**

> _"From the community, for the community"_
