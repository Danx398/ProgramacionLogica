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
class Hola extends Mundo{
    mostrarDatos(nombre, primerApellido,persona, defecto){
        document.write(`Nombre: ${nombre} <br> Primer apellido: ${primerApellido} <br> Segundo Apellido: ${defecto} <br>`)
    }
}
const hi = new Hola(arr);