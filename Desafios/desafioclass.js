
class Usuario {
    constructor (nombre, apellido, mascotas, libros){
        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = mascotas
        this.libros = libros
    }
    getFullName(){
        return (`Hola ${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombreLibro, autorLibro){
        this.libros.push ({nombreLibro, autorLibro}) 
    }
    getBookName(){
        let libros = []
        this.libros.forEach(item => libros.push(item.nombreLibro));
        return libros;
    }
}

let usuario1 = new Usuario ("deroni", "elgueta", ["Tadeo"], [{nombreLibro:"Los Juegos del hambre", autorLibro:"Suzanne Collins"}])
console.log(usuario1);

console.log(usuario1.getFullName());

usuario1.addMascota("Gianluca")
usuario1.addMascota("Roma")

console.log(usuario1.countMascotas());

usuario1.addBook("Harry Potter","JK Rowling")
usuario1.addBook("Codigo Da Vinci","Dan Brown")
console.log(usuario1.getBookName());