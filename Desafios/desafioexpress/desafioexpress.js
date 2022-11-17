const express = require ('express')

const app = express()

//peticion en express
app.get('/productos', (req, res) => {
    res.send('Hola Deroni Alexis')
})

app.get('/productoRandom', (req, res) => {
    res.send('Este es el inicio')
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('puerto servidor ' + PORT);
})

// evento
server.on('error', error => console.log('hubo un error' + error))