# Anotações importantes 

<a href="https://sequelize.org/docs/v6/other-topics/migrations/">Documentação</a>

![api](https://github.com/bruleonel/curso-ingles/assets/104650333/35366879-a2b2-4c60-aa04-864e226ae122)


Para criação desse projeto serão necessários as seguintes ferramentas:

- MySql
- Node
- Postman

Comandos:

- npm run start *rodar o projeto*
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

1 - Dentro da pasta Config/config.json deve conter o nome do banco de dados criado no MySqul:

````js
  "development": {
    "username": "root",
    "password": null,
    "database": "escola_ingles",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
````
2 - Depois Crie sua tabela, exemplo desse projeto:
- npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string

3 - Migre os dados para o MySQL: 
- npx sequelize-cli db:migrate

4 - Use o seed para popular a tabela:
- npx sequelize seed:generate --name demo-pessoa

5 - crie a demo:
- npx sequelize seed:generate --name demo-pessoa

6 - Migre a Demo:
- npx sequelize-cli db:seed:all

### Criando os Controllers

- npx sequelize-cli seed:generate --name demo-nivel

Popule a tabela:
![Populando a tabela](https://github.com/bruleonel/curso-ingles/assets/104650333/9914604b-2ec2-449d-9efd-3eb984b99479)

Retorne:
![Retorno da populacao](https://github.com/bruleonel/curso-ingles/assets/104650333/87182fce-2e23-4785-80b1-a762da24cbc6)

Passe para o banco:

- npx sequelize-cli db:seed:all

### Relacione as Tabelas

![Captura de tela 2023-05-17 091851](https://github.com/bruleonel/curso-ingles/assets/104650333/ffc6e15a-c25b-4560-8622-87903abe8019)

![criando as relacoes das tabelas](https://github.com/bruleonel/curso-ingles/assets/104650333/023a08bb-578d-44ca-9084-326d364e7b14)


## Sobre os Comandos

ORM (Object-Relational Mapping) funcionam para facilitar o cotidiano de desenvolvimento. Dessa forma o Sequelize suporta diversos bancos de dados relacionais como PostgreSQL, MySQL, SQLite e MSSQL. Com o Sequelize, é possível mapear objetos do JavaScript para tabelas do banco de dados e realizar operações de CRUD (Create, Read, Update, Delete) utilizando apenas JavaScript, sem a necessidade de escrever queries em SQL.

Há algumas mudanças e atualizações entre as versões do Sequelize, a utilizada no curso é a versão 5 e você pode consultar sua documentação caso tenha alguma dúvida.

O Sequelize também possui uma ferramenta de linha de comando, que chamamos de CLI (Command Line Interface), que pode ser usada para criar um banco de dados, gerar modelos, migrações e seeders, dentre outras tarefas. Neste curso, por exemplo, a criação do banco de dados é realizada diretamente pela linha de comando do banco MySQL. No entanto, é possível realizar a mesma operação via CLI do Sequelize,com o comando npx sequelize-cli db:create.

Com a CLI do Sequelize 5.5.1, que é a versão utilizada neste curso, é possível utilizar diversos comandos para gerenciar o banco de dados, tais como:

Comandos CLI:

## Comandos Sequelize	e Descrição


``sequelize db:migrate	``
*Executa todas as migrações pendentes para atualizar o banco de dados.*


``sequelize db:migrate:schema:timestamps:add``	
*Atualiza uma tabela de migração para ter marcação de data/hora*

``sequelize db:migrate:status``	
*Exibe o status de todas as migrações*

``sequelize db:migrate:undo	``
*Reverte a migração mais recente do banco de dados.*

``sequelize db:migrate:undo:all``	
*Reverte todas as migrações*

``sequelize db:seed	``
*Inicializa um seeder específico*

``sequelize db:seed:undo``	
*Deleta arquivo do banco de dados*

``sequelize db:seed:all	``
*Inicializa todos os seeders*

``sequelize db:seed:undo:al``l	
*Deleta todos os dados do banco de dados*

````sequelize db:create	````
*Cria um banco com uma configuração específica*

``sequelize db:drop	``
*exclui o banco de dados especificado na configuração.*

``sequelize init``	
*Inicializa um projeto*

``sequelize init:config	``
*Inicializa as configurações*

``sequelize init:migrations``	
*Inicializa as migrações*

``sequelize init:models	``
*Inicializa as models*

``sequelize init:seeders``	
*Inicializa os seeders*

``sequelize migration:generate [alias: migration:create]	``
*Gera um novo arquivo de migração*

``sequelize model:generate [alias: model:create]	``
*Gera uma model e sua migração*

``sequelize seed:generate	``
*Gera um novo arquivo de seed*

Além desses comandos, a CLI do Sequelize 5.5.1 também permite criar usuários, gerar senhas criptografadas, atualizar configurações de banco de dados, entre outras tarefas. Dessa forma, a CLI do Sequelize 5.5.1 é uma ferramenta poderosa e flexível para gerenciar bancos de dados em projetos Node.js. Com ela, é possível criar e atualizar modelos, migrações e seeders de forma fácil e rápida, além de realizar outras tarefas essenciais para o desenvolvimento de aplicações web.


## Curiosidades

### api/index.js 
- É o ponto de entrada da aplicação, onde iniciamos o servidor e chamamos a biblioteca Express para gerenciar as rotas da API.

### api/models/index.js 
- É o arquivo que gerencia todos os modelos da pasta models e é atraveś dele que o Sequelize conecta os modelos ao banco de dados de acordo com o ambiente escolhido (durante o projeto estamos trabalhando com o ambiente 'development', de desenvolvimento).

### api/routes/index.js 
- É o ponto de entrada que gerencia os arquivos de rotas, importa os métodos de cada arquivo api/routes/[arquivo] através dos require e chama estes métodos de acordo com a rota acessada pelo usuário.

````js
const routes = require('./routes')
````

Nesse caso não é necessário incluir o nome do arquivo no caminho, pois o JavaScript, por padrão, já procura um arquivo index.js dentro da pasta routes. O arquivo api/routes/index.js, por sua vez, organiza todos os arquivos de rotas que estão dentro da pasta, e repassar essa informação para o ponto de entrada da aplicação.

E por que não ter apenas um arquivo com todas as rotas, ou chamá-las direto em api/index.js? Porque, à medida em que a aplicação cresce em complexidade, é possível ter muitas rotas, dependendo da operação que queremos fazer. Então quanto mais separadas ficam as responsabilidades, mais fácil de se localizar no código, modificar linhas, atualizar funcionalidades e etc.

Quando importamos ``const database = require('../models')`` no controlador PessoaController.js ocorre o mesmo processo: o JavaScript localiza o arquivo index.js dentro da pasta models e a partir dele o Sequelize identifica qual o ambiente, conecta com o banco correto, indexa os modelos presentes na pasta e faz as operações.


Se você pesquisou tutoriais sobre como fazer associações com Sequelize, pode ter visto que em alguns deles a associação 1:n (um para muitos) é feita utilizando somente o método hasMany(), sem acrescentar o belongsTo(). Vai funcionar? Então por que a documentação do Sequelize diz para utilizar os dois métodos juntos?

Vamos pegar o seguinte exemplo:

````js
Equipe.hasMany(Atleta);
Atleta.belongsTo(Equipe);
````
Ou seja, uma equipe tem vários (hasMany) atletas, mas atletas pertencem à (belongsTo) somente uma equipe cada.

### Bom, mas e aí?
Quando utilizamos o método Atleta.belongsTo(Equipe) o Sequelize cria, “por baixo dos panos” alguns métodos “getters” e “setters”, como por exemplo atleta.getEquipe().

O método Equipe.hasMany(Atleta) faz a associação na outra ponta, permitindo a criação do método equipe.getAtletas(). A criação destes métodos é um comportamento padrão do Sequelize, mesmo que não tenham sido usados no projeto que fizemos no curso.

Se utilizarmos somente um dos métodos - por exemplo, somente o hasMany em um dos lados da relação - seria possível usar o método para get (trazer) todas as atletas de uma equipe, mas não a equipe a que pertence uma atleta.
