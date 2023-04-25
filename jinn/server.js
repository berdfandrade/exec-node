




const express = require('express');
const { getDb } = require('./controller');
const { postDb } = require('./controller');

const app = express();
app.use(express.json())



app.get('/getState', getDb)
app.post('/postState', postDb) 


const PORT = 3000; 

app.listen(PORT, (req, res) => {
    console.log(`Escutando na porta ${PORT}`)
})