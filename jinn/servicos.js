

const fs = require('fs');
const db = JSON.parse(fs.readFileSync('./bob.json'))



function lerOBancoDeDados () {
    return db; 
}   


function mudarDB (obj) {
    const writeObj = JSON.stringify(db);
    const newObj = fs.writeFileSync([...writeObj], obj)
    return newObj;  
}   



module.exports = {
    lerOBancoDeDados,
    mudarDB
}