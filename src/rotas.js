const express = require('express');
const { listarEmpresas } = require('./controlador');
const rota = express.Router();




rota.get('/empresas', listarEmpresas);


module.exports = rota;