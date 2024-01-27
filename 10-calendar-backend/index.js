const express = require('express');
require('dotenv').config()
const cors = require('cors')
const {dbConnection} = require('./databaase/config')

// Crear el servidos de express
const app = express();

// Base de datos
dbConnection()

// CORS
app.use(cors())

// Directorio Público
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: Eventos



// Escuchar peticiones
app.listen(process.env.PORT,() => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`)
    
})