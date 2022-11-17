"use strict";

/* Aqui se crea una promesa, los parametros van  a ser las promesas que se ejecuan dentro*/

/* Funciones resolve && reject Sirve para verificar todos los datos */
var validacion = true;
var promesa = new Promise(function (resolve, reject) {
  if (validacion) {
    resolve();
  } else {
    reject();
  }
})
/* No ocupa parametros de invocación por que es un objeto */

/* Es la respuesta positiva */
.then(function () {
  document.write("Promesas Javascript <br>");
})["catch"](function () {
  document.write("Se ha generado un error");
});
/* Añadir 3 promesas diferentes */

var promesa1 = new Promise(function (resolve, reject) {
  1 < 2 ? resolve() : reject();
}).then(function () {
  document.write("verdadero <br>");
})["catch"](function () {
  document.write("falso <br>");
});
var edad = 18;
var promesa2 = new Promise(function (resolve, reject) {
  edad > 15 ? resolve() : reject();
}).then(function () {
  document.write("Eres mayor de edad <br>");
})["catch"](function () {
  document.write("Eres menor de edad <br>");
});
var nombre = "Daniela";
var promesa3 = new Promise(function (resolve, reject) {
  "Daniel" == nombre ? resolve() : reject();
}).then(function () {
  document.write("Eres Daniel");
})["catch"](function () {
  document.write("No eres Daniel");
});