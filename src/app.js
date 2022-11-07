/* Comentarios hacerca de las importaciones y exportaciones:
    -> Al realizar una exportacion se debe hacer dentro de una clase, promesa, o metodo el cual se vera afectado

    -> por ejemplo: en una clase{
    class Mundo{
        constructor(arreglo){
            arreglo.map((auxiliar)=>{
                let{nombre, apellidos} = auxiliar;
                let{primerApellido,segundoApellido} = apellidos;
                let{persona, defecto}=segundoApellido;
                this.mostrarDatos(nombre,primerApellido, persona, defecto);
            });
        }
        }
    }
    -> Al inicio de la palabra reservada class, se debe poner "export" o en caso de que sea solo una clase, poner "export default"
    -> y el resultado seria :{
        export class Mundo{
            (en donde todas las propiedades y metodos tambien seran exportados)
        }
    }

    -> Para hacer las importaciones:{
        se debe hacer dentro del archivo app.js en el que la sintaxis sera la siguiente:
        -> import {(clase, metodo, promesa)} from "./path del archivo"
    }

*/

// import { promesa1,promesa2 } from "./promesas";
// import Son from "./terneario_tarea_limpia";
// const terneario = new Son(undefined);
// document.write(terneario.validacion())
// promesa;

/* import {prueba,prueba2} from "./modulo1";
import {datos} from "./arreglos_texto_limpio";
datos1();
prueba();
prueba2(); */

import {Consulta} from "./fetch";
const api = new Consulta();
api.consulta();