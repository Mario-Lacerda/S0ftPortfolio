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

### Personalizando Seu Portfólio Online

Este guia permite que você personalize seu portfólio online, tornando-o uma representação única e impactante de suas habilidades e experiências. Aqui estão as principais áreas que você pode modificar:

1. Arquivo package.json

Localize este arquivo no diretório principal do seu projeto.
Altere a propriedade "name" para refletir o identificador preferido do seu site.

Atualize a propriedade "homepage" para `https://<seu-username-github>.github.io/`. Certifique-se de incluir `https://` para garantir o carregamento correto das fontes.

2. Informações Pessoais

Abra o diretório `src/portfolio.js`. Este arquivo contém dados sobre você.
Modifique as seguintes seções dentro de `portfolio.js` para adaptá-las ao seu histórico:

3. Página Inicial: Seção (greeting) para sua introdução e mensagem de boas-vindas.

3. Mídias Sociais: (socialMediaLinks) para seus perfis de mídia social (links e ícones).

4. Detalhes Profissionais: (Experiência, Educação, Habilidades, Certificações) *logos, ícones, etc...*

5. Blog: Inclua os detalhes do seu blog, se aplicável (link, descrição).

6. Informações de Contato: Adicione seus dados de contato: *e-mail, telefone etc...*

### Ícones na Página Inicial

Fonte de Dados: A seção de habilidades obtém dados do array skills dentro de `portfolio.js`.

1. Adicionando Ícones:

Visite [Iconify](https://icon-sets.iconify.design/) e procure o ícone de habilidade desejada.
Selecione o ícone de sua preferência.
Copie o texto exibido ao lado de "Ícone Selecionado".

2. Em `portfolio.js`, localize o objeto `softwareSkill` correspondente para aquela habilidade.
Substitua a propriedade `fontAwesomeClassName` desse objeto `softwareSkill` pelo texto copiado.

### Imagens Personalizadas:

1. Coloque o arquivo de imagem no diretório `public/skills`.
Dentro de `portfolio.js`, para o objeto `softwareSkill` relevante, defina a propriedade `imageSrc` como o nome do arquivo da imagem.

2. Remova ou deixe vazia a propriedade `fontAwesomeClassName` (ela tem prioridade sobre `imageSrc`).
Para estilizar a imagem, use a propriedade `style` dentro de `softwareSkill`.

### Informações do GitHub

1. Busca de Dados: `fetcher.mjs` no diretório principal, recupera dados do GitHub *pull requests, issues etc...*

2. Variáveis de Ambiente:
Crie um novo arquivo chamado `.env` no diretório principal.
Copie o conteúdo de `env.example` para `.env`.

3. Dentro de `.env`, atualize:
`GITHUB_TOKEN`: Obtenha um token de acesso pessoal do GitHub [Token](https://github.com/settings/tokens) concedendo todas as permissões.
`GITHUB_USERNAME`: Defina como seu nome de usuário do GitHub.

4. Executando o Script de Atualização:
Certifique-se de ter executado o comando `npm install` previamente.

5. Execute o seguinte comando (trate tokens como dados confidenciais): `node fetcher.mjs` **(Aviso: Nunca compartilhe seus tokens do GitHub; use-os como variáveis de ambiente.)**

### Logo de Abertura

O logotipo animado apresentado no site de exemplo utiliza o `Figma` para design e CSS para animação. *Esta parte específica não é personalizável*.

- Alternativas:

1. Crie Seu Próprio Logo:
Use [Figma](https://www.figma.com/), `Adobe XD`, `Adobe Illustrator` ou `Inkscape` para criar o logotipo.
Para animação, consulte o diretório `./src/components/Loader` para exemplos `chosenTheme`
2. Desativar a Tela de Abertura:
Abra `src/portfolio.js`.
Localize o objeto `settings`.


# 🌈 Temas

- You can take a look at `src/theme.js` file where all available themes are mentioned with their respective color codes
- At the bottom of this file you will see the below code:
  - `export const chosenTheme = blueTheme;`
  - You need to change the name from `blueTheme` to whatever theme you want to set your website to
  - You can define new theme similarly as other themes and you can assign name of that new defined theme to `chosenTheme`
- That's it. You just need to change the theme name and the code will take care of everything else
- Run `npm start` to check if everything is ok.

# 📦 Hospedagem

- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!
- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this the EASIEST WAY.
- To deploy your website, you have two options. First you need to create a github repository with the name `<your-github-username>.github.io`. Please don't give it any other name.
- Now, you need to generate a production build and deploy the website.

**Option 1:**

- Run `npm run build` to generate the production build folder.
- Enter the build folder, `git init` and push the generated code to the `master` branch of your new repository on github. That's it. It's Done.
- You may need to `git init` and force push at every new build.

**Option 2 (will not work with [user pages](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)):**

- Run `npm run deploy` to build and create a branch called `gh-pages`. It will push the `build` files to that branch.
- The last step in deploying is to enable `Github Pages` in settings of the repository and select `gh-pages` branch.

Now, your website is successfully deployed and you can visit it at `<your-github-username>.github.io`.  
If you are stuck somewhere and want to observe the deployment process in depth, then please watch below video.

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

Esse projeto utiliza-se (Licença MIT) - Veja: [LICENSE.md](./LICENSE) para mais detalhes.

# ✨ Contribuições

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://ashutosh1919.github.io"><img src="https://avatars3.githubusercontent.com/u/20843596?s=460&u=7f184b911f73ae1dc5765ab686fff2b2e984830f&v=4?s=100" width="100px;" alt="Ashutosh Hathidara"/><br /><sub><b>Ashutosh Hathidara</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=ashutosh1919" title="Code">💻</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=ashutosh1919" title="Documentation">📖</a> <a href="#design-ashutosh1919" title="Design">🎨</a> <a href="#maintenance-ashutosh1919" title="Maintenance">🚧</a> <a href="#ideas-ashutosh1919" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://danielmarostica.github.io/"><img src="https://avatars3.githubusercontent.com/u/3595998?v=4?s=100" width="100px;" alt="Daniel Marostica"/><br /><sub><b>Daniel Marostica</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=danielmarostica" title="Documentation">📖</a> <a href="#design-danielmarostica" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dineshnadimpalli.com"><img src="https://avatars2.githubusercontent.com/u/13104926?v=4?s=100" width="100px;" alt="Dinesh Nadimpalli"/><br /><sub><b>Dinesh Nadimpalli</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=dineshnadimpalli" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jivthesh.github.io"><img src="https://avatars3.githubusercontent.com/u/20579980?v=4?s=100" width="100px;" alt="Jivthesh M R"/><br /><sub><b>Jivthesh M R</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=jivthesh" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jatinchauhan.tech"><img src="https://avatars2.githubusercontent.com/u/40722235?v=4?s=100" width="100px;" alt="Jatin Chauhan"/><br /><sub><b>Jatin Chauhan</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=mrjatinchauhan" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://th3c0d3br34ker.github.io/"><img src="https://avatars1.githubusercontent.com/u/60807938?v=4?s=100" width="100px;" alt="Jainam Desai"/><br /><sub><b>Jainam Desai</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=th3c0d3br34ker" title="Code">💻</a> <a href="#question-th3c0d3br34ker" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://miftaulmannan.wordpress.com/"><img src="https://avatars0.githubusercontent.com/u/42533823?v=4?s=100" width="100px;" alt="Miftaul Mannan"/><br /><sub><b>Miftaul Mannan</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=Tasin5541" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://a-mishra.github.io"><img src="https://avatars0.githubusercontent.com/u/10567548?v=4?s=100" width="100px;" alt="Ashutosh Mishra"/><br /><sub><b>Ashutosh Mishra</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=a-mishra" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://tamojit.wixsite.com/mrtamojit"><img src="https://avatars0.githubusercontent.com/u/40804626?v=4?s=100" width="100px;" alt="Tamojit"/><br /><sub><b>Tamojit</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=tamojit-123" title="Documentation">📖</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=tamojit-123" title="Code">💻</a> <a href="#design-tamojit-123" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://prabin-karki.com.np"><img src="https://avatars.githubusercontent.com/u/43983896?v=4?s=100" width="100px;" alt="Prabin Karki"/><br /><sub><b>Prabin Karki</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=githubprabin143" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://praveen.science/"><img src="https://avatars.githubusercontent.com/u/1830380?v=4?s=100" width="100px;" alt="Praveen Kumar Purushothaman"/><br /><sub><b>Praveen Kumar Purushothaman</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=praveenscience" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://baul.ml"><img src="https://avatars.githubusercontent.com/u/33395806?v=4?s=100" width="100px;" alt="paul"/><br /><sub><b>paul</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=baulml" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SandipDhang"><img src="https://avatars.githubusercontent.com/u/50694884?v=4?s=100" width="100px;" alt="Sandip Dhang"/><br /><sub><b>Sandip Dhang</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=SandipDhang" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ioribrn"><img src="https://avatars.githubusercontent.com/u/43734587?v=4?s=100" width="100px;" alt="Jawad Moustadif"/><br /><sub><b>Jawad Moustadif</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=ioribrn" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/priyanshk20"><img src="https://avatars.githubusercontent.com/u/52736997?v=4?s=100" width="100px;" alt="Priyansh Khandelwal"/><br /><sub><b>Priyansh Khandelwal</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=priyanshk20" title="Code">💻</a> <a href="#design-priyanshk20" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/abdslam01"><img src="https://avatars.githubusercontent.com/u/59281502?v=4?s=100" width="100px;" alt="Abdessalam Bahafid"/><br /><sub><b>Abdessalam Bahafid</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=abdslam01" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dhruvkrishnavaid.github.io"><img src="https://avatars.githubusercontent.com/u/69188774?v=4?s=100" width="100px;" alt="Dhruv Krishna Vaid"/><br /><sub><b>Dhruv Krishna Vaid</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=dhruvkrishnavaid" title="Code">💻</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=dhruvkrishnavaid" title="Documentation">📖</a> <a href="#ideas-dhruvkrishnavaid" title="Ideas, Planning, & Feedback">🤔</a> <a href="#question-dhruvkrishnavaid" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kasroudra.github.io"><img src="https://avatars.githubusercontent.com/u/78908440?v=4?s=100" width="100px;" alt="KasRoudra"/><br /><sub><b>KasRoudra</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=KasRoudra" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://telegram.dog/AlbertEinstein_TG"><img src="https://avatars.githubusercontent.com/u/73480087?v=4?s=100" width="100px;" alt="Albert Einstein"/><br /><sub><b>Albert Einstein</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=AlbertEinsteinTG" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SurajPratap10"><img src="https://avatars.githubusercontent.com/u/92919173?v=4?s=100" width="100px;" alt="Suraj Pratap"/><br /><sub><b>Suraj Pratap</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=SurajPratap10" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lightmap.dev"><img src="https://avatars.githubusercontent.com/u/40917760?v=4?s=100" width="100px;" alt="Sai Teja"/><br /><sub><b>Sai Teja</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=saiteja13427" title="Code">💻</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=saiteja13427" title="Documentation">📖</a> <a href="#maintenance-saiteja13427" title="Maintenance">🚧</a> <a href="#ideas-saiteja13427" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://anirudhpanda.in/"><img src="https://avatars.githubusercontent.com/u/66218496?v=4?s=100" width="100px;" alt="Anirudh Panda"/><br /><sub><b>Anirudh Panda</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=AnirudhPanda" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://hidayat7z.github.io"><img src="https://avatars.githubusercontent.com/u/63554016?v=4?s=100" width="100px;" alt="Md Hidayat Rasool"/><br /><sub><b>Md Hidayat Rasool</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=hidayat7z" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/siddhantsadangi/"><img src="https://avatars.githubusercontent.com/u/41324509?v=4?s=100" width="100px;" alt="Siddhant Sadangi"/><br /><sub><b>Siddhant Sadangi</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=SiddhantSadangi" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://anoopvarghese.in/"><img src="https://avatars.githubusercontent.com/u/59723767?v=4?s=100" width="100px;" alt="Anoop V"/><br /><sub><b>Anoop V</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=vanoop729" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aash1999"><img src="https://avatars.githubusercontent.com/u/39939476?v=4?s=100" width="100px;" alt="Aakash Singh"/><br /><sub><b>Aakash Singh</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=aash1999" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://aherrera3.github.io/"><img src="https://avatars.githubusercontent.com/u/52289646?v=4?s=100" width="100px;" alt="Angélica Herrera Alba"/><br /><sub><b>Angélica Herrera Alba</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=aherrera3" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://davidminkovski.com"><img src="https://avatars.githubusercontent.com/u/1609264?v=4?s=100" width="100px;" alt="David Minkovski"/><br /><sub><b>David Minkovski</b></sub></a><br /><a href="#ideas-dminkovski" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=dminkovski" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://cdigruttola.it"><img src="https://avatars.githubusercontent.com/u/9153905?v=4?s=100" width="100px;" alt="Carmine Di Gruttola"/><br /><sub><b>Carmine Di Gruttola</b></sub></a><br /><a href="#ideas-cdigruttola" title="Ideas, Planning, & Feedback">🤔</a> <a href="#promotion-cdigruttola" title="Promotion">📣</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Vyomrana02"><img src="https://avatars.githubusercontent.com/u/87069619?v=4?s=100" width="100px;" alt="Vyom Rana"/><br /><sub><b>Vyom Rana</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=Vyomrana02" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/parthrc"><img src="https://avatars.githubusercontent.com/u/101104958?v=4?s=100" width="100px;" alt="Parth Chawande"/><br /><sub><b>Parth Chawande</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=parthrc" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0Armaan025"><img src="https://avatars.githubusercontent.com/u/104704093?v=4?s=100" width="100px;" alt="Armaan"/><br /><sub><b>Armaan</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=0Armaan025" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://varundhand.netlify.app/"><img src="https://avatars.githubusercontent.com/u/110025628?v=4?s=100" width="100px;" alt="Varun Dhand"/><br /><sub><b>Varun Dhand</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=varundhand" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://vjspranav.dev"><img src="https://avatars.githubusercontent.com/u/17949836?v=4?s=100" width="100px;" alt="VJS Pranavasri"/><br /><sub><b>VJS Pranavasri</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=vjspranav" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://rahulkush1.github.io/"><img src="https://avatars.githubusercontent.com/u/90745824?v=4?s=100" width="100px;" alt="Rahul Kushwaha"/><br /><sub><b>Rahul Kushwaha</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=Rahulkush1" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

# 👏🏻 Referências

- Some Design and Implementation Ideas are taken from [Saad Pasta's Developer Portfolio](https://github.com/saadpasta/developerFolio).
- Some Design and Implementation Ideas are taken from [Ashutosh1919's Master Portfolio](https://github.com/ashutosh1919/masterPortfolio).
