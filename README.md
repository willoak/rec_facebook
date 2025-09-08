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

## Dicas rápidas de Git

- Desfazer um `git add` (desestage um arquivo):

```bash
# desfazer um arquivo
git restore --staged caminho/para/arquivo

# desfazer tudo (equivalente a "voltar o git add .")
git restore --staged .
```

Se estiver usando uma versão antiga do Git (<2.23), use:

```bash
git reset HEAD caminho/para/arquivo
git reset HEAD .
```

- Atualizar (amendar) o último commit com as mudanças staged:

```bash
git commit --amend
```

Para não abrir o editor e manter a mesma mensagem:

```bash
git commit --amend --no-edit
```

- Enviar um commit amendado para o remoto (use com cuidado):

```bash
# recomendado: força segura
git push --force-with-lease origin master
```

- Alternar remote para HTTPS (se tiver problemas com SSH):

```bash
git remote set-url origin https://github.com/<usuario>/<repo>.git
```

- Testar conexão SSH com GitHub:

```bash
ssh -T git@github.com
```

Se a chave SSH não estiver registrada, copie o conteúdo de `~/.ssh/id_ed25519.pub`
e adicione em: https://github.com/settings/keys

## Resolução de conflitos básicos

Se apareceram marcadores de merge no arquivo (por exemplo `<<<<<<<`, `=======`,
`>>>>>>>`), escolha a versão que deseja manter ou combine as mudanças, então:

```bash
# marque o arquivo como resolvido
git add index.html
git commit
```

Durante um merge você pode aceitar a versão local (ours) ou a remota (theirs):

```bash
git checkout --ours index.html
git add index.html
# ou
git checkout --theirs index.html
git add index.html
git commit
```

## Outros
- Arquivo principal: `index.html`.
- Estática; nenhum build é necessário.

Contribuições são bem-vindas. Se quiser, faço um commit com este README e
envio para o repositório — quer que eu faça isso agora?
