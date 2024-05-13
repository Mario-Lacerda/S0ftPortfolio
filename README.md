<p align="center"> 
    <img src="images/S0ftPortfolioIcon.svg" align="center" height="150"></img>
</p>

<h1 align="center">・S0ftPortfolio </h1> 
<h3 align="center"> 💻 O modelo completo de portfólio para profissionais de (TI) | 100% personalizável onde permite mostrar seus trabalhos fornecendo todos os detalhes sobre você! </h3>

<p align="center">
  <a href="https://www.javascript.com/"><img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <a href="https://nodejs.org/en/blog/release/v20.11.1"><img alt="Node.JS" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
  <a href="https://www.npmjs.com/package/npm/v/10.2.4"><img alt="NPM" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>
  <a href="https://reactjs.org/"><img alt="React.JS" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <a href="https://www.figma.com/"/><img alt="Figma" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"/>
  <a href="https://app.netlify.com/sites/S0ftPortfolio/deploys"><img alt="Netlify" src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"/>
  <a href="https://travis-ci.org/badges/badgerbadgerbadger"><img alt="Visual Studio Code" src="https://img.shields.io/badge/VSCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
</p>

<p align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="auto" width="40">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="auto" width="40">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="auto" width="40">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="auto" width="40">

<img src="https://raw.githubusercontent.com/dustin100/dustin100/master/assests/git-original.svg" height="auto" width="40">

</p>

<p align="center"> 
    <a href="https://gabr1el0x.github.io" target="_blank">
    <img src="images/masterPortfolioThemes.png"></img>
  </a>
</p>

<h3 align="center"> ⭐ Avalie o Projeto! | Ajuda Demais! (+) </h3>

# 📚 Sessões

- Sobre Mim
- Código Aberto (Github)
- Experiência
- Blogs
- Educação
- Contatos

- **[Exemplo Online](https://gabr1el0x.github.io/)**

# 📋 Clonagem

### Pré-requisitos de desenvolvimento:
  
Este projeto utiliza a biblioteca `React.JS` do `JavaScript`. Para desenvolvê-lo, é necessário ter o `Node.JS` e o `NPM` instalados em sua máquina.

### Instalação das dependências:

Acesse o site oficial do `Node.JS` [Download](https://nodejs.org/en) e baixe a versão mais recente estável ou uma versão compatível com os badges indicados no repositório.
Durante a instalação do `Node.JS`, o `NPM` (Node Package Manager) será automaticamente instalado.

### Configurando o ambiente de desenvolvimento

- Clone do repositório:

Após a instalação bem-sucedida do `Node.JS` e `NPM`, abra o terminal e execute o seguinte comando para clonar o repositório para o seu sistema local:

```Bash
git clone https://github.com/gabri1el0x/S0ftPortfolio.git
```
*(Este comando irá baixar todos os arquivos do projeto para a sua máquina.)*

- Instalação de dependências:

Navegue até o diretório onde o repositório clonado foi armazenado e execute o seguinte comando para instalar as dependências necessárias:

```Bash
npm install
```
*(Este comando irá baixar e instalar todas as bibliotecas externas utilizadas pelo projeto.)*

- Executando o projeto:

Com as dependências instaladas, você já pode iniciar o projeto localmente. Execute o seguinte comando no terminal:

```Bash
npm start
```
*(Este comando irá iniciar o servidor de desenvolvimento e abrir o website em seu navegador.)*

# ✏️ Customização

### Personalizando seu Portfólio Online

Este guia permite que você personalize seu portfólio online, tornando-o uma representação única e impactante de suas habilidades e experiências. Aqui estão as principais áreas que você pode modificar:

- Arquivo package.json

1. Localize este arquivo no diretório principal do seu projeto.

2. Altere a propriedade `"name"` para refletir o identificador preferido do seu site.

3. Atualize a propriedade `"homepage"` para `https://<seu-username-github>.github.io`.
*Certifique-se de incluir `https://` para garantir o carregamento correto das fontes*.

- Informações Pessoais

1. Abra o diretório `src/portfolio.js`. Este arquivo contém dados sobre você.

2. Modifique as seguintes seções dentro de `portfolio.js` para adaptá-las ao seu histórico:

3. Página Inicial:
Seção `greeting` para sua introdução e mensagem de boas-vindas.

4. Mídias Sociais:
`socialMediaLinks` para seus perfis de mídia social *links e ícones*.

6. Detalhes Profissionais:
`Experiência, Educação, Habilidades, Certificações` *logos, ícones, etc...*

7. Blog:
Inclua os detalhes do seu blog, se aplicável *link, descrição*.

8. Informações de Contato:
Adicione seus dados de contato: *e-mail, telefone etc...*

### Ícones na Página Inicial

Fonte de Dados:
A seção de habilidades obtém dados do array `skills` dentro de `portfolio.js`.

- Adicionando Ícones:

1. Visite [Iconify](https://icon-sets.iconify.design/) e procure o ícone de habilidade desejada.
Selecione o ícone de sua preferência.
Copie o texto exibido ao lado de "Ícone Selecionado".

2. Em `portfolio.js`, localize o objeto `softwareSkill` correspondente para aquela habilidade.

3. Substitua a propriedade `fontAwesomeClassName` desse objeto `softwareSkill` pelo texto copiado.

### Imagens Personalizadas:

1. Coloque o arquivo de imagem no diretório `public/skills`.
Dentro de `portfolio.js`, para o objeto `softwareSkill` relevante.

2. Defina a propriedade `imageSrc` como o nome do arquivo da imagem.

3. Remova ou deixe vazia a propriedade `fontAwesomeClassName`, ela tem prioridade sobre `imageSrc`.
*Para estilizar a imagem, use a propriedade `style` dentro de `softwareSkill`*.

### Informações do GitHub

1. Busca de Dados:
`fetcher.mjs` no diretório principal, recupera dados do GitHub *pull requests, issues etc...*

3. Variáveis de Ambiente:
Crie um novo arquivo chamado `.env` no diretório principal.

4. Copie o conteúdo de `env.example` para `.env`.

5. Dentro de `.env`, atualize:
`GITHUB_TOKEN`: Obtenha um token de acesso pessoal do [GitHub Token](https://github.com/settings/tokens) concedendo todas as permissões. `GITHUB_USERNAME`: Defina como seu nome de usuário do GitHub.

6. Executando o Script de Atualização:
Certifique-se de ter executado o comando `npm install` previamente.

7. Execute o seguinte comando: `node fetcher.mjs` **(Aviso: Nunca compartilhe seus tokens do GitHub; use-os como variáveis de ambiente.)**

### Logo de Abertura

O logotipo animado apresentado no site de exemplo utiliza o `Figma` para `(Design)` e `(CSS3)` para animação. *Esta parte específica não é personalizável*.

- Alternativas:

1. Crie Seu Próprio Logo:
Use [Figma](https://www.figma.com/), [Adobe XD](https://www.adobe.com/br/), [Adobe Illustrator](https://www.adobe.com/br/) ou [Inkscape](https://inkscape.org/pt-br/), para criar o seu próprio logotipo.

3. Para animação, consulte o diretório: `./src/components/Loader`, para exemplos: `chosenTheme`

4. Desativar a Tela de Abertura:
Abra `src/portfolio.js`.
Localize o objeto `settings`.


# 🌈 Temas

### Alterar os temas do Portfólio

Você pode dar uma olhada no arquivo `src/theme.js` onde todos os temas disponíveis são mencionados com seus respectivos códigos de cores.
Logo abaixo, você verá o código do arquivo:

```JavaScript
export const chosenTheme = blueTheme;
```
*(Você precisa alterar o nome de `blueTheme` para o tema que deseja definir para o seu site.)*

Você pode definir novos temas de maneira semelhante a outros temas e pode atribuir o nome desse novo tema definido a `chosenTheme`.
É isso. Você só precisa alterar o nome do tema e o código cuidará de todo o resto.
**Execute `npm start` para verificar se está tudo certo!**

# 📦 Hospedagem

### Deixando Seu Portfólio Online!

Agora que você concluiu todas as etapas anteriores com sucesso, é hora de colocar seu site online!
**Eu altamente recomendo usar o `GitHub Pages` para fazer isso da maneira mais fácil.**

Para implantar seu site, você tem duas opções. Primeiro, você precisa criar um repositório GitHub com o nome `<seu-username-github>.github.io`. **Por favor, não dê nenhum outro nome a ele.**

Agora, você precisa gerar uma compilação de produção e implantar o site.

- Alternativa 1:

1. Execute `npm run build` para gerar a pasta de compilação de produção.

2. Entre na pasta de compilação, execute `git init` e envie o código gerado para a `branch master` do seu novo repositório no GitHub. Você pode precisar executar `git init` e forçar o envio a cada nova compilação!

- Alternativa 2

1. Execute `npm run deploy` para compilar e criar uma `branch` chamada `gh-pages`. Ele enviará os arquivos build para essa branch.

2. A última etapa da implantação é habilitar o `GitHub Pages` nas configurações do repositório e selecionar a `branch gh-pages`.
Agora, seu site está implantado com sucesso e você pode visitá-lo em: `<seu-username-github>.github.io`.

<p align="center"> 
    <a href="http://www.youtube.com/watch?v=IwBS39TOmpA" target="_blank">
    <img src="http://img.youtube.com/vi/IwBS39TOmpA/0.jpg"></img>
  </a>
</p>

# 🛠️ Tecnologias

- [ReactJS](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [Apollo-Boost](https://www.apollographql.com/docs/react/get-started/)
- [BaseUI](https://github.com/uber/baseweb)
- [React-Reveal](https://www.react-reveal.com/)
- [Styled-Components](https://styled-components.com/)

# 🍥 Ilustrações

- [UnDraw](https://undraw.co/illustrations)

# 📄 Licença

Esse projeto utiliza (Licença MIT) | Veja: [LICENSE.md](./LICENSE) para mais detalhes.

# ✨ Contribuições

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://gabr1el0x.github.io"><img src="https://avatars3.githubusercontent.com/u/20843596?s=460&u=7f184b911f73ae1dc5765ab686fff2b2e984830f&v=4?s=100" width="100px;" alt="Gabriel Azevedo"/><br /><sub><b>Gabriel Azevedo</b></sub></a><br /><a href="https://github.com/gabr1el0x/S0ftPortfolio/commits?author=gabr1el0x" title="Code">💻</a> <a href="https://github.com/gabr1el0x/S0ftPortfolio/commits?author=gabr1el0x" title="Documentation">📖</a> <a href="#design-gabr1el0x" title="Design">🎨</a> <a href="#maintenance-gabr1el0x" title="Maintenance">🚧</a> <a href="#ideas-gabr1el0x" title="Ideas, Planning, & Feedback">🤔</a>
  </td>
    </tr>
  </tbody>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

# 👏🏻 Referências

- Some Design and Implementation Ideas are taken from [Saad Pasta's Developer Portfolio](https://github.com/saadpasta/developerFolio).
- Some Design and Implementation Ideas are taken from [Ashutosh1919's Master Portfolio](https://github.com/ashutosh1919/masterPortfolio).
