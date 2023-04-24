
const fs = require("fs")	

function getTodosLivros () {
 	return JSON.parse(fs.readFileSync("livros.json"))
	
}


function getLivroPorId(id) {
	const livros = JSON.parse(fs.readFileSync("livros.json"))	
	const livroFiltrado = livros.filter(livro => (livro.id === id ))[0] 

	// Sobre o [0]:

	/* Como vamos receber apenas um livro através desse filter, podemos
	dizer com segurança que ele vai estar na posição 0 desse "array" */

	return livroFiltrado; 
}


module.exports = {
	getTodosLivros, getLivroPorId
} 