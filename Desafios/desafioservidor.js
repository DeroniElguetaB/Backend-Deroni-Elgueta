const http = require ('http')

const server = http.createServer((mensaje, respuesta) => {
    respuesta.end('Hola')
})

const connection = server.listen(8080, () => {
    console.log('puerto servidor');
})