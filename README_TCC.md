Muscle Levels — TCC Submission README

Projeto: Muscle Levels (fork / rebrand do workout.cool)

Descrição curta
----------------
Plataforma web para criação e acompanhamento de treinos. Implementada com Next.js, React, TypeScript e Tailwind.

Links (preencher após deploy/push)
----------------------------------
- Deploy (Vercel): https://<SEU_DEPLOY>.vercel.app
- Repositório GitHub: https://github.com/<SEU_USUARIO>/<SEU_REPO>

Como rodar localmente (Windows)
-------------------------------
1. Abra um terminal (PowerShell) na raiz do projeto
2. Instale dependências:

   npm install

3. Crie um arquivo `.env.local` (veja `.env.example`) e ajuste variáveis de ambiente mínimas (NEXT_PUBLIC_APP_URL, BETTER_AUTH_SECRET, DATABASE_URL se usar DB)

4. Rodar em desenvolvimento:

   npm run dev

5. Acesse: http://localhost:3000

Build e produção
-----------------
Build:

   npm run build

Start (após build):

   npm run start

Deploy no Vercel (web UI)
-------------------------
1. Crie um repositório no GitHub e faça push do código (ver comandos abaixo).
2. Acesse https://vercel.com, conecte sua conta GitHub e importe o repositório.
3. Selecione o framework (Next.js) e finalize.
4. Configure variáveis de ambiente em Settings -> Environment Variables (use as do arquivo `.env.local`).

Deploy no Vercel (CLI)
----------------------
Instale Vercel CLI se desejar:

   npm i -g vercel

No diretório do projeto:

   vercel login
   vercel

Siga as instruções, o Vercel criará o projeto e fará deploy.

Como criar o repositório e subir (Windows cmd)
---------------------------------------------
1. Inicializar o repositório localmente (se ainda não estiver):

   git init
   git add .
   git commit -m "Initial commit - Muscle Levels TCC"

2. Criar repositório no GitHub (web) e copiar URL do remote, ou usar GitHub CLI (gh):

   gh repo create <seu_usuario>/<seu_repo> --public --source=. --push

3. Ou manualmente (com URL):

   git remote add origin https://github.com/<SEU_USUARIO>/<SEU_REPO>.git
   git branch -M main
   git push -u origin main

Arquivo de documentação e relatório final
----------------------------------------
- `FINAL_REPORT.md` (anexo a seguir) contém resumo, aprendizado, melhorias e próximos passos.

Contribuidores (grupo)
----------------------
- Benjamin Maciel
- Julio Torresani
- Emanuel Marson

Notas finais
-----------
- Depois de subir o repositório e fazer deploy, substitua as placeholders acima com os links finais.
- Se quiser, eu posso ajudar a executar os passos de push e deploy aqui se você me autorizar ou fornecer acesso (recomendo usar GitHub + Vercel web UI para maior segurança).