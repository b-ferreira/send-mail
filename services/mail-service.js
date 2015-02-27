/*
 *	Serviço responsável por configurar e prover os recursos que possibilitam o envio de e-mail
 *	para a aplicação. Aqui é possível criar o transporter e também o objeto "mailOptions" com as configurações necessárias para o envio.
 *	Este módulo depende do arquivo de configuração local-config.json contido em '../config/', onde são definidas as diretivas de acesso a conta de e-mail
 *	utilizada para o envio.
 */
var nodemailer = require('nodemailer');
var local = require('../config/local-config.json');

// Função usada para criar o objeto de opções do e-mail a ser enviado, contendo o destinatário, remetente e o corpo do e-mail.
var buildMailOptions = function(opt) {
	return {
		from: opt.name + '<'+opt.email+'>',
		to: local.user,
		subject: opt.subject,
		text: opt.text
	};
}

// Função provisória para validação do form. Verifica se os atributos obrigatórios existem no objeto enviado pelo front-end, caso esteja todo em ordem retorna "true".
var validateForm = function(form) {
	return form.hasOwnProperty("name") && form.hasOwnProperty("email") && form.hasOwnProperty("subject") && form.hasOwnProperty("text");
}

// Transporter, objeto responsável por enviar o e-mail baseado na configuração da conta utilizada.
var transporter = nodemailer.createTransport({
	service: local.service,
	auth: {
		user: local.user,
		pass: local.pass
	}
});

// Publica um objeto contendo a função para build das opções do e-mail e o objeto transporter.
module.exports = {
	options: buildMailOptions,
	validateForm: validateForm,
	transporter: transporter
};
