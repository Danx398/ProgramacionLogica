"use strict";

/* Parametros Rest, los 3 puntos son parametros infinitos */
var datos = function datos() {
  for (var _len = arguments.length, info = new Array(_len), _key = 0; _key < _len; _key++) {
    info[_key] = arguments[_key];
  }

  /* Desustructuración de los datos creandoles una key */
  var nombre = info[0],
      carrera = info[1],
      correo = info[2],
      edad = info[3],
      localidad = info[4];
  document.write("Nombre: ".concat(nombre, " <br> Carrera: ").concat(carrera, " <br> Correo: ").concat(correo, " <br>"));
  document.write("Edad: ".concat(edad));
};
/* Creación del objeto */


var mi_info = ["Daniel", "Sistemas", "dan@gmail.com", "21", "Chalco"]; // datos(...mi_info); //parametro Spread
// datos("Daniel","Sistemas","dan@gmail.com","21","Chalco");

/* Trabajar cadenas de Texto */

var cadena = "esta es una cadena";
document.write(cadena);
var info = ["Daniel", "Sistemas", "dan@gmail.com", "21", "Chalco"];
/* Esta funcion startsWith toma la primera palabra, y busca dependiendo del codigo assci */

/* Al incluir un signo de pregunta, se podria interpretar como un if terneario, la sintaxis: {pregunta} ? {respuesta true}:{respuesta false} */

document.write("<br> La cadena empieza con e: ".concat(cadena.toLowerCase().startsWith('e') ? 'verdadero' : 'falso'));
/* Con la funcion endsWith funciona para hacer la busqueda del ultimo caracter de la cadena */

document.write("<br> La cadena termina con e?: ".concat(cadena.toLowerCase().endsWith('a')));
document.write("<br> La cadena inclue  'hola' : ".concat(cadena.includes('hola')));
/* Se puede hacer la busqueda de alguna palabra con la funcion includes, la cual */

document.write("<br> El arreglo incluye 'Sistemas' : ".concat(info.includes('Sistemas') ? 'Si' : 'No'));
/* La funcion find busca información especifica dentro del arreglo */

document.write("<br> Dato por Posicion: ".concat(info.find(function (info) {
  return info.length > 8;
})));
/* Se hace la busqueda de la posicion y una comparacion dependiendo del objeto buscado */

document.write("<br> Posicion: ".concat(info.findIndex(function (info) {
  return info == "21";
})));