import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
        div className = "app-container" > {
            mostrarBemVindo && < h1 className = "bem-vindo" > Bem - vindo à página inicial < /h1>} <
            nav className = "app-nav" >
            <
            div className = "links-left" >
            <
            Link to = "/empresa"
            onClick = { handleOcultarBemVindo } >
            Empresa <
            /Link> <
            Link to = "/produtos"
            onClick = { handleOcultarBemVindo } >
            Ver produtos <
            /Link> <
            Link to = "/contato"
            onClick = { handleOcultarBemVindo } >
            Entre em contato conosco <
            /Link> <
            /div> <
            Link to = "/App"
            className = "link-inicio"
            onClick = { handleMostrarBemVindoOnClick } >
            Início <
            /Link> <
            /nav>

            <
            Routes >
            <
            Route path = "/produtos"
            element = { < Produto / > }
            /> <
            Route
            path = "/contato"
            element = { <
                Contato
                mostrarBemVindo = { mostrarBemVindo }
                handleMostrarBemVindo = { handleMostrarBemVindo }
                />
            }
            /> <
            Route path = "/empresa"
            element = { < Empresa / > }
            /> <
            /Routes> <
            /div> <
            /Router>
        );
    }

    export default App;