const arreglo = [];
class Mundo{
    constructor(...arreglo){
        let[nombre, apellidoP, apellidoM,fecha_nac,edad,escuela,carrera,direccion] = arreglo;

        this.impresionPantalla(nombre, apellidoP,apellidoM,fecha_nac,edad,escuela,carrera,direccion);
        this.arreglos_funciones(arreglo);
    }
}
class Hola extends Mundo{
    impresionPantalla(nombre, apellidoP,apellidoM,fecha_nac,edad,escuela,carrera,direccion){
        document.write(`<h1>Datos</h1>
                        <br> Nombre: ${nombre} 
                        <br> ApellidoPaterno: ${apellidoP}
                        <br> Apellido Materno: ${apellidoM}
                        <br> Fecha de Nacimiento: ${fecha_nac}
                        <br> Edad: ${edad}
                        <br> Escuela: ${escuela}
                        <br> Carrera: ${carrera}
                        <br> Dirección: ${direccion}
                        <br><br>
                        <h3>Usando Funciones</h3>
                        <br> <b>Funcion: startsWith()</b> &nbspEl Nombre inicia con "D": ${nombre.startsWith('D')?'Si'.fontcolor('green') :'No'.fontcolor('red')}
                        <br> <b>Funcion: endsWith() &nbsp </b> El Apellido Paterno termina con "K": ${apellidoP.endsWith('K')?'Si'.fontcolor('green') :'No'.fontcolor('red')}
                        `);
    }
    arreglos_funciones(arreglo){
        document.write(`<br> <b>Funcion: includes() </b> &nbsp El arreglo incluye "Daniel": ${arreglo.includes('Daniela')?'Si'.fontcolor('green') :'No'.fontcolor('red')}
                        <br> <b>Función: find() </b> &nbsp Datos por posición y longitud de la cadena: ${arreglo.find(arreglo=> arreglo.length < 8)}
                        <br> <b>Función: findIndex() </b> &nbsp Datos por comparación y posicion: ${arreglo.findIndex(arreglo=> arreglo =="Blancas")}
                        `);
    }
}
const aqui = new Hola("Daniel","Blancas","Aguilar","22/02/2001","21","ITMA2","Sistemas","Prol. Cuauhtemoc 10");