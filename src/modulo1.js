/* 
->Se haran exportaciones y importaciones las cuales tendran como objetivo poder utilizar distintos, metodos y clases 
->Estos con el proposito de utilizar 1 solo documento en la carpeta de controller el cual tendra como nombre general
-> bundle.js
*/

/* Se hace la instancia de clase */
const prueba = ()=>{
    document.write("Modulo 1");
}
const prueba2 = ()=>{
    document.write("funcion 2");
}
/* Se hace la exportacion */
export {prueba,prueba2};