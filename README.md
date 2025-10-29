# Restaurante & Música — Do Zero ao Deploy

Aplicação web simples (HTML/CSS/JS) usada para praticar POO no front-end, Git Flow com branches `main` (produção) e `staging` (homologação), e deploy na Vercel. Semana 1 usa dados falsos; Semana 2 conecta à MongoDB Data API.

## Como executar localmente
- Abra o arquivo `index.html` no navegador (não há build).

## Estrutura de pastas
- `index.html` — layout com header, botões e área dinâmica
- `styles.css` — estilos responsivos
- `app.js` — classes POO (Restaurante, Prato, Artista, Musica) e orquestração
- `.env` — variáveis de ambiente locais (não commitado)
- `.gitignore` — ignora `.env` e outros
- `docs/ISSUES.md` — roteiro para criar Issues no GitHub

## Semana 1 — Gestão e POO
1) Planejamento no GitHub (Issues) — veja `docs/ISSUES.md` e crie:
	- Issue #1: Criar estrutura HTML/CSS base
	- Issue #2: Modelar classes de POO (Restaurante/Prato/Artista/Musica)
	- Issue #3: Preparar README e guia de deploy
	- Issue #4: Configurar banco no MongoDB Atlas (para Semana 2)
2) Branches (Git Flow)
	- `main` = produção (não commitar direto)
	- `staging` = homologação (todo o trabalho da sprint)
3) POO assistido por IA
	- O código em `app.js` contém comentários com perguntas/respostas do Copilot sobre `constructor`, `this`, `render`, composição, e estado simples.

## Semana 2 — Segredos, Banco e Deploy
1) MongoDB Atlas (Data API): gere `API_URL` e `API_KEY`.
2) Segredos
	- Crie `.env` local com:
	  - `API_URL=https://sua-url-do-mongo...`
	  - `API_KEY=sua-chave-secreta...`
	- O arquivo `.env` já está no `.gitignore` para evitar vazar chaves.
	- Por que ignorar `.env`? Se chaves forem para o GitHub público, qualquer pessoa pode usá-las e incorrer custos/abuso. Mantenha-as fora do repositório e use “Environment Variables” (Secrets) no provedor de deploy.
3) Vercel
	- Production Branch: `main`
	- Deploys de Preview: `staging`
	- Adicione `API_URL` e `API_KEY` como Secrets na Vercel e habilite para `staging` e `main`.
4) Conectar o front ao banco
	- Substitua os dados falsos por uma chamada `fetch` à Data API no `app.js` (em `staging`).
	- Observação: em sites estáticos, variáveis de ambiente não são expostas no cliente por padrão. Você pode usar uma Function (Serverless/Edge) como proxy para ler as env vars com segurança e chamar a Data API.

## Fluxo Git sugerido
1. Inicializar repositório e branches:
	- `git init` (se necessário) e configure `main` como default
	- `git checkout -b staging`
2. Trabalhar na branch `staging` durante a sprint
3. Ao final da semana 1:
	- `git add .` e `git commit -m "feat: semana 1 - estrutura e POO"`
	- `git push -u origin staging`
	- Abra um Pull Request de `staging` → `main` com a descrição: “Esta é a V1 do projeto, pronta para deploy em staging”. Não faça merge ainda.

## Próximos passos
- Criar as Issues conforme `docs/ISSUES.md`.
- Configurar Vercel e as variáveis de ambiente.
- (Semana 2) Trocar dados mock por `fetch` da MongoDB Data API via função serverless.