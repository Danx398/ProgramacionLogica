"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prueba2 = exports.prueba = void 0;

/* 
->Se haran exportaciones y importaciones las cuales tendran como objetivo poder utilizar distintos, metodos y clases 
->Estos con el proposito de utilizar 1 solo documento en la carpeta de controller el cual tendra como nombre general
-> bundle.js
*/

/* Se hace la instancia de clase */
var prueba = function prueba() {
  document.write("Modulo 1");
};

exports.prueba = prueba;

var prueba2 = function prueba2() {
  document.write("funcion 2");
};
/* Se hace la exportacion */


exports.prueba2 = prueba2;