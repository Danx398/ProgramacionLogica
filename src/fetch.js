export class Consulta{
    constructor(){

    }
    consulta (){
        fetch(`https://rickandmortyapi.com/api`,{
        }).then((respuesta)=>{
            if (respuesta.status == 200) {
                console.log("Todo OK");
                console.log(respuesta.json());
            }
            if(respuesta.status == 404){
                console.log("Not found");
            }
            if(respuesta.status == 500){
                console.log("Error de servidor");
            }
        })
        .catch()
    }
}