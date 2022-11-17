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

/* Creación del nuevo arreglo de 3 niveles */
var arr = [{
  nombre: 'Daniel',
  apellidos: {
    primerApellido: 'Blancas',
    segundoApellido: {
      persona: 'Aguilar',
      defecto: 'Sin segundo apellido'
    }
  }
}];
/* Creacion de la primera clase, en donde se hacen o crean las variables
    dependiendo de la jerarquia
*/

var Mundo = /*#__PURE__*/_createClass(function Mundo(arreglo) {
  var _this = this;

  _classCallCheck(this, Mundo);

  arreglo.map(function (auxiliar) {
    /* Nuevas variables creadas dentro de el .map */
    var nombre = auxiliar.nombre,
        apellidos = auxiliar.apellidos;
    var primerApellido = apellidos.primerApellido,
        segundoApellido = apellidos.segundoApellido;
    var persona = segundoApellido.persona,
        defecto = segundoApellido.defecto;
    /* Invocación del metodo que existe dentro de otra clase "Hijo" mandando los paremetros necesarios */

    _this.mostrarDatos(nombre, primerApellido, persona, defecto);
  });
});
/* Creación de la clase "hijo" para que pueda utilizarse de manera correcta, este hace que al tener un nuevo metodo
    se pueda utilizar en ambos metodos, así como ya no tener un metodo constructor para que 
*/


var Hola = /*#__PURE__*/function (_Mundo) {
  _inherits(Hola, _Mundo);

  var _super = _createSuper(Hola);

  function Hola() {
    _classCallCheck(this, Hola);

    return _super.apply(this, arguments);
  }

  _createClass(Hola, [{
    key: "mostrarDatos",
    value:
    /* Aqui se crea el metodo para mostrar los datos que recibe en la invocación de la clase "padre" */
    function mostrarDatos(nombre, primerApellido, persona, defecto) {
      /* Escritura en pantalla para poder observar */
      document.write("Nombre: ".concat(nombre, " <br> Primer apellido: ").concat(primerApellido, " <br> Segundo Apellido: ").concat(defecto, " <br>"));
    }
  }]);

  return Hola;
}(Mundo);
/* Instancia de clase "hijo" a la cual se la mandan los datos del arreglo original */


var hi = new Hola(arr);