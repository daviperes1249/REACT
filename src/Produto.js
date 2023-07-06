import React from 'react';
import './Produto.css';

function Produto() {
    const produtosCafe = [
        { id: 1, nome: 'Café Tradicional', preco: 5.99, imagem: 'imagens/cafe tradicional.jpg' },
        { id: 2, nome: 'Café Expresso', preco: 3.49, imagem: 'imagens/cafe expresso.jpg' },
        { id: 3, nome: 'Café Descafeinado', preco: 4.99, imagem: 'imagens/cafe descafeinado.jpg' },
        { id: 4, nome: 'Cappuccino', preco: 5.99, imagem: 'imagens/cappucino.jpeg' },
        { id: 5, nome: 'Café Mocha', preco: 4.49, imagem: 'imagens/cafe mocha.jpg' },
        { id: 6, nome: 'Café Duplo', preco: 5.89, imagem: 'imagens/cafe duplo.png' },
        { id: 7, nome: 'Café 3 Corações', preco: 2.99, imagem: 'imagens/cafe 3 corações.jpg' },
        { id: 8, nome: 'Irish Coffee', preco: 7.49, imagem: 'imagens/irish coffe.jpg' },
        { id: 9, nome: 'Café Macchiato', preco: 8.49, imagem: 'imagens/cafe macchiato.jpeg ' }
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
        /ul> <
        /div>
    );
}

export default Produto;