<<<<<<< HEAD
Recriando o front do Facebook (HTML + CSS)

Visão geral
- Página estática que reproduz a interface do Facebook usando HTML, CSS e um toque de JS para interação mínima.
- Layout completo: header, navegação, feed central (stories, compositor de post, posts), colunas esquerda (menu/atalhos) e direita (patrocinado, aniversários, contatos).

Como rodar
- Recomendado: subir um servidor estático (ex.: `npx serve .`, `python -m http.server`, `live-server`).
- Abrir direto via file:// funciona para o layout, mas o carregamento de JSON pode ser bloqueado pelo navegador; por isso, use um servidor.

Estrutura
- `index.html` — marcação principal do layout.
- `assets/css/style.css` — estilos, utilitários e responsividade.
- `assets/js/script.js` — interação simples (toggle de “Curtir”).
- `assets/img/` — imagens de exemplo usadas nos stories e anúncios.
 - `assets/data/` — arquivos JSON para conteúdo dinâmico.

Funcionalidades
- Header fixo com logo, busca, abas (Home/Watch/Marketplace/Grupos/Jogos) e ações do usuário.
- Coluna esquerda com menu/atalhos e rodapé legal.
- Feed central com stories, compositor de publicação e posts de exemplo.
- Coluna direita com patrocinados, aniversários e lista de contatos (indicador online).
- Ícones representados por emojis (sem dependências externas).

Responsividade
- ≥ 1100px: 3 colunas (esquerda, centro, direita).
- < 1100px: oculta coluna direita.
- < 900px: mantém apenas o feed central; header simplificado.

Interação
- Clique em “Curtir” alterna o estado visual (classe `liked`) nos botões de post.

Conteúdo dinâmico (JSON)
- Stories: `assets/data/stories.json`
- Feed (posts): `assets/data/feed.json`
- Contatos: `assets/data/contacts.json`

Observações
- O JavaScript busca os JSONs e, em caso de erro (ex.: CORS em file://), usa dados de fallback embutidos no código.
- As imagens de stories, posts (quando houver) e anúncios são substituídas por imagens aleatórias do Pexels em tempo de execução, para deixar o visual mais realista.

Tecnologias
- HTML5, CSS3 (variáveis, grid/flex), JavaScript vanilla.
- Projeto 100% estático, sem build ou dependências.

Próximos passos sugeridos
- Substituir emojis por ícones SVG.
- Modo escuro via variáveis CSS.
- Acessibilidade: landmarks ARIA adicionais e foco de teclado.
- Conteúdo dinâmico (carregar posts via JSON/templating).
=======
# Recriando o front do Facebook

Este projeto é um estudo de **HTML**, **CSS** e um pouco de **JavaScript**
para reproduzir a interface principal do Facebook. A proposta é praticar a
construção de layouts responsivos utilizando apenas tecnologias nativas do
navegador.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Swiper](https://swiperjs.com/) para os carrosséis
- [Font Awesome](https://fontawesome.com/) para ícones

## Estrutura do Projeto

```
.
├── index.html
├── assets
│   ├── css
│   ├── js
│   └── img
```

## Como Executar

1. Clone este repositório.
2. Abra o arquivo `index.html` diretamente no navegador ou utilize uma extensão
   de *Live Server* de sua preferência.
3. Nenhuma dependência adicional é necessária, pois o projeto é totalmente
   estático.

Sinta-se à vontade para explorar e customizar!

>>>>>>> 930d367bc83426fc77b3fbf88a4a7c24fbdde775
