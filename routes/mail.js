/*
 * Modulo usado para mapear a rota de envio de e-mail, onde será recebido um form com os dados do e-mail a ser enviado.
 */
var router = require('express').Router();
var service = require('../services/mail-service.js');

router.post('/', function(req, res, next) {
	service.transporter.sendMail(service.buildMailOptions(req.body), function(error, info) {
		if (error) {
			res.send('Falha ao enviar e-mail. Por favor, tente mais tarde.');
		} else {
			res.send('E-mail enviado com sucesso.');
		}
	});
});

module.exports = router;