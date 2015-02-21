/*
 * Modulo usado para mapear a rota de envio de e-mail, onde será recebido um form com os dados do e-mail a ser enviado.
 */
var router = require('express').Router();
var service = require('../services/mail-service.js');

router.post('/', function(req, res, next) {
	service.transporter.sendMail(service.options(req.body), function(err, info) {
		if (err) {
			throw (err)
		} else {
			res.send('Email-OK.');
		}
	});
});

module.exports = router;