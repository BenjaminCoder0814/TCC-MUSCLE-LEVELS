# TCC - Muscle Levels 💪

**Sistema Completo de Gerenciamento de Exercícios Físicos**

[![Deploy](https://img.shields.io/badge/Deploy-Live-success)](https://tcc-muscle-levels.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/BenjaminCoder0814/TCC-MUSCLE-LEVELS)

---

## 🔗 **Links Importantes**

### **🌐 Site em Produção**
**👉 [https://tcc-muscle-levels.vercel.app](https://tcc-muscle-levels.vercel.app)**

### **📂 Código Fonte**  
**👉 [https://github.com/BenjaminCoder0814/TCC-MUSCLE-LEVELS](https://github.com/BenjaminCoder0814/TCC-MUSCLE-LEVELS)**

---

## 📖 **Sobre o Projeto**

O **Muscle Levels** é uma aplicação web moderna desenvolvida para gerenciamento completo de exercícios físicos e criação de treinos personalizados. O sistema oferece uma plataforma intuitiva para usuários acompanharem seu progresso fitness de forma organizada e eficiente.

### 🎯 **Objetivos do TCC**
- Desenvolver um sistema completo de gerenciamento fitness
- Aplicar tecnologias modernas de desenvolvimento web
- Criar uma interface responsiva e multilíngue
- Implementar boas práticas de arquitetura de software

---

## 🚀 **Tecnologias Utilizadas**

### **Frontend**
- **Next.js 15.2.3** - Framework React para produção
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Linguagem com tipagem estática
- **TailwindCSS** - Framework de estilos utilitários
- **Framer Motion** - Animações fluidas

### **Backend**
- **Next.js API Routes** - APIs serverless
- **Prisma ORM** - Object-Relational Mapping
- **PostgreSQL** - Banco de dados relacional
- **Better Auth** - Sistema de autenticação

### **Deploy & DevOps**
- **Vercel** - Plataforma de hospedagem
- **GitHub** - Controle de versão
- **Docker** - Containerização (desenvolvimento)

---

## 📋 **Funcionalidades Implementadas**

### ✅ **Sistema Core**
- [x] Catálogo com **180+ exercícios** organizados
- [x] Sistema de autenticação completo
- [x] Gerenciamento de perfis de usuário
- [x] Dashboard administrativo

### ✅ **Interface & UX**
- [x] Design responsivo para todos os dispositivos
- [x] Interface multilíngue (6 idiomas: PT, EN, ES, FR, RU, CN)
- [x] Tema claro/escuro
- [x] Animações e transições suaves

### ✅ **Funcionalidades Avançadas**
- [x] Sistema de busca e filtros avançados
- [x] Categorização por grupos musculares
- [x] Níveis de dificuldade organizados
- [x] Instruções detalhadas para exercícios

---

## 🛠️ **Instalação e Uso**

### **Pré-requisitos**
- Node.js 18+ 
- pnpm ou npm
- Docker (opcional, para banco local)

### **1. Clone o repositório**
```bash
git clone https://github.com/BenjaminCoder0814/TCC-MUSCLE-LEVELS.git
cd TCC-MUSCLE-LEVELS
```

### **2. Instale as dependências**
```bash
pnpm install
# ou
npm install
```

### **3. Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Configure as variáveis no arquivo .env
```

### **4. Execute o banco de dados (Docker)**
```bash
docker-compose up -d
```

### **5. Configure o banco**
```bash
npx prisma db push
npx prisma db seed
```

### **6. Inicie o servidor de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

### **7. Acesse a aplicação**
- **Local:** `http://localhost:3000`
- **Produção:** `https://tcc-muscle-levels.vercel.app`

---

## 📁 **Estrutura do Projeto**

```
TCC-MUSCLE-LEVELS/
├── app/                    # Páginas e rotas (App Router)
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── features/          # Funcionalidades por domínio
│   ├── shared/            # Código compartilhado
│   └── widgets/           # Widgets complexos
├── prisma/                # Schema e migrações do banco
├── locales/               # Arquivos de tradução
├── public/                # Arquivos estáticos
└── docs/                  # Documentação do projeto
```

---

## 📊 **Métricas do Projeto**

- **📝 Linhas de Código:** ~15.000+
- **📦 Componentes:** 50+ componentes React
- **🗃️ Exercícios:** 180+ exercícios catalogados
- **🌍 Idiomas:** 6 idiomas suportados
- **📱 Responsivo:** 100% mobile-first
- **⚡ Performance:** Otimizado para produção

---

## 🎓 **Aspectos Acadêmicos**

### **Aprendizados Técnicos**
- Desenvolvimento full-stack com Next.js
- Gerenciamento de estado e autenticação
- Arquitetura Feature-Sliced Design
- Internacionalização (i18n)
- Deployment e DevOps

### **Boas Práticas Aplicadas**
- Clean Code e SOLID principles
- Componentização e reutilização
- Tipagem estática com TypeScript
- Testes automatizados
- Versionamento semântico

---

## 🔮 **Próximos Passos**

- [ ] Implementar Progressive Web App (PWA)
- [ ] Sistema de notificações push
- [ ] Análise avançada de progresso
- [ ] Integração com wearables
- [ ] Gamificação e conquistas

---

## 👨‍💻 **Desenvolvedor**

**Benjamin Coder**
- GitHub: [@BenjaminCoder0814](https://github.com/BenjaminCoder0814)
- Projeto: Trabalho de Conclusão de Curso (TCC)
- Ano: 2025

---

## 📄 **Licença**

Este projeto foi desenvolvido exclusivamente para fins acadêmicos como Trabalho de Conclusão de Curso.

---

**🎯 Desenvolvido com dedicação para o TCC 2025** 💪