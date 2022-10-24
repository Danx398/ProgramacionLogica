/* Creación del nuevo arreglo de 3 niveles */
const arr= [
    {
        nombre: 'Daniel',
        apellidos:{
            primerApellido:'Blancas',
                segundoApellido:{
                    persona: 'Aguilar',
                    defecto: 'Sin segundo apellido'
                }
        }
    }
];
/* Creacion de la primera clase, en donde se hacen o crean las variables
    dependiendo de la jerarquia
*/
class Mundo{
    constructor(arreglo){
        arreglo.map((auxiliar)=>{
            /* Nuevas variables creadas dentro de el .map */
            let{nombre, apellidos} = auxiliar;
            let{primerApellido,segundoApellido} = apellidos;
            let{persona, defecto}=segundoApellido;
            /* Invocación del metodo que existe dentro de otra clase "Hijo" mandando los paremetros necesarios */
            this.mostrarDatos(nombre,primerApellido, persona, defecto);
        });
    }
}
/* Creación de la clase "hijo" para que pueda utilizarse de manera correcta, este hace que al tener un nuevo metodo
    se pueda utilizar en ambos metodos, así como ya no tener un metodo constructor para que 
*/
class Hola extends Mundo{
    /* Aqui se crea el metodo para mostrar los datos que recibe en la invocación de la clase "padre" */
    mostrarDatos(nombre, primerApellido,persona, defecto){
        /* Escritura en pantalla para poder observar */
        document.write(`Nombre: ${nombre} <br> Primer apellido: ${primerApellido} <br> Segundo Apellido: ${defecto} <br>`)
    }
}
/* Instancia de clase "hijo" a la cual se la mandan los datos del arreglo original */
const hi = new Hola(arr);