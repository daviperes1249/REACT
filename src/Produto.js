import React from 'react';
import './Produto.css';

function Produto() {
    // Array de objetos representando produtos de café
    const produtosCafe = [
        { id: 1, nome: 'Café Tradicional', preco: 5.99, imagem: 'imagens/cafe tradicional.jpg' },
        { id: 2, nome: 'Café Expresso', preco: 3.49, imagem: 'imagens/cafe expresso.jpg' },
        { id: 3, nome: 'Café Descafeinado', preco: 4.99, imagem: 'imagens/cafe descafeinado.jpg' },
        { id: 4, nome: 'Cappuccino', preco: 5.99, imagem: 'imagens/cappucino.jpeg' },
        { id: 5, nome: 'Café Mocha', preco: 4.49, imagem: 'imagens/cafe mocha.jpg' },
        { id: 6, nome: 'Café Duplo', preco: 5.89, imagem: 'imagens/cafe duplo.png' },
        { id: 7, nome: 'Café 3 Corações', preco: 2.99, imagem: 'imagens/cafe 3 corações.jpg' },
        { id: 8, nome: 'Irish Coffee', preco: 7.49, imagem: 'imagens/irish coffe.jpg' },
    ];

    return ( <
        div className = "produto-container" >
        <
        h2 className = 'titulo' > Produtos < /h2> <
        ul className = "produto-lista" > { /* Mapeia o array de produtos e renderiza um item para cada produto */ } {
            produtosCafe.map((produto) => ( <
                li key = { produto.id }
                className = "produto-item" >
                <
                img src = { produto.imagem }
                alt = { produto.nome }
                /> <
                div >
                <
                h3 > { produto.nome } < /h3> { produto.preco ? < p > Preço : R$ { produto.preco } < /p>:<p></p > } <
                /div> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default Produto;