
const pokeObj = {};

function handleThis(form) {



    for (let element of form.elements){
        if(element.name){
            pokeObj[element.name] = element.value;
        }
    }

    console.log(pokeObj);
    window.location = '/SoloProject/index.html?poke='+pokeObj['name']+'&src='+pokeObj['pid']
    return false;
}