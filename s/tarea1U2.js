"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Realizar un programa que obtenga los datos de un arreglo de informacion personal */

/* nombre, apellidos, fecha nacimiento, edad, escuela, carrera, direccion  */

/* Crear arreglo vacio, se ocupa parametros res para llenarlo
realizar un programa que obtenga los datos de un arreglo de informacion personal. (aplicar clases y herencia)
aplicar el uso de las funciones:
-startsWith
-endsWith
-includes
-find
-findIndex
crear el arreglo vacio y llenarlo mendiante el uso ara metro Rest.
contenido del arreglo:
    nombre
    apellidoP
    apellidoM
    Fecha de nacimiento
    edad
    escuela
    carrera
    direccion */

/* Creación del arreglo */

/* Creación de arreglo vacio */
var arreglo = [];
/* Creación de clase principal */

var Mundo = /*#__PURE__*/_createClass(
/* De las clases de crea el constructor principal el cual funciona como main mandando los datos con el 
Parametro Res */
function Mundo() {
  _classCallCheck(this, Mundo);

  for (var _len = arguments.length, arre = new Array(_len), _key = 0; _key < _len; _key++) {
    arre[_key] = arguments[_key];
  }

  /* Se realiza la desestructuración del arreglo */
  var nombre = arre[0],
      apellidoP = arre[1],
      apellidoM = arre[2],
      fecha_nac = arre[3],
      edad = arre[4],
      escuela = arre[5],
      carrera = arre[6],
      direccion = arre[7];
  /* Llamado de Metodos de la clase hijo */

  this.impresionPantalla(nombre, apellidoP, apellidoM, fecha_nac, edad, escuela, carrera, direccion);
  this.arreglos_funciones(arre);
});
/* Creación de la segunda clase, la cual actuara como hijo */


var Hola = /*#__PURE__*/function (_Mundo) {
  _inherits(Hola, _Mundo);

  var _super = _createSuper(Hola);

  function Hola() {
    _classCallCheck(this, Hola);

    return _super.apply(this, arguments);
  }

  _createClass(Hola, [{
    key: "impresionPantalla",
    value:
    /* Metodo de impresion en pantalla */
    function impresionPantalla(nombre, apellidoP, apellidoM, fecha_nac, edad, escuela, carrera, direccion) {
      /* Funcion de escribir sobre el documento */
      document.write("<h1>Datos</h1>\n                        <br> Nombre: ".concat(nombre, " \n                        <br> ApellidoPaterno: ").concat(apellidoP, "\n                        <br> Apellido Materno: ").concat(apellidoM, "\n                        <br> Fecha de Nacimiento: ").concat(fecha_nac, "\n                        <br> Edad: ").concat(edad, "\n                        <br> Escuela: ").concat(escuela, "\n                        <br> Carrera: ").concat(carrera, "\n                        <br> Direcci\xF3n: ").concat(direccion, "\n                        <br><br>\n                        <h3>Usando Funciones</h3>\n                        <br> <b>Funcion: startsWith()</b> &nbspEl Nombre inicia con \"D\": ").concat(nombre.startsWith('D') ? 'Si'.fontcolor('green') : 'No'.fontcolor('red'), "\n                        <br> <b>Funcion: endsWith() &nbsp </b> El Apellido Paterno termina con \"K\": ").concat(apellidoP.endsWith('K') ? 'Si'.fontcolor('green') : 'No'.fontcolor('red'), "\n                        "));
    }
    /* Metodo de funciones con arreglos */

  }, {
    key: "arreglos_funciones",
    value: function arreglos_funciones(arreglo) {
      document.write("<br> <b>Funcion: includes() </b> &nbsp El arreglo incluye \"Daniel\": ".concat(arreglo.includes('Daniela') ? 'Si'.fontcolor('green') : 'No'.fontcolor('red'), "\n                        <br> <b>Funci\xF3n: find() </b> &nbsp Datos por posici\xF3n y longitud de la cadena: ").concat(arreglo.find(function (arreglo) {
        return arreglo.length < 8;
      }), "\n                        <br> <b>Funci\xF3n: findIndex() </b> &nbsp Datos por comparaci\xF3n y posicion: ").concat(arreglo.findIndex(function (arreglo) {
        return arreglo == "Blancas";
      }), "\n                        "));
    }
  }]);

  return Hola;
}(Mundo);
/* sobreescritura de arreglo vacio */


arreglo = ["Daniel", "Blancas", "Aguilar", "22/02/2001", "21", "ITMA2", "Sistemas", "Prol. Cuauhtemoc 10"];
/* Instancia de objeto mandando los datos mediante el parametro Spread */

var aqui = _construct(Hola, _toConsumableArray(arreglo));