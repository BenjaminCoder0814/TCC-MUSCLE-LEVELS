# 💪 Muscle Levels

Plataforma completa de performance e triagem fitness feita com Next.js, React e Tailwind CSS.

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://muscle-levels.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/BenjaminCoder0814/Muscle-Levels)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**🚀 Deploy Ativo**: [https://muscle-levels.vercel.app](https://muscle-levels.vercel.app)  
**📦 Repositório**: [https://github.com/BenjaminCoder0814/Muscle-Levels](https://github.com/BenjaminCoder0814/Muscle-Levels)

---

## 🌐 Visão Geral

O **Muscle Levels** é um ecossistema fitness digital que conecta treino, nutrição e gamificação em um só lugar. Nossa plataforma oferece:

- 🔍 **Autoanálise corporal** - Sistema completo de avaliação física
- 🏋️ **Treinos personalizados** - Exercícios adaptados ao seu nível
- 📊 **Monitoramento de progresso** - Acompanhe sua evolução
- 🎮 **Gamificação** - Sistema de pontos e conquistas
- 🏆 **Ranking** - Compare seu desempenho
- 💪 **Comunidade** - Conecte-se com outros atletas

---

---

## ⚡ Instalação e Execução

- **Next.js 15** com App Router e Turbopack
- **React 19** com Server Components  
- **TypeScript** para tipagem estática
- **Tailwind CSS + DaisyUI** para estilização
- **Prisma + PostgreSQL** para banco de dados
- **Better Auth** para autenticação segura
- **Vercel** para deploy e hosting

---

## 📱 Funcionalidades Principais

- **🎯 Criador de Treinos** - Seleção por músculos e equipamentos
- **📊 Estatísticas** - Gráficos de volume e progressão  
- **🔐 Autenticação** - Login seguro com Google OAuth
- **🌍 Multilíngue** - Suporte a 6 idiomas (PT, EN, ES, FR, RU, ZH-CN)
- **🏆 Ranking Global** - Sistema de pontos e leaderboard
- **🎮 Gamificação** - Conquistas, badges e níveis
- **📱 PWA** - Instalável em dispositivos mobile
- **🌙 Dark Mode** - Tema claro e escuro

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

---

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

---

## 📚 Documentação Adicional

- **[FINAL_REPORT.md](FINAL_REPORT.md)** - Relatório completo do TCC
- **[README_TCC.md](README_TCC.md)** - Instruções específicas para avaliação
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guia de contribuição
- **[docs/DATABASE-SETUP.md](docs/DATABASE-SETUP.md)** - Setup do banco de dados
- **[docs/SELF-HOSTING.md](docs/SELF-HOSTING.md)** - Guia de self-hosting

---

## 👥 Equipe de Desenvolvimento

Este projeto foi desenvolvido como Trabalho de Conclusão de Curso (TCC) por:

- **Julio Torresani** - Backend, Autenticação, Deploy
- **Benjamin Maciel** - Frontend, UI/UX, Internacionalização
- **Emanuel Marson** - Analytics, Gamificação, Performance

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Por favor, leia o [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre nosso código de conduta e processo de pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato e Suporte

- **Issues**: [GitHub Issues](https://github.com/BenjaminCoder0814/Muscle-Levels/issues)
- **Discussões**: [GitHub Discussions](https://github.com/BenjaminCoder0814/Muscle-Levels/discussions)
- **Email**: support@musclelevels.com

---

## 🌟 Agradecimentos

- [workout.cool](https://workout.cool) - Projeto open-source que serviu de inspiração
- E-Class e Coordenação Pedagógica - Pelo suporte durante o desenvolvimento
- Comunidade Next.js e React - Pela documentação e recursos excelentes

---

##  Autor

**Benjamin Maciel**

- GitHub: [@BenjaminCoder0814](https://github.com/BenjaminCoder0814)
- Email: support@musclelevels.com

---

<div align="center">

**💪 Transforme seu corpo com Muscle Levels!**

[![Deploy](https://img.shields.io/badge/🚀-Acessar_Aplicação-blue?style=for-the-badge)](https://muscle-levels.vercel.app)
[![Star](https://img.shields.io/github/stars/BenjaminCoder0814/Muscle-Levels?style=for-the-badge&logo=github)](https://github.com/BenjaminCoder0814/Muscle-Levels)

**Desenvolvido com ❤️ por Julio Torresani, Benjamin Maciel e Emanuel Marson**

</div>
