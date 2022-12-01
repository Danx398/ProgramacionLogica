export class Consulta{
    constructor(){

    }
    consulta (){
        fetch("https://rickandmortyapi.com/api/character")
        .then((respuesta=>respuesta.json()))
        .then((respuesta)=>{
            let cards1=``;
            let contador = 0;
            console.log(respuesta);
            for (let i = 0; i < 10; i++) {
                contador++;
                cards1 = `
                <img src="${respuesta.results[i].image}" class="container-fluid" alt="...">
                
                <h1 class="text-center bg-light p-2 text-dark bg-opacity-10">${respuesta.results[i].id}:${respuesta.results[i].name}</h1>
                <h3 class="text-center bg-light p-2 text-dark bg-opacity-10">Especie: ${respuesta.results[i].species}</h3=>
                <h3 class="text-center bg-light p-2 text-dark bg-opacity-10">Origen: ${respuesta.results[i].origin.name}</h3>
                `;
                console.log(contador);
                $(`#img${contador}`).html(`${cards1}`);
            }
            console.log(respuesta.results[i].image);
                document.write(`<img src="${respuesta.results[i].image}" alt="">`);
                document.write(`<h1>${respuesta.results[i].name}</h1>`);
                document.write(`<h1>${respuesta.results[i].species}</h1>`);
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