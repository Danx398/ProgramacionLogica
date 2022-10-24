"use strict";

var datos = function datos() {
  for (var _len = arguments.length, info = new Array(_len), _key = 0; _key < _len; _key++) {
    info[_key] = arguments[_key];
  }

  var nombre = info[0],
      carrera = info[1],
      correo = info[2],
      edad = info[3],
      localidad = info[4];
  document.write("Nombre: ".concat(nombre, " <br> Carrera: ").concat(carrera, " <br> Correo: ").concat(correo, " <br>"));
  document.write("Edad: ".concat(edad));
};

var mi_info = ["Daniel", "Sistemas", "dan@gmail.com", "21", "Chalco"];
datos.apply(void 0, mi_info); //parametro Spread

datos("Daniel", "Sistemas", "dan@gmail.com", "21", "Chalco");
var cadena = "esta es una cadena";
document.write(cadena);
var info = ["Daniel", "Sistemas", "dan@gmail.com", "21", "Chalco"];
document.write("<br> La cadena empieza con e: ".concat(cadena.toLowerCase().startsWith('e') ? 'verdadero' : 'falso'));
document.write("<br> La cadena termina con e?: ".concat(cadena.toLowerCase().endsWith('a')));
document.write("<br> La cadena inclue  'hola' : ".concat(cadena.includes('hola')));
document.write("<br> El arreglo incluye 'Sistemas' : ".concat(info.includes('Sistemas') ? 'Si' : 'No'));
document.write("<br> Dato por Posicion: ".concat(info.find(function (info) {
  return info.length > 8;
})));
document.write("<br> Posicion: ".concat(info.findIndex(function (info) {
  return info == "21";
})));