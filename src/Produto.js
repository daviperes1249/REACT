import React from 'react';
import { Link } from 'react-router-dom';
import './Produto.css';

function Produto() {
    const produtosCafe = [
        { id: 1, nome: 'Café Tradicional', preco: 5.99, imagem: 'caminho/para/imagem1.jpg' },
        { id: 2, nome: 'Café Expresso', preco: 3.49, imagem: 'caminho/para/imagem2.jpg' },
        { id: 3, nome: 'Café Descafeinado', preco: 4.99, imagem: 'caminho/para/imagem3.jpg' },
        // Adicione mais produtos de café aqui, se desejar
    ];

    return ( <
        div className = "produto-container" >
        <
        h2 > Página de Produtos < /h2> <
        ul className = "produto-lista" > {
            produtosCafe.map((produto) => ( <
                li key = { produto.id }
                className = "produto-item" >
                <
                img src = { produto.imagem }
                alt = { produto.nome }
                /> <
                div >
                <
                h3 > { produto.nome } < /h3> <
                p > Preço: R$ { produto.preco } < /p> <
                /div> <
                /li>
            ))
        } <
        /ul>

        <
        Link to = "/" > Início < /Link> <
        /div>
    );
}

export default Produto;