const fs = require('fs')

class Contenedor {
    constructor(archivo){
        this.archivo = archivo
    }
    async getAll(){
        try{
            const data = await fs.promises.readFile(this.archivo, 'utf-8')
            return JSON.parse(data)
        }
        catch(error){
            console.log('Error de lectura:' , error);
        }
    }
    async save(producto){ 
        try{
            const data = await fs.promises.readFile(this.archivo, 'utf-8')
            const productos = JSON.parse(data)
            // se crea nuevo id, mayor al id anterior existente
            const anteriorId = productos [productos.length - 1].id
            const newId = {...producto, id: anteriorId + 1}
            productos.push(newId)
            await fs.promises.writeFile(this.archivo, JSON.stringify(productos, null, 2))
            console.log('Nuevo producto creado - id:' + newId.id );
        }
        catch(error){
            //si no existe producto anteriormente, crear un nuevo id y array de 0
            const newProducto = {...producto, id: 1 }
            await fs.promises.writeFile(this.archivo, JSON.stringify(newProducto, null, 2))
            console.log('Nuevo producto creado - id: '+ newProducto.id);
        }
    }
    async getById(id){
        try{
            const productos = await this.getAll()
            const producto = productos.find((producto) => producto.id === id) 
                if(!producto){
                    console.log('null');
                }
                else{
                    console.log('Producto:', id, producto);
                }
        }
        catch(error){
            console.log('No existe un producto con ese id' , error)
        }
    }
    async deleteById(id){
        try{
            const productos = await this.getAll()
            // consultar por el id de producto
            const producto = productos.find((producto) => producto.id === id)
                if(!producto){
                    throw new Error ('No se encuentra el producto con este id ')
                }
            // realizo un filtrado por id, y me quedo con el producto a eliminar
            const newProducto = productos.filter((producto) => producto.id !== id)
            await fs.promises.writeFile(this.archivo, JSON.stringify(newProducto, null,2))
        }
        catch(error){
            console.log('Error al eliminar el archivo:', error)
        }
    }
    async deleteAll(){
        try{
            await fs.promises.writeFile(this.archivo, JSON.stringify([], null, 2))
        }
        catch(error){
            console.log('Error al eliminar los archivos:' + error);
        }
    }
}

const main = async () => {
    const contenedor = new Contenedor ('productos.txt')
    await contenedor.save({
        titulo: 'Maquina BarberStyle "The Simpsons"',
        precio: 1800,
        img: 'https://scontent.fepa5-1.fna.fbcdn.net/v/t1.6435-9/82168983_849056105563189_1460438564545232896_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aKluz2DrJBMAX8662Hh&_nc_ht=scontent.fepa5-1.fna&oh=00_AfAkHtLoABiTChhvb9g2Bbd1EQhKS8CCCEZAXwZNE5iXPA&oe=638CD034'
    }) 
    await contenedor.save({ 
        titulo: 'Maquina BarberStyle "Jordan',
        precio: 1600,
        img: 'https://scontent.fepa5-1.fna.fbcdn.net/v/t1.6435-9/82018988_849021902233276_1468573125229674496_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QhE0e_ypUCIAX8KpAPb&_nc_ht=scontent.fepa5-1.fna&oh=00_AfCnZw1_yem5ofUe1cpSkws2n5_81BgExzdpqtizF4CZsQ&oe=638CAA39'
    }) 
    await contenedor.save({
        titulo: 'Maquina BarberStyle "Alien',
        precio: 1700,
        img: 'https://scontent.fepa5-1.fna.fbcdn.net/v/t1.6435-9/82360279_849055342229932_7079897328508731392_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZzHN_e1Ah74AX8yLTWd&_nc_ht=scontent.fepa5-1.fna&oh=00_AfDRJ7-Qgo0AJy4c1B5rASGTollP3Sh788qkO6T8LuDCmA&oe=638CB252'
    })
    await contenedor.getById(1)
    const productos = await contenedor.getAll()
    console.log('Productos: ', productos);
    // await contenedor.deleteById(2)
    // await contenedor.deleteAll()
    // console.log(productos);
}

main()
