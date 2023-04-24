




const express = require('express');
const { getDb } = require('./controller');
const { postDb } = require('./controller');

const app = express()



app.get('/getState', getDb)
app.post('postState', postDb) 


const PORT = 5000; 

app.listen(PORT, (req, res) => {
    console.log(`Escutando na porta ${PORT}`)
})