const req = new XMLHttpRequest()
const pokeObj = {};

function handleThis(form) {
    for (let element of form.elements){
        if(element.name){
            pokeObj[element.name] = element.value;
        }
    }

    console.log(pokeObj);
    req.onload = () => {};
    req.open("POST", "http://localhost:9000/pokemon");
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(pokeObj));

    //window.location = "/SoloProject/index.html?poke="+pokeObj["name"]+"&src="+pokeObj["pid"];
    return false;
}

function handlePC() {

    window.location = "/SoloProject/viewPC.html"

}