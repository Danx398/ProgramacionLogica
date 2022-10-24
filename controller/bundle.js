/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ \"./src/modulo1.js\");\n/* harmony import */ var _arreglos_texto_limpio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arreglos_texto_limpio */ \"./src/arreglos_texto_limpio.js\");\n/* Comentarios hacerca de las importaciones y exportaciones:\n    -> Al realizar una exportacion se debe hacer dentro de una clase, promesa, o metodo el cual se vera afectado\n\n    -> por ejemplo: en una clase{\n    class Mundo{\n        constructor(arreglo){\n            arreglo.map((auxiliar)=>{\n                let{nombre, apellidos} = auxiliar;\n                let{primerApellido,segundoApellido} = apellidos;\n                let{persona, defecto}=segundoApellido;\n                this.mostrarDatos(nombre,primerApellido, persona, defecto);\n            });\n        }\n        }\n    }\n    -> Al inicio de la palabra reservada class, se debe poner \"export\" o en caso de que sea solo una clase, poner \"export default\"\n    -> y el resultado seria :{\n        export class Mundo{\n            (en donde todas las propiedades y metodos tambien seran exportados)\n        }\n    }\n\n    -> Para hacer las importaciones:{\n        se debe hacer dentro del archivo app.js en el que la sintaxis sera la siguiente:\n        -> import {(clase, metodo, promesa)} from \"./path del archivo\"\n    }\n\n*/\n// import { promesa1,promesa2 } from \"./promesas\";\n// import Son from \"./terneario_tarea_limpia\";\n// const terneario = new Son(undefined);\n// document.write(terneario.validacion())\n// promesa;\n\n\ndatos1();\n(0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.prueba)();\n(0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.prueba2)();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/arreglos_texto_limpio.js":
/*!**************************************!*\
  !*** ./src/arreglos_texto_limpio.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar datos = function datos() {\n  for (var _len = arguments.length, info = new Array(_len), _key = 0; _key < _len; _key++) {\n    info[_key] = arguments[_key];\n  }\n\n  var nombre = info[0],\n      carrera = info[1],\n      correo = info[2],\n      edad = info[3],\n      localidad = info[4];\n  document.write(\"Nombre: \".concat(nombre, \" <br> Carrera: \").concat(carrera, \" <br> Correo: \").concat(correo, \" <br>\"));\n  document.write(\"Edad: \".concat(edad));\n};\n\nvar mi_info = [\"Daniel\", \"Sistemas\", \"dan@gmail.com\", \"21\", \"Chalco\"];\ndatos.apply(void 0, mi_info); //parametro Spread\n\ndatos(\"Daniel\", \"Sistemas\", \"dan@gmail.com\", \"21\", \"Chalco\");\nvar cadena = \"esta es una cadena\";\ndocument.write(cadena);\nvar info = [\"Daniel\", \"Sistemas\", \"dan@gmail.com\", \"21\", \"Chalco\"];\ndocument.write(\"<br> La cadena empieza con e: \".concat(cadena.toLowerCase().startsWith('e') ? 'verdadero' : 'falso'));\ndocument.write(\"<br> La cadena termina con e?: \".concat(cadena.toLowerCase().endsWith('a')));\ndocument.write(\"<br> La cadena inclue  'hola' : \".concat(cadena.includes('hola')));\ndocument.write(\"<br> El arreglo incluye 'Sistemas' : \".concat(info.includes('Sistemas') ? 'Si' : 'No'));\ndocument.write(\"<br> Dato por Posicion: \".concat(info.find(function (info) {\n  return info.length > 8;\n})));\ndocument.write(\"<br> Posicion: \".concat(info.findIndex(function (info) {\n  return info == \"21\";\n})));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  datos: datos\n});\n\n//# sourceURL=webpack:///./src/arreglos_texto_limpio.js?");

/***/ }),

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prueba\": () => (/* binding */ prueba),\n/* harmony export */   \"prueba2\": () => (/* binding */ prueba2)\n/* harmony export */ });\nvar prueba = function prueba() {\n  document.write(\"Modulo 1\");\n};\n\nvar prueba2 = function prueba2() {\n  document.write(\"funcion 2\");\n};\n\n\n\n//# sourceURL=webpack:///./src/modulo1.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;