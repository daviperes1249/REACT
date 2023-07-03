const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001; // ou qualquer outra porta que você deseje usar

// Configurar o transporte de e-mail
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'daviperes108@gmail.com',
        pass: '12345',
    },
});

// Definir rota para enviar e-mails
app.post('/enviar-email', (req, res) => {
    const { nome, email, mensagem } = req.body;

    // Configurar os detalhes do e-mail
    const mailOptions = {
        from: 'daviperes108@gmail.com',
        to: 'davi_peres@estudante.sesisenai.org.br',
        subject: 'Novo e-mail de contato',
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    // Enviar o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Erro ao enviar o e-mail' });
        } else {
            console.log('E-mail enviado: ' + info.response);
            res.json({ success: 'E-mail enviado com sucesso' });
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});