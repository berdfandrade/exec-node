


// Serve para criar as rotas, importando o route


const {Router} = require('express') 
const {getLivros, getLivro, postLivro} = require('../controladores/livroController.js')


const router = Router()


router.get('/:id', getLivro)
router.get('/', getLivros) 
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
