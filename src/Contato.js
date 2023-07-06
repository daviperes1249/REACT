import emailjs from "emailjs-com";
import React from 'react';
import './Contato.css';

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();

        // Enviar o formulário usando o emailjs
        emailjs.sendForm('gmailMessage', 'template_c7infom', e.target, 'VxeOWypew-nHC-iZI')
            .then((result) => {
                alert("Mensagem enviada com sucesso! 👍");
            }, (error) => {
                alert(error.message);
            });

        // Redefinir o formulário após o envio
        e.target.reset();
    }

    return ( <
        div >
        <
        div className = "container" >
        <
        h2 > Contato para reclamações e dúvidas < /h2> <
        form onSubmit = { sendEmail } >
        <
        div className = "row pt-5 mx-auto" >
        <
        div className = "col-lg-8 col-sm-12 form-group mx-auto" >
        <
        label > Nome < /label> <
        input type = "text"
        autoFocus className = "form-control"
        required placeholder = "Nome"
        name = "name" / >
        <
        /div> <
        div className = "col-lg-8 col-sm-12 form-group pt-1 mx-auto" >
        <
        label > Email < /label> <
        input type = "email"
        className = "form-control"
        required placeholder = "Seu email"
        name = "email" / >
        <
        /div> <
        div className = "col-lg-8 col-sm-12 form-group pt-1 mx-auto" >
        <
        label > Mensagem < /label> <
        textarea className = "form-control"
        id = ""
        cols = "30"
        rows = "8"
        required placeholder = "Sua mensagem"
        name = "message" > < /textarea> <
        /div> <
        div className = "col-lg-8 col-sm-12 pt-3 mx-auto" >
        <
        input type = "submit"
        className = "btn btn-info"
        value = "Enviar mensagem" / >
        <
        /div> <
        /div> <
        /form> <
        /div> <
        footer className = "footer" >
        <
        div className = "container" >
        <
        p > < strong > Entre em contato conosco pelo telefone: (48) 9919 - 7526 < /strong></p >
        <
        /div> <
        /footer> <
        /div>
    );
}