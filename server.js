const express = require('express'); 
const bodyParser = require('body-parser'); 
const rutas = require('./routes/rutas');
const cors = require('cors');

var app = express(); 
//const database = require("./database/database.js");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



app.use('/', rutas);

app.listen(process.env.PORT || 5000, () => { console.log('Servidor Web Iniciado'); });

module.exports = app;