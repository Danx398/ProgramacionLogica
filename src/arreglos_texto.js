/* Parametros Rest, los 3 puntos son parametros infinitos */
const datos=(...info)=>{
    /* Desustructuración de los datos creandoles una key */
    let [nombre, carrera,correo,edad,localidad] = info;
    document.write(`Nombre: ${nombre} <br> Carrera: ${carrera} <br> Correo: ${correo} <br>`);
    document.write(`Edad: ${edad}`)
}
/* Creación del objeto */
const mi_info = ["Daniel","Sistemas","dan@gmail.com","21","Chalco"];
// datos(...mi_info); //parametro Spread
// datos("Daniel","Sistemas","dan@gmail.com","21","Chalco");

/* Trabajar cadenas de Texto */


let cadena = "esta es una cadena";
document.write(cadena);
const info = ["Daniel","Sistemas","dan@gmail.com","21","Chalco"];
/* Esta funcion startsWith toma la primera palabra, y busca dependiendo del codigo assci */
/* Al incluir un signo de pregunta, se podria interpretar como un if terneario, la sintaxis: {pregunta} ? {respuesta true}:{respuesta false} */
document.write(`<br> La cadena empieza con e: ${cadena.toLowerCase().startsWith('e')?'verdadero':'falso'}`);
/* Con la funcion endsWith funciona para hacer la busqueda del ultimo caracter de la cadena */
document.write(`<br> La cadena termina con e?: ${cadena.toLowerCase().endsWith('a')}`);
document.write(`<br> La cadena inclue  'hola' : ${cadena.includes('hola')}`);
/* Se puede hacer la busqueda de alguna palabra con la funcion includes, la cual */
document.write(`<br> El arreglo incluye 'Sistemas' : ${info.includes('Sistemas')?'Si':'No'}`)
/* La funcion find busca información especifica dentro del arreglo */
document.write(`<br> Dato por Posicion: ${info.find(info=> info.length > 8)}`);
/* Se hace la busqueda de la posicion y una comparacion dependiendo del objeto buscado */
document.write(`<br> Posicion: ${info.findIndex(info=> info =="21")}`);

