const datos=(...info)=>{
    let [nombre, carrera,correo,edad,localidad] = info;
    document.write(`Nombre: ${nombre} <br> Carrera: ${carrera} <br> Correo: ${correo} <br>`);
    document.write(`Edad: ${edad}`)
}
const mi_info = ["Daniel","Sistemas","dan@gmail.com","21","Chalco"];
datos(...mi_info); //parametro Spread
datos("Daniel","Sistemas","dan@gmail.com","21","Chalco");
let cadena = "esta es una cadena";
document.write(cadena);
const info = ["Daniel","Sistemas","dan@gmail.com","21","Chalco"];
document.write(`<br> La cadena empieza con e: ${cadena.toLowerCase().startsWith('e')?'verdadero':'falso'}`);
document.write(`<br> La cadena termina con e?: ${cadena.toLowerCase().endsWith('a')}`);
document.write(`<br> La cadena inclue  'hola' : ${cadena.includes('hola')}`);
document.write(`<br> El arreglo incluye 'Sistemas' : ${info.includes('Sistemas')?'Si':'No'}`)
document.write(`<br> Dato por Posicion: ${info.find(info=> info.length > 8)}`);
document.write(`<br> Posicion: ${info.findIndex(info=> info =="21")}`);

export default {datos};
