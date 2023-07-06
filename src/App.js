import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Produto from './Produto';
import Contato from './Contato';
import Empresa from './Empresa';
import './App.css';

function App() {
    const [mostrarBemVindo, setMostrarBemVindo] = useState(true);

    const handleMostrarBemVindo = () => {
        setMostrarBemVindo(true);
    };

    const handleOcultarBemVindo = () => {
        setMostrarBemVindo(false);
    };

    const handleMostrarBemVindoOnClick = () => {
        handleMostrarBemVindo();
    };

    return ( <
        Router >
        <
        div className = "app-container" >
        <
        nav className = "app-nav" >
        <
        div className = "links-left" >
        <
        Link to = "/empresa"
        onClick = { handleOcultarBemVindo } >
        Empresa <
        /Link> <
        Link to = "/produto"
        onClick = { handleOcultarBemVindo } >
        Ver produtos <
        /Link> <
        Link to = "/contato"
        onClick = { handleOcultarBemVindo } >
        Contato

        <
        /Link>

        {
            window.location.pathname !== '/' && ( <
                Link to = "/"
                className = "link-inicio"
                onClick = { handleMostrarBemVindoOnClick } >
                Início <
                /Link>
            )
        } < /div>

        <
        /nav>

        { /* Renderiza um título de "Bem-vindo à página inicial" se mostrarBemVindo for verdadeiro */ } {
            mostrarBemVindo && < h1 className = "bem-vindo" > Bem - vindo ao Café Campeche < /h1>}

            <
            Routes > { /* Rota para a página de Produtos */ } <
                Route path = "/produto"
            element = { < Produto / > }
            />

            { /* Rota para a página de Contato, passando as props mostrarBemVindo e handleMostrarBemVindo */ } <
            Route
            path = "/contato"
            element = { <
                Contato
                mostrarBemVindo = { mostrarBemVindo }
                handleMostrarBemVindo = { handleMostrarBemVindo }
                />
            }
            />

            { /* Rota para a página de Empresa */ } <
            Route path = "/empresa"
            element = { < Empresa / > }
            /> <
            /Routes> <
            /div> <
            /Router>
        )
    }

    export default App;