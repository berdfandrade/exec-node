

const {mudarDB} = require("./servicos.js")
const {lerOBancoDeDados} = require("./servicos.js")

function getDb (req, res) {
    
    try {
       res.status(200)
       res.send(lerOBancoDeDados())
    } catch (error) {
       res.send(error.message) 
    }
}



function postDb(req, res) {
        try {
                
        const state = req.body
        mudarDB(state)

        res.status(201)
        res.send("DB atualizado")


    } catch (error) {
        res.status(500)
        
    }
}

module.exports = {
    getDb,
    postDb
}