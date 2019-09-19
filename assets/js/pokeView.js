const name = localStorage.getItem("name");
const imgsrc = localStorage.getItem("img");
const origtag = localStorage.getItem("tag").toString();
const origimgt = localStorage.getItem("imgtag").toString();
let data;
const req = new XMLHttpRequest();
const apiLink = "http://localhost:9000/pokemon";
let currentpoke;

const url = new URLSearchParams(location.search);
console.log(origimgt);
console.log(origtag);

function setUp() {
    req.onload = () => {
        data = JSON.parse(req.response);
        if(url.has("pid")){
            pop(url.get("pid"))
        }else{
            for (let poke in data){
                if (data[poke]["name"] == name){
                    currentpoke = data[poke];
                    document.getElementById("m1").innerText = data[poke]["m1"];
                    document.getElementById("m2").innerText = data[poke]["m2"];
                    document.getElementById("m3").innerText = data[poke]["m3"];
                    document.getElementById("m4").innerText = data[poke]["m4"];
                    document.getElementById("name").innerText = data[poke]["name"];
                    document.getElementById('imgsrc').setAttribute('src', "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+inputCheck(data[poke]["pid"])+".png")
                }else{}
            }
        }

    };
    req.open("GET", apiLink, false);            //api call to get data
    req.send();
    return false;

}

function pop(id) {
    for (let pokemon in data) {
        if (data[pokemon]["id"] == id) {
            currentpoke = data[pokemon];
            document.getElementById("m1").innerText = data[pokemon]["m1"];
            document.getElementById("m2").innerText = data[pokemon]["m2"];
            document.getElementById("m3").innerText = data[pokemon]["m3"];
            document.getElementById("m4").innerText = data[pokemon]["m4"];
            document.getElementById("name").innerText = data[pokemon]["name"];
            document.getElementById('imgsrc').setAttribute('src', "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + inputCheck(data[pokemon]["pid"]) + ".png")
        }

    }
}

function inputCheck(id) {

    if(id.toString().length == 1 ){
        return "00"+id;
    }else if(id.toString().length == 2){
        return "0"+id;
    }else{
        return id;
    }

}

function handleSwitch() {

    console.log(origimgt);
    console.log(origtag);
    localStorage.setItem("total", "5");
    window.location = "/viewPC.html"

}

function handleThis(form){
    document.getElementById("mheader").innerText = currentpoke["name"];
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
        window.location = "/pokeView.html"
    };
    req.open("PUT", "http://localhost:9000/pokemon/"+currentpoke["id"]);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(currentpoke));

    return false;

}





