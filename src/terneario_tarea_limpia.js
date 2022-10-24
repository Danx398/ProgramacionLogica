export class Operador{
    constructor(dato){
        this.validacion(dato);
    }   
}
export default class Son extends Operador{
    validacion(dato){
        let operador_de_nulo = dato == null ? `el valor "${dato}" es nulo`:dato == '' ? `el valor "${dato}" esta vacio`: typeof(dato) == "number" ? `el valor "${dato}" es un numero`:typeof(dato) == "string"?`El valor "${dato}"es una cadena`:Object.values(dato)?`El valor "${dato}" es un  objeto`:`no es un objeto`;
        dato=== undefined ? document.write(`el valor "${dato}" undefined`):document.write(operador_de_nulo);
    }
}
// const terneario = new Son({hola:"Holis"}); 
