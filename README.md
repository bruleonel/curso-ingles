# Anotações importantes 

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