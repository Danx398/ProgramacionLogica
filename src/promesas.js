/* Aqui se crea una promesa, los parametros van  a ser las promesas que se ejecuan dentro*/
/* Funciones resolve && reject Sirve para verificar todos los datos */
let validacion = true;
export const promesa = new Promise((resolve, reject)=>{
    if (validacion) {
        resolve();
    } else {
        reject();
    }
})
/* No ocupa parametros de invocación por que es un objeto */
/* Es la respuesta positiva */
.then(()=>{
    document.write(`Promesas Javascript <br>`);
}).catch(()=>{
    document.write(`Se ha generado un error`);
});

/* Añadir 3 promesas diferentes */

export  const promesa1 = new Promise((resolve,reject)=>{
    (1<2)? resolve():reject();
}).then(()=>{
    document.write(`verdadero <br>`)
}).catch(()=>{
    document.write(`falso <br>`)
});
let edad = 18;
export const promesa2 = new Promise((resolve, reject)=>{
    (edad > 15)?resolve():reject();
}).then(()=>{
    document.write(`Eres mayor de edad <br>`)
}).catch(()=>{
    document.write(`Eres menor de edad <br>`)
});

let nombre = "Daniela";
const promesa3 = new Promise((resolve, reject)=>{
    ("Daniel"== nombre)?resolve():reject();
}).then(()=>{
    document.write(`Eres Daniel`);
}).catch(()=>{
    document.write(`No eres Daniel`);
});