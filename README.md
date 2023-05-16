# Anotações importantes 

<a href="https://sequelize.org/docs/v6/other-topics/migrations/">Documentação</a>

Para criação desse projeto serão necessários as seguintes ferramentas:

- MySql
- Node
- Postman

Comandos:

- npm init -y
- npm install express
- npm install body-parser

## Efetuando as Requisições:

Comando:
node index.js

![Captura de tela 2023-05-15 213609](https://github.com/bruleonel/curso-ingles/assets/104650333/be01737c-fec7-47c4-af7f-412e7ec98f0e)

## Atualização automática:

Para que o código seja atualizado sem você ter que "derrubar" a navegação você pode usar uma biblioteca chamada nodemon com o comando:

- npm install --save-dev nodemon

Adicione o Script e depois o comando:

````js
 "scripts": {
    "start": "nodemon ./api/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
````

- npm run start

## Instalações no projeto

- npm install mysql2
- npm instal sequelize sequelize-cli path
