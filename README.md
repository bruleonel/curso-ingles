# Anotações importantes 

<a href="https://sequelize.org/docs/v6/other-topics/migrations/">Documentação</a>

![api](https://github.com/bruleonel/curso-ingles/assets/104650333/35366879-a2b2-4c60-aa04-864e226ae122)


Para criação desse projeto serão necessários as seguintes ferramentas:

- MySql
- Node
- Postman

**Comandos para rodar o projeto:**

``npm run start ``

# Iniciando o Projeto (ordem)

``npm init -y``

``npm install express``

``npm install body-parser``

1) Crie uma pasta para separar o projeto, aqui criei a pasta API>index.js;
2) Importe o express e o Body-Parser;
3) Instale o nodemon;

``npm install --save-dev nodemn``

4) Adicione um Script no arquivo package.json para atualização automática do run;

````js
 "scripts": {
    "start": "nodemon ./api/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
````
5) Pode rodar o comando:

``npm run start``

## Instalações no projeto

``npm install mysql2``

``npm instal sequelize sequelize-cli path``

``npx sequelize-cli init``

*Foram criados alguns arquivos que serão usados no projeto*

<a href="https://sequelize.org/v5/manual/migrations.html">Documentação</a>

6) Coloque tudo dentro da pasta API;

7) Para os arquivos não ficarem "perdidos" crie o arquivo .sequelizerc dentro da pasta geral:

<a href="https://sequelize.org/docs/v6/other-topics/migrations/">Documentação (role para baixo até o exemplo com o título: "Using Babel")</a>

## Conectando com o Banco

![Captura de tela 2023-05-17 091851](https://github.com/bruleonel/curso-ingles/assets/104650333/ffc6e15a-c25b-4560-8622-87903abe8019)

8) Entre no MySql e crie o Banco escola_ingles;

``CREATE DATABASE escola_ingles``

9) Dentro da pasta Config/config.json deve conter o nome do banco de dados criado no MySqul:

````js
  "development": {
    "username": "root",
    "password": null, //COLOQUE SUA SENHA AQUI
    "database": "escola_ingles",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
````
*Só uma observação, o arquivo index, criado dentro de models servirá para gerenciar todos os seus modelos*

## Criando Modelos

*Lembre-se de criar os modelos de maneira que não afetem as relações das tabelas*

10) Comando usado aqui:

``npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string``

*Foram criados os arquivos dentro de "Models" e dentro de "Migrations", além disso o Id foi criado automáticamente*

### Saiba mais:

Em SQL, o termo "migrações" refere-se a um processo de gerenciamento e manipulação de alterações estruturais em um banco de dados. As migrações são utilizadas para modificar o esquema de banco de dados, como criar ou alterar tabelas, adicionar ou remover colunas, definir restrições e executar outras operações relacionadas à estrutura do banco de dados.

As migrações são normalmente aplicadas em bancos de dados relacionais por meio de scripts ou arquivos que contêm instruções SQL. Esses scripts são executados em ordem específica para que as alterações sejam aplicadas de forma consistente e controlada.

O uso de migrações oferece várias vantagens, como permitir a evolução incremental do esquema do banco de dados, facilitar a colaboração em equipe e o controle de versão do banco de dados, além de permitir a reversão de alterações, se necessário.

Em resumo, migrações em SQL são um mecanismo que permite realizar alterações estruturais em um banco de dados de forma organizada, controlada e rastreável.

11) Migre os dados para o MySQL: 

``npx sequelize-cli db:migrate``

11) Use o seed para popular a tabela e crie uma Demo:

``npx sequelize seed:generate --name demo-pessoa``

![Populando a tabela](https://github.com/bruleonel/curso-ingles/assets/104650333/9914604b-2ec2-449d-9efd-3eb984b99479)

Retorne:

![Retorno da populacao](https://github.com/bruleonel/curso-ingles/assets/104650333/87182fce-2e23-4785-80b1-a762da24cbc6)

12) Migre a Demo:

`` npx sequelize-cli db:seed:all``

### Relacione as Tabelas


![criando as relacoes das tabelas](https://github.com/bruleonel/curso-ingles/assets/104650333/023a08bb-578d-44ca-9084-326d364e7b14)


## Sobre os Comandos

ORM (Object-Relational Mapping) funcionam para facilitar o cotidiano de desenvolvimento. Dessa forma o Sequelize suporta diversos bancos de dados relacionais como PostgreSQL, MySQL, SQLite e MSSQL. Com o Sequelize, é possível mapear objetos do JavaScript para tabelas do banco de dados e realizar operações de CRUD (Create, Read, Update, Delete) utilizando apenas JavaScript, sem a necessidade de escrever queries em SQL.

Há algumas mudanças e atualizações entre as versões do Sequelize, a utilizada no curso é a versão 5 e você pode consultar sua documentação caso tenha alguma dúvida.

O Sequelize também possui uma ferramenta de linha de comando, que chamamos de CLI (Command Line Interface), que pode ser usada para criar um banco de dados, gerar modelos, migrações e seeders, dentre outras tarefas. Neste curso, por exemplo, a criação do banco de dados é realizada diretamente pela linha de comando do banco MySQL. No entanto, é possível realizar a mesma operação via CLI do Sequelize,com o comando npx sequelize-cli db:create.

Com a CLI do Sequelize 5.5.1, que é a versão utilizada neste curso, é possível utilizar diversos comandos para gerenciar o banco de dados, tais como:

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


# Atualizações importantes!

Esse projeto este projeto está sendo usado para os estudos da semana 18, sendo assim recebemos alguns requisitos do projeto:

- O cliente não gostaria que registros importantes do sistema, como as Pessoas, sejam apagados definitivamente do banco de dados.
<a href="https://sequelize.org/docs/v6/core-concepts/paranoid/">Documentação</a>

- Para deixar a interface mais limpa, o cliente gostaria que na lista de Pessoas, por padrão, fossem exibidos somente os usuários ativos.
<a href="https://sequelize.org/docs/v6/other-topics/scopes/">Documentação</a>

- Foram percebidas algumas falhas de validação dos formulários por parte do front-end, o que resultou em dados de email inválidos no banco. É desejável que essa validação não seja responsabilidade exclusiva do front.
<a href="https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/">Documentação</a>

Nesse caso dentro do arquivo pessoas js será feito a seguinte alteração:

*antes*
````js
email: DataTypes.STRING
````

*depois*
````js
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:true
      }
    }
````

*ou*
````js
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: { args: true, msg: 'E-mail inválido, por favor tente outro e-mail' }
      }
    }
````

- É importante poder consultar todas as matrículas confirmadas referentes a estudante X de forma rápida.
- O cliente gostaria de poder consultar as turmas abertas por intervalo de data, para não receber informações desnecessárias (como turmas antigas).
- O cliente quer poder consultar as matrículas por turma e saber quais delas estão lotadas, para organizar melhor as matrículas.
- O cliente gostaria que, uma vez que o cadastro de um estudante fosse desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”.
- Durante o projeto vamos analisar esta lista e transformar esses requisitos em novas funcionalidades.
