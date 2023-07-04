import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Produto from './Produto';
import Contato from './Contato';
import './App.css';

function App() {
    const [mostrarBemVindo, setMostrarBemVindo] = useState(true);

    const handleMostrarBemVindo = () => {
        setMostrarBemVindo(true);
    };

    const handleOcultarBemVindo = () => {
        setMostrarBemVindo(false);
    };

    return ( <
        Router >
        <
        div className = "app-container" > {
            mostrarBemVindo && < h1 className = "bem-vindo" > Bem - vindo à página inicial < /h1>} <
            nav className = "app-nav" >
            <
            Link to = "/produtos"
            onClick = { handleOcultarBemVindo } >
            Ver produtos <
            /Link> <
            Link to = "/contato"
            onClick = { handleOcultarBemVindo } >
            Entre em contato conosco <
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
            /Routes> <
            /div> <
            /Router>
        );
    }

    export default App;