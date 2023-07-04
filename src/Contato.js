import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contato.css';

function Contato({ handleMostrarBemVindo }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o e-mail
        // usando a biblioteca ou solução de envio de e-mail de sua escolha
        // Por exemplo, você pode fazer uma solicitação para um servidor back-end
        // para lidar com o envio do e-mail.

        // Limpar o formulário após o envio
        setNome('');
        setEmail('');
        setMensagem('');
    };

    const handleMostrarBemVindoOnClick = () => {
        handleMostrarBemVindo();
    };

    return ( <
        div >
        <
        h2 > Contato < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label htmlFor = "nome" > Nome: < /label> <
        input type = "text"
        id = "nome"
        name = "nome"
        value = { nome }
        onChange = {
            (e) => setNome(e.target.value) }
        required /
        >
        <
        /div> <
        div >
        <
        label htmlFor = "email" > E - mail: < /label> <
        input type = "email"
        id = "email"
        name = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        required /
        >
        <
        /div> <
        div >
        <
        label htmlFor = "mensagem" > Mensagem: < /label> <
        textarea id = "mensagem"
        name = "mensagem"
        value = { mensagem }
        onChange = {
            (e) => setMensagem(e.target.value) }
        required >
        < /textarea> <
        /div> <
        button type = "submit" > Enviar < /button> <
        /form> <
        footer className = "contato-footer" >
        <
        div className = "contato-footer-content" >
        <
        p > Entre em contato conosco: < /p> <
        p > Email: Melhorcafe @gmail.com < /p> <
        p > Telefone: (123) 456 - 7890 < /p> <
        /div> <
        /footer> <
        Link to = "/"
        onClick = { handleMostrarBemVindoOnClick } >
        Início <
        /Link> <
        /div>
    );
}

export default Contato;