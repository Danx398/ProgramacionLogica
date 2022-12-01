class fetch{
    constructor(){

    }
    personajes(){
        fetch(`https://rickandmortyapi.com/api/character`)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            console.log(respuesta);
            let {results} = respuesta;
            let personajes = ``;
            results.map(personaje => {
                let {created,gender,id,image,location,name,origin,species,status,url} = personaje;
                personajes += `
                `;
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
}