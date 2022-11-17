"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Operador = /*#__PURE__*/function () {
  function Operador(dato) {
    _classCallCheck(this, Operador);

    this.dato = dato;
  }

  _createClass(Operador, [{
    key: "validacion",
    value: function validacion() {
      /* if(!this.dato){
          document.write(`Es verdadero`)
      }else{
          document.write(`Es falso`);
      } */
      var operador_terneario = this.dato > 2 ? "Es mayor a 2" : "Es menor a 2"; // document.write(`El numero ${operador_terneario}`);
      // document.write(`El numero ${this.dato > 2 ? `Es mayor a 2`:`Es menor a 2`}`);
      // return this.dato > 2 ? `Es mayor a 2`:`Es menor a 2`;

      return typeof this.dato != "number" ? this.dato == null ? "El valor es nulo" : "debes ingresar un numero" : this.dato > 2 ? "Es mayor a 2" : "Es menor a 2"; // typeof es la forma de evaluar un dato dependiendo del tipo especifico que se haga
    }
  }]);

  return Operador;
}();

var terneario = new Operador("");
document.write(terneario.validacion());
/* Validar dato que se entregue si es nullo, vacio, indefinido, si es un numero o es un string y devolver cada uno */