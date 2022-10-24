"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var arreglo = [];

var Mundo = /*#__PURE__*/_createClass(function Mundo() {
  _classCallCheck(this, Mundo);

  for (var _len = arguments.length, arreglo = new Array(_len), _key = 0; _key < _len; _key++) {
    arreglo[_key] = arguments[_key];
  }

  var nombre = arreglo[0],
      apellidoP = arreglo[1],
      apellidoM = arreglo[2],
      fecha_nac = arreglo[3],
      edad = arreglo[4],
      escuela = arreglo[5],
      carrera = arreglo[6],
      direccion = arreglo[7];
  this.impresionPantalla(nombre, apellidoP, apellidoM, fecha_nac, edad, escuela, carrera, direccion);
  this.arreglos_funciones(arreglo);
});

var Hola = /*#__PURE__*/function (_Mundo) {
  _inherits(Hola, _Mundo);

  var _super = _createSuper(Hola);

  function Hola() {
    _classCallCheck(this, Hola);

    return _super.apply(this, arguments);
  }

  _createClass(Hola, [{
    key: "impresionPantalla",
    value: function impresionPantalla(nombre, apellidoP, apellidoM, fecha_nac, edad, escuela, carrera, direccion) {
      document.write("<h1>Datos</h1>\n                        <br> Nombre: ".concat(nombre, " \n                        <br> ApellidoPaterno: ").concat(apellidoP, "\n                        <br> Apellido Materno: ").concat(apellidoM, "\n                        <br> Fecha de Nacimiento: ").concat(fecha_nac, "\n                        <br> Edad: ").concat(edad, "\n                        <br> Escuela: ").concat(escuela, "\n                        <br> Carrera: ").concat(carrera, "\n                        <br> Direcci\xF3n: ").concat(direccion, "\n                        <br><br>\n                        <h3>Usando Funciones</h3>\n                        <br> <b>Funcion: startsWith()</b> &nbspEl Nombre inicia con \"D\": ").concat(nombre.startsWith('D') ? 'Si'.fontcolor('green') : 'No'.fontcolor('red'), "\n                        <br> <b>Funcion: endsWith() &nbsp </b> El Apellido Paterno termina con \"K\": ").concat(apellidoP.endsWith('K') ? 'Si'.fontcolor('green') : 'No'.fontcolor('red'), "\n                        "));
    }
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

var aqui = new Hola("Daniel", "Blancas", "Aguilar", "22/02/2001", "21", "ITMA2", "Sistemas", "Prol. Cuauhtemoc 10");