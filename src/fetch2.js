/* Clase principal */
class fetch{
    /* Metodo principal */
    constructor(){

    }
    /* Metodo de personajes */
    personajes(){
        /* Creación del fetch */
        fetch(`https://rickandmortyapi.com/api/character`)//recibe un parametro una URL
        /* Al recibir el url se necesita internet obligatoriamente para consumir el api */
        .then(respuesta => respuesta.json())//LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON
        /* El cual sera mas facil su uso */
        .then(respuesta => {//SE RECIBEN LOS DATOS EN FORMATO JSON
            /* Los cuales ya estan almacenados en  */
            console.log(respuesta);//SE MUESTRAN LOS DATOS OBTENIDOS
            let {results} = respuesta;//se obtinen los personajes
            /* Se hace la desesctructuración del objeto */
            let personajes = ``;
            results.map(personaje => {//se recorre el arreglo de personajes
                /* Desestructuracion de json en personajes */
                let {created,gender,id,image,location,name,origin,species,status,url} = personaje;
                /* Va guardando en la variable los datos obtenidos*/
                personajes += `
                `;
            });
        })
        /* Es la parte del error */
        .catch(error => {//SE ATRAPA UN ERROR EN CASO DE EXISTIR
            console.log(error);//SE MUESTRA EL ERROR
            /* Hace la impresion del error que esta mandando en caso de que no entre la respuesta positiva */
        });
    }
}