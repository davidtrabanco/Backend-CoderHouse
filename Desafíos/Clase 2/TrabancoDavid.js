class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros=[];
        this.mascotas = [];
    }

    getFullName = () => {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota = (valor) => {
        this.mascotas.push(valor);
    }

    countMascotas = ()=> {
        return this.mascotas.length;
    }

    addBook = (titulo, autor) =>{
        this.libros.push({ nombre: titulo, autor: autor})
    }

    getBookNames = () =>{
        return this.libros.map(libro => libro.nombre)
    }

}

const usuario = new Usuario('David', 'Trabanco');

usuario.addMascota('perro');
usuario.addMascota('loro')
usuario.addMascota('tortuga')

usuario.addBook('Caballero Armadura Oxidada','Robert Fisher');
usuario.addBook('Siete fuegos','Francis Mallmann');
usuario.addBook('Orgullo y prejuicio','Jane Austen');

console.log( usuario.countMascotas() );
console.log( usuario.getBookNames() );
console.log( usuario.getFullName() );
