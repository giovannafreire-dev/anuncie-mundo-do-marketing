# site/ — bundle desempacotado

Versão "descompactada" do `index.html` monolítico da raiz. O `index.html` da raiz
empacota a aplicação inteira em base64 (manifesto + template) e a monta no cliente
via `blob:` URLs. Aqui os 96 assets foram extraídos para arquivos reais e o HTML
foi reescrito para referenciá-los por caminho.

## Estrutura

- `index.html` — HTML da aplicação (antes era o "template" interno do bundle).
- `assets/vendor/` — React, ReactDOM e Babel Standalone (bibliotecas externas).
- `assets/js/` — módulos da aplicação (`landing-page.js` é o principal; os demais
  são seções: ecossistema, case Braze, produtos & alcance, scaffold).
  São transformados no navegador via `<script type="text/babel">`.
- `assets/brands/`, `assets/event/`, `assets/logos/`, `assets/social/`,
  `assets/textures/`, `assets/vozes/`, `assets/branded/` — imagens (SVG/PNG/JPG).
- `assets/misc/` — fontes (Satoshi/Inter, woff2/ttf) sem nome amigável no bundle.

## Como servir

Qualquer servidor estático a partir desta pasta:

```bash
cd site && python3 -m http.server 8099
# abra http://localhost:8099/
```

`window.__resources` (injetado no `<head>`) mapeia os ids lógicos dos assets para
os caminhos reais, preservando o comportamento do runtime original.

## Observação de performance

Isto é um desempacotamento fiel — ainda usa **Babel Standalone no navegador** para
transformar o JSX em runtime, que é lento. Para atingir as metas de Lighthouse
(FCP/LCP/TBT) o passo seguinte é compilar `assets/js/*` num build real (Vite/esbuild),
eliminando o Babel do cliente e fazendo code-splitting.
