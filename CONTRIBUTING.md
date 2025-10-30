# 🤝 Contribuindo para o Muscle Levels

Agradecemos seu interesse em contribuir com o Muscle Levels! Este guia ajuda você a contribuir de forma efetiva.

## 🚀 Início Rápido

### Pré-requisitos

- **Node.js** (v18+)
- **pnpm** (v8+)
- **Docker** (recomendado)

### Configuração do Desenvolvimento

1. **Faça um fork do repositório**
2. **Clone seu fork**
   ```bash
   git clone https://.com/SEU_USUARIO/Muscle-Levels.git
   cd Muscle-Levels
   ```
3. **Install dependencies**
   ```bash
   pnpm install
   ```
4. **Set up environment**
   ```bash
   cp .env.example .env
   # Configure your local database connection
   ```
5. **Start database**
   ```bash
   docker compose up -d postgres
   ```
6. **Run migrations and seed data**
   ```bash
   pnpm db:migrate
   pnpm db:seed
   ```
7. **Start development server**
   ```bash
   pnpm dev
   ```

## 📋 Development Workflow

### ✅ Issue-First Approach

1. **Create an issue** for the feature/bug you want to work on
2. **Discuss the approach** in the issue comments
3. **Wait for approval** from maintainers before starting work
4. **Assign yourself** to the issue

### 🔄 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
2. **Make your changes** following our code standards
3. **Write/update tests** if applicable
4. **Test your changes**
   ```bash
   pnpm lint
   pnpm build
   ```
5. **Commit with conventional format**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push and create PR**
   ```bash
   git push origin feature/amazing-feature
   ```

## 📝 Code Standards

### TypeScript Guidelines
- Use **strict TypeScript** configuration
- Prefer **type inference** over explicit types when obvious
- Use **interfaces** for object shapes
- Use **enums** for constants with multiple values

### Code Style
- **Prettier** handles formatting automatically
- **ESLint** catches common issues
- Use **meaningful variable names**
- Write **self-documenting code**

### Architecture Guidelines
We follow **Feature-Sliced Design (FSD)**:

```
src/
├── app/         # Pages and layouts
├── processes/   # Business workflows
├── widgets/     # Complex UI components
├── features/    # Business features
├── entities/    # Domain models
└── shared/      # Shared utilities
```

### Component Guidelines
- Use **React Server Components** when possible
- Keep components **focused and single-purpose**
- Use **TypeScript interfaces** for props
- Follow **composition over inheritance**

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run e2e tests
pnpm test:e2e
```

## 📝 Commit Messages

We use **Conventional Commits**:

```
type(scope): description

feat: add new exercise import feature
fix: resolve timer accuracy issue
docs: update installation guide
style: format workout builder component
refactor: improve exercise search performance
test: add unit tests for workout logic
chore: update dependencies
```

## 🎯 Areas to Contribute

### 🏋️ Exercise Database
- Add new exercises with proper attributes
- Improve exercise categorization
- Add exercise variations and progressions

### 📱 User Experience
- Improve mobile responsiveness
- Add accessibility features
- Enhance workout flow

### 🌍 Internationalization
- Add new language translations
- Improve existing translations
- Add locale-specific features

### 🔧 Developer Experience
- Improve build performance
- Add helpful developer tools
- Enhance documentation

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the problem
3. **Expected vs actual behavior**
4. **Environment details** (OS, browser, etc.)
5. **Screenshots/videos** if helpful

## 💡 Feature Requests

When requesting features:

1. **Describe the problem** you're trying to solve
2. **Propose a solution** with implementation details
3. **Consider alternatives** you've thought of
4. **Assess impact** on existing users

## 📚 Documentation

Help improve our documentation:

- Fix typos and grammatical errors
- Add missing information
- Improve clarity and organization
- Add code examples
- Create tutorials and guides

## ⚖️ License

By contributing to Muscle Levels, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to the fitness community! 💪**

### 🤔 Need Help?

- **General questions** → use  Discussions
- **Bug reports or features** → open an Issue
- **Live chat** → [Join our Discord](https://discord.gg/NtrsUBuHUB)

---

### 📚 Useful Links

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs/)

---

### 🌟 Recognition

We credit contributors in:

- the  contributors list
- release notes (for impactful work)
- internal documentation if relevant

Thanks again for contributing to Muscle Levels! 💪

Questions? Just open an issue or ping a maintainer.

