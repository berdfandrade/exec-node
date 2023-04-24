

const fs = require('fs');

function lerOBancoDeDados () {
    const db = JSON.parse(fs.readFileSync('bob.json'))
    return db
}




module.exports = {
    lerOBancoDeDados
}