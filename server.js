const express = require('express'); 

const bodyParser = require('body-parser'); 
const rutas = require('./routes/consulta');

var app = express(); 
//const database = require("./database/database.js");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/', rutas);

app.listen(process.env.PORT || 3000, () => { console.log('Servidor Web Iniciado'); });

module.exports = app;