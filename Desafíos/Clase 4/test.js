/* var contador=0;
const sumar = (num) =>{
    return new Promise((resolve, reject) => {
        let time = 1000*contador;
        contador++;

        if(typeof(num)==="number"){
             setTimeout(() => {
                console.log(contador);
                resolve({num,'termine':contador,time});
            }, time)
        }else{
            reject(num+' no es numero');
        }
    });

} 

/* sumar(5)
.then((result) => {
    console.log(result)
    return sumar(result)
})
.then((result) => {
    console.log(result)
    return sumar(result)
})
.then((result) => {
    console.log(result)
    return sumar(result)
})
.then((result) => {
    console.log(result)
    return sumar(result)
}) */

/* async function calcular() { 
    let result1=sumar(5)
    let result2=sumar(6)
    let result3=sumar(7)
    let result4=sumar(8)
try {
    console.log(await result1);
    console.log(await result2);
    console.log(await result3);
    console.log(await result4);
} 
catch (error) {
    console.log(error);
}
    
 }

 calcular() */

/* Promise.resolve(99)
.then(x => x+1)
.then(x => x+1)
.then(x => x+1)
.then(x => x+1)
.then(console.log) */


const { table } = require('console');
const fs = require('fs');


const leer = () => {
    return new Promise((resolve, reject) => {
        fs.promises.readFile("./Desafíos/Clase 4/package.json","utf-8")
        .then((result) => {
            const contenido=JSON.parse(result);
            resolve(contenido);
        }).catch((err) => {
            reject(err);
        });
    });
    
}



const leer1 = async () =>{
    try {
        const contenido = await fs.promises.readFile("./Desafíos/Clase 4/package.json","utf-8")
        return JSON.parse(contenido);
    } catch (error) {
        
    }
}

const mostrar = async ()=>{
    let contenido = await leer();
    console.table(contenido);
}

mostrar();