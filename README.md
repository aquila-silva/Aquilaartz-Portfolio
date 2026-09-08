# Aquilaartz — Portfólio artístico

Portfólio visual de **Aquila Fernando Alves Silva**, desenvolvido para apresentar trabalhos autorais de ilustração, retrato, design de personagens e estudos visuais.

O projeto também funciona como uma vitrine de boas práticas para um portfólio hospedado no GitHub e na Vercel: estrutura simples, sem dependências de runtime, responsiva, acessível e fácil de atualizar.

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-e9573f)](https://github.com/aquila-silva/Portf-lio-Art-stico)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-171717)](https://vercel.com/)
[![Licença](https://img.shields.io/badge/licença-MIT-c8c3ba)](LICENSE)

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias e ferramentas](#tecnologias-e-ferramentas)
- [Estrutura de diretórios](#estrutura-de-diretórios)
- [Executando localmente](#executando-localmente)
- [Publicando na Vercel](#publicando-na-vercel)
- [Adicionando novas artes](#adicionando-novas-artes)
- [Personalização](#personalização)
- [Acessibilidade e boas práticas](#acessibilidade-e-boas-práticas)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o projeto

Aquilaartz é uma galeria editorial de trabalhos artísticos. A Home concentra as obras em uma única experiência de navegação, sem criar uma página individual para cada imagem. Cada cartão pode ser aberto em um modal para uma visualização ampliada e uma descrição da peça.

O projeto possui duas páginas públicas:

- **Trabalhos:** apresentação, destaque principal e galeria dinâmica.
- **Contato:** e-mail, GitHub e Instagram para colaborações e comissões.

## Funcionalidades

- Galeria centralizada em dados, sem páginas individuais para cada obra.
- Cartões assimétricos e suporte a imagens panorâmicas.
- Modal acessível para visualização ampliada das obras.
- Suporte a imagens estáticas e GIFs animados.
- Tema claro e tema escuro com preferência salva no navegador.
- Navegação responsiva com menu para telas pequenas.
- Links externos para GitHub e Instagram.
- Metadados SEO básicos e Open Graph.
- Favicon autoral em SVG.
- Headers de segurança e cache configurados para a Vercel.
- Sitemap e `robots.txt` preparados para publicação.

## Tecnologias e ferramentas

### Interface

- HTML5 semântico
- CSS3 com variáveis, Grid, Flexbox e media queries
- JavaScript puro (ES2020+)
- Google Fonts: Manrope e DM Mono

### Desenvolvimento e publicação

- Git e GitHub para versionamento
- Vercel para hospedagem estática e CDN
- Python HTTP server para testes locais sem dependências
- SVG, JPEG, WebP e GIF para os assets visuais

Não há framework ou pacote npm obrigatório. O site é estático e pode ser publicado diretamente a partir da raiz do repositório.

## Estrutura de diretórios

```text
.
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
├── assets/
│   ├── favicon.svg
│   └── img/
│       └── obras e imagens do portfólio
├── css/
│   └── style.css
├── js/
│   └── main.js
├── .gitignore
├── contato.html
├── CONTRIBUTING.md
├── index.html
├── LICENSE
├── README.md
├── robots.txt
└── vercel.json
```

## Executando localmente

### Pré-requisitos

- Git
- Python 3, disponível na maioria dos sistemas Linux e macOS
- Um navegador atualizado

### Passos

```bash
git clone https://github.com/aquila-silva/Portf-lio-Art-stico.git
cd Portf-lio-Art-stico
python3 -m http.server 4173
```

Abra [http://localhost:4173](http://localhost:4173) no navegador.

Para validar a sintaxe do JavaScript:

```bash
node --check js/main.js
```

O projeto não precisa de `npm install`, build ou banco de dados.

## Publicando na Vercel

### Pela interface da Vercel

1. Faça push do projeto para um repositório no GitHub.
2. Acesse [vercel.com/new](https://vercel.com/new).
3. Importe o repositório `aquila-silva/Portf-lio-Art-stico`.
4. Mantenha a raiz do projeto como diretório de publicação.
5. Não informe um comando de build.
6. Publique o projeto.

A Vercel detecta os arquivos HTML e serve o projeto como site estático. O arquivo `vercel.json` adiciona headers de segurança e cache para os assets. Depois de definir o domínio público, um sitemap pode ser adicionado ao `robots.txt`.

### Pela CLI

Com a Vercel CLI instalada e autenticada:

```bash
vercel
```

Para publicar em produção:

```bash
vercel --prod
```

Depois do primeiro deploy, adicione a URL pública ao `robots.txt` caso um sitemap seja criado para o domínio Vercel ou para um domínio personalizado.

## Adicionando novas artes

As obras são cadastradas no array `artworks`, em [js/main.js](js/main.js). Coloque primeiro o arquivo dentro de `assets/img/` e depois adicione um objeto:

```js
{
    title: 'Nome da obra',
    category: 'Categoria · 2026',
    image: 'assets/img/nome-do-arquivo.webp',
    description: 'Descrição curta exibida na visualização ampliada.'
}
```

Para uma imagem horizontal, acrescente `layout: 'wide'`:

```js
{
    title: 'Obra panorâmica',
    category: 'Ilustração · 2026',
    image: 'assets/img/obra-panoramica.webp',
    description: 'Descrição da obra.',
    layout: 'wide'
}
```

Recomendações:

- Use nomes de arquivo em minúsculas, sem espaços e sem acentos.
- Prefira WebP para imagens rasterizadas novas.
- Comprima arquivos grandes antes de adicioná-los ao repositório.
- Escreva títulos, categorias e descrições específicos.
- Confira o layout em desktop e mobile.

## Personalização

### Identidade visual

As cores, tipografia, espaçamento e comportamento responsivo estão em [css/style.css](css/style.css). As variáveis principais ficam no início do arquivo:

```css
:root {
    --ink: #171717;
    --paper: #f1eee8;
    --muted: #716e68;
    --accent: #e9573f;
}
```

### Dados de contato

Atualize os dados diretamente em [contato.html](contato.html), principalmente:

- endereço de e-mail;
- URL do GitHub;
- URL do Instagram.

### Nome e SEO

Os títulos, descrições, favicon e metadados Open Graph ficam no `<head>` de [index.html](index.html) e [contato.html](contato.html).

## Acessibilidade e boas práticas

- Navegação principal com landmarks e `aria-label`.
- Botões de menu, tema e modal com nomes acessíveis.
- Texto alternativo nas imagens da galeria.
- Estado do tema comunicado por `aria-pressed`.
- Links externos com `target="_blank"` e `rel="noreferrer"`.
- Layout responsivo sem depender de JavaScript para conteúdo essencial.
- Arquivos estáticos versionados, sem credenciais ou configurações privadas.

## Contribuição

Consulte [CONTRIBUTING.md](CONTRIBUTING.md) para o fluxo de trabalho, o padrão de cadastro de novas artes e o checklist de pull requests.

## Licença

O código deste projeto está disponível sob a [Licença MIT](LICENSE). As obras artísticas e imagens autorais permanecem protegidas por seus respectivos direitos autorais e não devem ser reutilizadas sem autorização.

## Contato

- Instagram: [@aquilaartz](https://www.instagram.com/aquilaartz/)
- GitHub: [aquila-silva](https://github.com/aquila-silva)
