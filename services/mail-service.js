/*
 *	Serviço responsável por configurar e prover os recursos que possibilitam o envio de e-mail
 *	para a aplicação. Aqui é possível criar o transporter e também o objeto "mailOptions".
 */

var nodemailer = require('nodemailer');

var buildMailOptions = function(opt) {
	return {
		from: opt.from,
		to: opt.to,
		subject: 'E-mail de contato do site pessoal',
		text: opt.text
	};
}

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'bferreira.assis@gmail.com',
		pass: '157Flex#Dev'
	}
});

module.exports = {
	options: buildMailOptions,
	transporter: transporter
};
