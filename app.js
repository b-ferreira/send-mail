
var express = require('express');
var app = express();

var mail = require('./routes/mail.js');

// Midlewares da app
app.use(express.bodyParser());

// Mapeamento de rotas da app.
app.use('/', mail);

// Publica a app para uso de outros modulos.
module.exports = app;

