

const fs = require('fs');
const db = JSON.parse(fs.readFileSync('./bob.json'))



function lerOBancoDeDados () {
    return db; 
}   


function mudarDB (state) {
    const writeObj = db
    const newObj = [...writeObj, state]
    fs.writeFileSync('livros.json', JSON.stringify(newObj)) 
}   



module.exports = {
    lerOBancoDeDados,
    mudarDB
}