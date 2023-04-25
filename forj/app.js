
const express = require('express');
const app = express();

const rotaLivro = require('./rotas/livros')

const port = 5000;

app.use('/livros', rotaLivro)
app.use(express.json());


app.listen(port, () => console.log(`Ouvindo na porta ${port}!`))
