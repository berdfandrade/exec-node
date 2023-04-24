


// Serve para criar as rotas, importando o route

const {Router} = require('express') 
const {getLivros, getLivro, postLivro} = require('../controladores/livroController.js')


const router = Router()

// Método get
router.get('/:id', getLivro)
router.get('/', getLivros) // Bem mais simples... 


/* // Quando colocamos esses " : " na URL quer dizer que 
estamos indicando algo que é variável. 
Cada vez que alguém chamar, vamos passar uma valor diferente.  */
 

// Método post
router.post("/", postLivro)

router.put("/", (req, res) => {
    res.send("Você fez uma req do tipo PUT")
})

router.patch("/", (req, res) => {
    res.send("Você fez uma req do tipo PATCH")
    
})

router.delete("/", (req, res) => {
    res.send("Você fez uma req do tipo DELETE")
    
})


module.exports = router;


/*

A questão dos métodos é para organização, não necessariamente eles vão 
conseguir fazer essa execução exata no servidor. Quem deve fazer o controle do que 
deve ser feito e como deve ser feito  quem está programando a API. Isso era uma das 
confusões que eu estava tendo antes.

*/