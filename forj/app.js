
const express = require('express');
const app = express();
const rotaLivro = require('./rotas/livros')

const port = 5000;

// O app, que é o express, vai usar a rotaLivro que criamos no arquivo e exportamos. app.use, é diferente, pois é como se ele estivesse lendo o método get, lá da outra aplicação.

// Aqui é uma espécie de redeclaração da URL. Então, eu coloco /livros, mas ele vai ir para a rotaLivro.
app.use('/livros', rotaLivro)

app.listen(port, () => console.log(`Ouvindo na porta ${port}!`))
