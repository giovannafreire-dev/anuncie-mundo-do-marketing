# app/ — build de produção (Vite)

Reconstrução da landing `Anuncie` a partir dos módulos desempacotados em `../site`,
agora como um build real: **React de produção via npm**, **JSX pré-compilado** (sem
Babel no navegador) e bundle **minificado** com `vendor` separado.

## Ganho vs. bundle original

| | Original (bundle) | Vite (este build) |
|---|---|---|
| JS entregue | ~4,2 MB (Babel Standalone 3,1 MB + React dev 1,1 MB) | **~217 KB** (vendor 141 KB + app 76 KB) · gzip ~64 KB |
| JSX | transformado no cliente em runtime | pré-compilado no build |
| index.html | 12 MB (assets base64 embutidos) | 37 KB + assets estáticos |

## Estrutura

- `src/main.jsx` — entrada: importa React/ReactDOM e concatena os módulos da app
  (`ecosystem-infographic`, `braze-case-study`, `produtos-alcance`, `landing-page`).
  O `scaffold.js` (web component `<image-slot>` do runtime de edição) não é usado
  pela página e foi omitido.
- `index.html` — head original (design tokens, @font-face, `window.__res`/`__resources`)
  com os `<script>` de runtime substituídos por `<script type="module" src="/src/main.jsx">`.
- `public/assets/**` — imagens e fontes (servidos em `/assets/...`, mesmos caminhos
  que o runtime espera via `window.__res`).
- `public/thank-you.html` — página de confirmação (copiada da raiz).

## Rodar

```bash
cd app
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/
npm run preview  # serve dist/ localmente
```

## Deploy no Vercel (quando quiser trocar o deploy atual)

O deploy atual serve o `index.html` empacotado da raiz. Para servir este build,
aponte o projeto Vercel para `app/`:

- Root Directory: `app`
- Build Command: `npm run build`
- Output Directory: `dist`

As funções serverless em `/api` (na raiz do repo) continuam funcionando. Verificado
no Chromium: paridade visual total com o original, sem erros de console.
