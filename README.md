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

## 🚀 Tecnologias

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS, DaisyUI, Framer Motion
- **Backend:** Prisma ORM, PostgreSQL
- **Auth:** Better Auth com Google OAuth
- **UI Components:** Radix UI, shadcn/ui
- **Charts:** Recharts
- **Deployment:** Vercel

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- pnpm (recomendado)

### Instalação

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

### Scripts Disponíveis

```bash
pnpm dev          # Servidor desenvolvimento (Turbopack)
pnpm build        # Build para produção
pnpm start        # Servidor produção
pnpm lint         # Verificar código
pnpm db:seed      # Popular banco com dados de exemplo
```

## 📱 Funcionalidades

### 🔍 Análise Corporal
- Calculadora de IMC
- Análise de composição corporal
- Avaliação de flexibilidade
- Teste de resistência

### 🏋️ Treinos
- Biblioteca de exercícios
- Montagem de treinos personalizados
- Acompanhamento de séries e repetições
- Histórico de treinos

### 🎯 Gamificação
- Sistema de pontos por atividade
- Conquistas e badges
- Ranking de usuários
- Desafios semanais

### 📊 Dashboard
- Métricas de progresso
- Gráficos de evolução
- Relatórios detalhados
- Metas personalizadas

## 🌟 Recursos Técnicos

- **PWA Ready** - Instalável como app nativo
- **Responsivo** - Otimizado para mobile e desktop
- **Performance** - Server-side rendering com Next.js
- **SEO Otimizado** - Meta tags dinâmicas
- **Internacionalização** - Múltiplos idiomas
- **Tema Dark/Light** - Preferência do usuário

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

## 📁 Estrutura do Projeto

```
muscle-levels/
├── src/
│   ├── app/                 # App Router (Next.js 15)
│   ├── components/          # Componentes reutilizáveis
│   ├── features/           # Funcionalidades por domínio
│   ├── shared/             # Utilitários compartilhados
│   └── widgets/            # Widgets complexos
├── prisma/                 # Schema e migrações
├── public/                 # Arquivos estáticos
└── docs/                  # Documentação
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👤 Autor

**Benjamin Maciel**

- GitHub: [@BenjaminCoder0814](https://github.com/BenjaminCoder0814)
- Email: benjamin@muscle-levels.com

## 🙏 Agradecimentos

- Comunidade Next.js
- Equipe Tailwind CSS
- Contribuidores open source

---

<div align="center">

**💪 Transforme seu corpo com Muscle Levels!**

[🚀 Demo](https://muscle-levels.vercel.app) • [📖 Docs](./docs) • [🐛 Report Bug](../../issues)

</div>