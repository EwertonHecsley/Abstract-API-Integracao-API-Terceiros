const express = require('express');
const app = express();
const rota = require('./rotas');

app.use(express.json());

app.use('/', rota);


module.exports = app;