# Event Plataform Ignite

Plataforma de aulas desenvolvida durante Ignite Lab da plataforma Rocketseat

## Tecnologias

- [ReactJs](https://reactjs.org/)
- [Vite](https://vitejs.dev/guide/)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [GraphQL](https://graphql.org/learn/)
- [GraphQL CodeGen](https://www.graphql-code-generator.com/)
- [Apollo](https://www.apollographql.com/docs/react)
- [GraphCMS](https://graphcms.com/)

## Utilização

Acesse o site [nesse link](https://event-platform-ignite-gamma.vercel.app/)

## Como rodar o projeto

Para rodar esse projeto será necessário possuir o [NodeJs](https://nodejs.org/en/), [Git](https://git-scm.com/) e um editor de sua preferência, como [VS Code](https://code.visualstudio.com/).

### Clonando o projeto

Clone o repositório e o acesse na pasta do projeto

```
$ git clone https://github.com/jhonnytrinca/event-platform-ignite
```

### Rodando a aplicação no servidor web

No diretório do projeto, instale as dependências com:

`yarn start` ou `npm start`

Isso rodará a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualização no browser.

Para acesso as funcionalidades é preciso possuir uma conta e um projeto parametrizado no GraphCMS, criar um novo arquivo .env.local na raiz do projeto com as variáveis de ambiente `VITE_API_ACCESS_TOKEN` e `VITE_GRAPHCMS_URI`.

Necessário também criar um arquivo codegen.yml na raiz do projeto com as informações abaixo, passando o valor de `VITE_GRAPHCMS_URI` dentro do campo "schema":

```
schema: ...
documents: './src/graphql/**/*.graphql'
generates:
  ./src/graphql/generated.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-react-apollo
    config:
      reactApolloVersion: 3
      withHooks: true
      withHOC: false
      withComponent: false
```

## Contribuições

Para contribuir nesse projeto:

- Faça um fork do projeto;
- Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
- Crie um commit com suas alterações: `git commit -m "feature: my feature"`
- Faça o envio das alterações: `git push origin my-feature`
