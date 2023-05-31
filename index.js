const express = require("express");
require('dotenv').config();
const cors = require('cors');
const { databaseConn } = require('./database/config')

//Crear Express App 
const app = express();
app.use(cors());

//Database
databaseConn()

//Para que escuche el body
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

//Rutas
app.use('/',require('./routes/auth'))

//Escuchar en puerto 4000
app.listen(process.env.PORT, () => {
    Puerto = process.env.PORT || 4000
    console.log(`Servidor corriendo en puerto: ${Puerto}`)
})
