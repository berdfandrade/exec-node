

/* Lembrando que é através dos controllers que 
conseguimos definir o que vai ser mandando quando 
mandamos a requisição para a API.

=====================================================
 __       _                  _      ___ _____ _  
╦  ┬┬  ┬┬─┐┌─┐  ╔═╗┌─┐┌┐┌┬┐┬─┐┌─┐┬  ┬  ┌─┐┬─┐
║  │└┐┌┘├┬┘│ │  ║  │ │││││ ├┬┘│ ││  │  ├┤ ├┬┘
╩═╝┴ └┘ ┴└─└─┘  ╚═╝└─┘┘└┘┴ ┴└─└─┘┴─┘┴─┘└─┘┴└─

=====================================================


Seria interessante que transformássemos 
todas as funções que vão controlar o fluxo de 
entrada e saída de dados em const's, para manter a
organização no APP principal da aplicação. Como se
o APP fosse uma sala que jogasse o direcionamento de 
dados para outras salas (partes da aplicação)
*/

const express = require('express');
const { getTodosLivros, getLivroPorId } = require('../servicos/livro');


function getLivros (req, res) {
        try {
        // Essa pode ser uma forma de adquirir o STATE como na outra aplicação.     
        const livros = getTodosLivros()  
            res.send(livros )
        } catch (error) {
            res.status(500).send(error)
                
        }
}

function getLivro (req, res) {
    try {
        // Esse .id, é o parâmetro que colocamos lá na URL das rotas! Daí colocamos esse ID em uma const 
        const id = req.params.id 
        const livro = getLivroPorId(id)
        res.send(livro);  
    } catch (error) {
        res.status(500).send(error)
    }

}


/* Aqui estamos exportando como um objeto, 
 as várias funções que vão controlar o fluxo de entrada e 
 saída do servidor de acordo com a API que estamos construindo. */ 

module.exports = {
    getLivros,
    getLivro
}

// Aqui novamente exportamos para a organização do código.
    