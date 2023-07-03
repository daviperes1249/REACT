import React from 'react';
import { Link } from 'react-router-dom';
import './Produto.css';

function Produto({ mostrarBemVindo, handleMostrarBemVindo }) {
    const produtosCafe = [
        { id: 1, nome: 'Café Tradicional', preco: 5.99 },
        { id: 2, nome: 'Café Expresso', preco: 3.49 },
        { id: 3, nome: 'Café Descafeinado', preco: 4.99 },
        // Adicione mais produtos de café aqui, se desejar
    ];

    const handleVoltarInicio = () => {
        handleMostrarBemVindo();
    };

    return ( <
        div className = "produto-container" >
        <
        h2 > Página de Produtos < /h2> <
        ul className = "produto-lista" > {
            produtosCafe.map((produto) => ( <
                li key = { produto.id }
                className = "produto-item" >
                <
                h3 > { produto.nome } < /h3> <
                p > Preço: R$ { produto.preco } < /p> <
                /li>
            ))
        } <
        /ul>

        {
            mostrarBemVindo && ( <
                Link to = "/"
                onClick = { handleMostrarBemVindo } >
                Início <
                /Link>
            )
        }

        <
        Link to = "/"
        onClick = { handleVoltarInicio } >
        Início <
        /Link> <
        /div>
    );
}

export default Produto;