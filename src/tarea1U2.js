/* Realizar un programa que obtenga los datos de un arreglo de informacion personal */
/* nombre, apellidos, fecha nacimiento, edad, escuela, carrera, direccion  */
/* Crear arreglo vacio, se ocupa parametros res para llenarlo
realizar un programa que obtenga los datos de un arreglo de informacion personal. (aplicar clases y herencia)
aplicar el uso de las funciones:
-startsWith
-endsWith
-includes
-find
-findIndex
crear el arreglo vacio y llenarlo mendiante el uso ara metro Rest.
contenido del arreglo:
    nombre
    apellidoP
    apellidoM
    Fecha de nacimiento
    edad
    escuela
    carrera
    direccion */
/* Creación del arreglo */
/* Creación de arreglo vacio */
let arreglo = [];
/* Creación de clase principal */
class Mundo{
    /* De las clases de crea el constructor principal el cual funciona como main mandando los datos con el 
    Parametro Res */
    constructor(...arre){
        /* Se realiza la desestructuración del arreglo */
        let[nombre, apellidoP, apellidoM,fecha_nac,edad,escuela,carrera,direccion] = arre;
        /* Llamado de Metodos de la clase hijo */
        this.impresionPantalla(nombre, apellidoP,apellidoM,fecha_nac,edad,escuela,carrera,direccion);
        this.arreglos_funciones(arre);
    }
}
/* Creación de la segunda clase, la cual actuara como hijo */
class Hola extends Mundo{
    /* Metodo de impresion en pantalla */
    impresionPantalla(nombre, apellidoP,apellidoM,fecha_nac,edad,escuela,carrera,direccion){
        /* Funcion de escribir sobre el documento */
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
    /* Metodo de funciones con arreglos */
    arreglos_funciones(arreglo){
        document.write(`<br> <b>Funcion: includes() </b> &nbsp El arreglo incluye "Daniel": ${arreglo.includes('Daniela')?'Si'.fontcolor('green') :'No'.fontcolor('red')}
                        <br> <b>Función: find() </b> &nbsp Datos por posición y longitud de la cadena: ${arreglo.find(arreglo=> arreglo.length < 8)}
                        <br> <b>Función: findIndex() </b> &nbsp Datos por comparación y posicion: ${arreglo.findIndex(arreglo=> arreglo =="Blancas")}
                        `);
    }
}
/* sobreescritura de arreglo vacio */
arreglo = ["Daniel","Blancas","Aguilar","22/02/2001","21","ITMA2","Sistemas","Prol. Cuauhtemoc 10"];
/* Instancia de objeto mandando los datos mediante el parametro Spread */
const aqui = new Hola(...arreglo);