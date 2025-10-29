# Roteiro de Issues (GitHub)

Crie estas Issues na aba "Issues" do seu repositório. Use labels e checklists.

## Issue #1: Criar estrutura HTML/CSS base
- [ ] Montar layout com header/nav e `<main id="main-content">`
- [ ] Botões: `#btn-restaurante` e `#btn-musica`
- [ ] Estilos responsivos básicos

## Issue #2: Modelar classes de POO para Restaurantes/Músicas
- [ ] Classe `Restaurante` com `adicionarPrato()` e `render()`
- [ ] Classe `Prato` com `render()`
- [ ] Classe `Artista` com `adicionarMusica()` e `render()`
- [ ] Classe `Musica` com `render()`
- [ ] Comentários de auditoria da IA (constructor, this, render, composição)

## Issue #3: Preparar dados falsos e controlador de tela
- [ ] Função `criarDadosFalsos()`
- [ ] Classe `App` com `viewAtual`, `renderizar()` e `atualizarBotoes()`
- [ ] `DOMContentLoaded` cria `new App()`

## Issue #4: Configurar MongoDB Atlas (Semana 2)
- [ ] Criar conta/cluster/usuário e liberar IP (0.0.0.0/0)
- [ ] Ativar Data API e anotar `API_URL`/`API_KEY`

## Issue #5: Segredos e Deploy (Semana 2)
- [ ] Criar `.env` (local) e adicionar ao `.gitignore`
- [ ] Cadastrar `API_URL` e `API_KEY` como Secrets na Vercel (staging e main)
- [ ] Importar repositório na Vercel (Production Branch = `main`)
- [ ] Garantir Preview Deploys para `staging`

## Issue #6: Integrar com Data API (Semana 2)
- [ ] Substituir mocks por `fetch` para MongoDB Data API
- [ ] (Opcional recomendado) Criar Function (Serverless/Edge) como proxy para manter segredos no servidor
- [ ] Validar deploy em `staging`
- [ ] Abrir PR `staging` → `main` e só depois fazer merge