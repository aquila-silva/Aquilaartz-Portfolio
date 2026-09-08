# Contribuindo

Obrigado pelo interesse em contribuir com o Aquilaartz. Este projeto é um portfólio autoral, portanto alterações de conteúdo e identidade visual devem respeitar a direção artística do site.

## Fluxo de trabalho

1. Crie uma branch a partir de `main`.
2. Faça uma alteração pequena e com objetivo claro.
3. Teste as páginas localmente.
4. Abra um pull request descrevendo o que mudou e como foi validado.

## Adicionando uma arte

As obras são cadastradas no array `artworks`, em `js/main.js`. Para cada nova peça, informe:

- `title`: título da obra;
- `category`: técnica, tipo ou ano;
- `image`: caminho relativo dentro de `assets/img/`;
- `description`: descrição breve para o modal;
- `layout: "wide"` apenas para imagens horizontais.

Use nomes de arquivos descritivos, formatos otimizados para a web e texto alternativo coerente.

## Checklist do pull request

- [ ] A obra ou alteração funciona em desktop e mobile.
- [ ] O JavaScript passa em `node --check js/main.js`.
- [ ] Todas as imagens referenciadas existem em `assets/img/`.
- [ ] A navegação, os temas e o modal continuam funcionando.
- [ ] Não foram adicionadas credenciais ou arquivos gerados.
