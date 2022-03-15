const fs = require("fs");
const path = require('path')

class Contenedor{
    constructor(fileName){
        this.path=fileName;
    }
    
    async readFile(){
        try {
            //leo archivo actual y Lo convierto en Array:
            let productos = await fs.promises.readFile(this.path,'utf-8');
            productos = JSON.parse(productos);
            return productos;

        } catch (error) {
            console.error(error);
        }
    };

    async save(object){
        try {
            //Obtengo los productos desde el archivo:
            let productos = await this.readFile();

            //Busco el ultimo Id
            let lastId=0
            const countItems = productos.length

            if(countItems!==0){
                //ya existen productos:
                lastId = productos[countItems-1].id
            }

            //Agrego el producto al array:
            object['id'] = lastId + 1;
            productos.push(object);

            //Guardo el Array en el archivo:
            productos = JSON.stringify(productos);
            await fs.promises.writeFile(this.path , productos)
        
            return object['id'];

        } catch (error) {
            console.error(error);
        } 
    }

    async getById(id){
        try {
            //Obtengo los productos desde el archivo:
            let productos = await this.readFile();

            //Busco por Id en el array 
            let productFound = productos.find(item=> item.id===id)

            if(productFound===undefined){return null};

            return productFound;

        } catch (error) {
            console.error(error);
        }
    }

    async getAll(){
        try {
            //Obtengo los productos desde el archivo:
            let productos = await this.readFile();
            return productos;

        } catch (error) {
            console.error(error);
        }
    }

    async deleteById(id){
        try {
            //Obtengo los productos desde el archivo:
            let productos = await this.readFile();

            //Filtro el array eliminado el item con el id otorgado:
            let productsFiltered = productos.filter(item=> item.id!==id)

            //Guardo el Array en el archivo:
            productsFiltered = JSON.stringify(productsFiltered);
            await fs.promises.writeFile(this.path , productsFiltered);

        } catch (error) {
            console.error(error);
        }
    }

    async deleteAll(){
        try {
            //guardo en el archivo un string con un array vacío
            await fs.promises.writeFile(this.path , '[]');

        } catch (error) {
            console.error(error);
        }
    }
}

let filePath = path.parse(__dirname); //obtengo el directorio de trabajo
filePath = `${filePath.dir}\\${filePath.base}\\productos.txt`; //creo la ruta

const contenedor = new Contenedor (path.resolve(filePath));

//Prueba método Save:
const objectToAdd = 
{
    title: 'Lápiz',                                                                                                                          
    price: 88.21,                                                                                                                                     
    thumbnail: 'https://cdn1.iconfinder.com/data/icons/drawing-tools-5/512/pencil-256.png',
};

/* contenedor.save(objectToAdd)
.then((newId) => {
    console.log(`Producto agregado con el Id: ${newId}`);
}).catch((err) => {
    console.error(err);
}); */


//Prueba Método getById:
contenedor.getById(3)
.then((object) => {
    console.log(object);
}).catch((err) => {
    console.error(err);
});


//Prueba método getAll():
contenedor.getAll()
.then((obects) => {
    console.table(obects);
}).catch((err) => {
    console.error(err);
});



//Prueba Método deleteById()
/* contenedor.deleteById(2); */


//Prueba método deleteAll
/* contenedor.deleteAll(); */