# Recriando o front do Facebook

Recriação de uma interface similar ao Facebook para estudo de layout com
HTML, CSS e JavaScript (projeto 100% estático).

## Visão geral

- Página estática com header, navegação, feed (stories, compositor, posts),
  e colunas laterais.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Swiper](https://swiperjs.com/) (carrossel)

## Estrutura do projeto

```
.
├── index.html
├── README.md
└── assets/
    ├── css/
    ├── js/
    └── img/
```

## Como executar

Recomendo usar um servidor estático para evitar problemas de CORS ao carregar
JSONs locais. Exemplos:

```bash
# usando http.server (Python)
python -m http.server 8000

# usando npm 'serve'
npx serve .
```

Depois, abra `http://localhost:8000` no navegador.

## Tailwind CSS — como rodar os comandos no projeto

Observações/assunções:

- Este projeto já contém arquivos relacionados ao Tailwind:
  - `package.json` com scripts `dev:css` e `build:css`.
  - `tailwind.config.js` e `postcss.config.js`.
  - `assets/css/tailwind.css` (arquivo de entrada que já contém as diretivas `@tailwind`).
- Antes de rodar qualquer comando, execute `npm install` para instalar as dependências.

Passos rápidos (one-time / se necessário):

1. Se você ainda não tem `package.json`, inicialize com:

```bash
npm init -y
```

2. Caso não tenha as dependências instaladas, instale-as (ou rode `npm install` se
   já existir `package.json`):

```bash
npm install
# -- ou, manualmente --
# npm install -D tailwindcss postcss autoprefixer
```

3. (Opcional) Se `tailwind.config.js` não existir, gere com:

```bash
npx tailwindcss init -p
```

Atenção ao arquivo de entrada

- O arquivo de entrada usado neste projeto é `assets/css/tailwind.css` e ele
  já contém:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Comandos recomendados (já alinhados com `package.json` do projeto)

- Usando os scripts definidos em `package.json` (recomendado):

```bash
# desenvolvimento (watch)
npm run dev:css

# build para produção (minificado)
npm run build:css
```

- Equivalente usando npx diretamente (caso prefira):

```bash
npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/tw.css --watch
npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/tw.css --minify
```

Notas importantes

- `index.html` referencia `assets/css/tw.css` (arquivo de saída). Rode os comandos
  acima para gerar/atualizar esse arquivo.
- `tailwind.config.js` atualmente define `corePlugins.preflight: false`; isso
  desativa o reset/base do Tailwind. Remova essa opção se quiser o reset
  padrão.
- O `content` em `tailwind.config.js` cobre `./index.html` e `./assets/js/**/*.js`;
  se você tiver HTML em subpastas, adicione `./**/*.html` ao array `content`.

---

## Outros

- Arquivo principal: `index.html`.
- Estática; nenhum build é necessário.

Contribuições são bem-vindas. Se quiser, faço um commit com este README e
envio para o repositório — quer que eu faça isso agora?
