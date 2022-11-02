const fs = require('fs')

class Contenedor {
    constructor(ruta){
        this.ruta = ruta
    }
    async save(producto){
        let data = null 

            try{
                data = await fs.promises.readFile('./Productos.txt', 'utf-8')
            }
            catch(error){
                throw new Error(`Hay un error: `+ error)
            }

        let id = 0
        let dataObj = null

            if(data.length == 0){
                let id = 1
            }
            else{
                dataObj = JSON.parse(data)
                id = dataObj [dataObj.length - 1].id + 1
            }

            try{
                const newObjt = {id: id, ...producto}
                fs.writeFile('./Productos.txt', JSON.stringify(newObjt, null, 2))
            }
            catch(error){
                throw new Error(`Hay un error: `+ error)
            }
    }
    }
    getById(){

    }
    getAll(){

    }
    deleteById(){

    }
    deleteAll(){

    }