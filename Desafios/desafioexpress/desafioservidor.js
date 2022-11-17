const http = require ('http')

const nombre = 'Deroni'

const server = http.createServer((request, response) => {

    const mensaje = time()
    response.end(mensaje)
})

function time () {

    const realtime = new Date().getHours()

    if(realtime >= 6 && realtime < 13){
        return ('Hola ' + nombre + ', Buenos Dias');
    }
    else if(realtime >= 13 && realtime <= 19){
        return ('Hola ' + nombre + ', Buenas Tardes');
    }
    else{
        return ('Hola ' + nombre + ', Buenas Noches');
    }
}

const PORT = 8080

const connection = server.listen(PORT, () => {
    console.log('escuchando puerto servidor ' + PORT);
})