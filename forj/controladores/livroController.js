

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

const app = express();
app.use(express.json); 

const { getTodosLivros} = require('../servicos/livro.js');
const { getLivroPorId } = require('../servicos/livro.js')
const { insereLivro } = require('../servicos/livro.js');

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
        const id = req.params.id;
        const livro = getLivroPorId(id)
        res.send(livro);
    } catch (error) {
        res.status(500).send(error)
    }
}

function postLivro(req, res){
    try {
      const livroNovo = req.body
      insereLivro(livroNovo)
      res.status(201) // 201, porque é um status de create 
      res.send("Livro inserido com sucesso!")
    } catch (error) {
       res.status(500)
       res.send(error.message) 
    }
}



module.exports = {
    getLivros,
    getLivro,
    postLivro
}

    