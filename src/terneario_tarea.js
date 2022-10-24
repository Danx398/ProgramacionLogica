/* Aqui se hace la creación de la clase principal */
class Operador{
    /* Aqui se hace la construccion del metodo principal {constructor} */
    constructor(dato){
        /* Aqui se hace la invocación del metodo validacion que viene desde el Son */
        this.validacion(dato);
    }   
}
/* Aqui se hace la creacion del metodo "hijo" */
class Son extends Operador{
    /* Aqui es la creación del metodo el cual hace las evaluaciones el cual recibe por parametro el valor */
    validacion(dato){
        /* Se hace la creacion de la variable, la cual va a recibir una dato */
        let operador_de_nulo = dato == null ? `el valor es nulo`:dato == '' ? `el valor esta vacio`: typeof(dato) == "number" ? `el valor es un numero`:typeof(dato) == "string"?`Es una cadena`:Object.values(dato)?`Es un objeto`:`no es un objeto`;
        /* Aqui se hace la creacion de una variable diferente la cual va a evaluar solo el dato undefined 
        -> junto a el se va a hacer la escritura en pantalla
        */
       /* Se hace una restriccion la cual debe ser igual a el dato */
        dato=== undefined ? document.write(`es undefined`):document.write(operador_de_nulo);
    }
}
/* Se hace la instancia de la clase, la cual va a mandar el dato a evaluar */
const terneario = new Son(undefined);
