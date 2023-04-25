
const fs = require("fs") 



function getTodosLivros () {
 	return JSON.parse(fs.readFileSync("livros.json"))
}


function getLivroPorId(id) {
	const livros = JSON.parse(fs.readFileSync("livros.json"))	
	const livroFiltrado = livros.filter(livro => (livro.id === id ))[0] 
	return livroFiltrado; 
}

function insereLivro(livro) {
	const livros = JSON.parse(fs.readFileSync("livros.json"))
	const novaListaDeLivros = [...livros, livro]
	fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros)) 
}


module.exports = {
	getTodosLivros, getLivroPorId, insereLivro
} 