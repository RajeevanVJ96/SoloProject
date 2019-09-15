const name = localStorage.getItem("name");
const imgsrc = localStorage.getItem("img");
const origtag = localStorage.getItem("tag").toString();
const origimgt = localStorage.getItem("imgtag").toString();
let data;
const req = new XMLHttpRequest();
const apiLink = "http://localhost:9000/pokemon";
let currentpoke;


console.log(origimgt);
console.log(origtag);

function populate() {
    req.onload = () => {
        data = JSON.parse(req.response);
        for (let poke in data){
            if (data[poke]["name"] == name){
                currentpoke = data[poke];
                document.getElementById("m1").innerText = data[poke]["m1"];
                document.getElementById("m2").innerText = data[poke]["m2"];
                document.getElementById("m3").innerText = data[poke]["m3"];
                document.getElementById("m4").innerText = data[poke]["m4"];
                document.getElementById("name").innerText = data[poke]["name"];
                document.getElementById('imgsrc').setAttribute('src', "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+data[poke]["pid"]+".png")
            }else{

            }
        }

    };
    req.open("GET", apiLink, false);            //api call to get data
    req.send();
    return false;

}


function handleDelete() {
    console.log(currentpoke["id"]);
    let id = currentpoke["id"];
    req.onload = () => {
        window.location = "/SoloProject/viewPC.html"
    };
    req.open("DELETE", "http://localhost:9000/pokemon/"+id);
    req.setRequestHeader("Content-Type", "application/json");
    req.send();


    return false;


}

function handleThis(form){
    let newObj = {};
    for (let element of form.elements) {
        if (element.name) {
            newObj[element.name] = element.value;
        }
    }
    currentpoke["m1"] = newObj["m1"];
    currentpoke["m2"] = newObj["m2"];
    currentpoke["m3"] = newObj["m3"];
    currentpoke["m4"] = newObj["m4"];

    req.onload = () => {
        window.location = "/SoloProject/pokeView.html"
    };
    req.open("PUT", "http://localhost:9000/pokemon/"+currentpoke["id"]);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(currentpoke));

    return false;

}





