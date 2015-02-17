
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

// Rotas.
var mail = require('./routes/mail');

// Instancia da aplicação.
var app = express();

// Midlewares da app
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

// Mapeamento de rotas da app.
app.use('/', mail);

// Publica a app para uso de outros modulos.
module.exports = app;

