class Operador{
    constructor(dato){
        this.dato = dato;
    }
    validacion(){
        /* if(!this.dato){
            document.write(`Es verdadero`)
        }else{
            document.write(`Es falso`);
        } */
        let operador_terneario = this.dato > 2 ? `Es mayor a 2`:`Es menor a 2`;
        // document.write(`El numero ${operador_terneario}`);
        // document.write(`El numero ${this.dato > 2 ? `Es mayor a 2`:`Es menor a 2`}`);
        // return this.dato > 2 ? `Es mayor a 2`:`Es menor a 2`;
        return typeof(this.dato) != "number" ? (this.dato == null ? `El valor es nulo`:`debes ingresar un numero`) : (this.dato>2 ? `Es mayor a 2`:`Es menor a 2`);
        // typeof es la forma de evaluar un dato dependiendo del tipo especifico que se haga
    }
}

const terneario = new Operador("");
document.write(terneario.validacion());

/* Validar dato que se entregue si es nullo, vacio, indefinido, si es un numero o es un string y devolver cada uno */