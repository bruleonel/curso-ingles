const express = require('express');
const boryParser = require('body-parser');

const app = express();

app.use(boryParser.json());

const porta = 3000;

app.get('/teste', (req, res) => res
    .status(200)
    .send({
        mensagem: 'boas vindas à API'
    })
)

app.listen(porta, () => console.log(`O servido está rodando na porta ${porta}`));

module.exports = app;