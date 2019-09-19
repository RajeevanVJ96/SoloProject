const req = new XMLHttpRequest();

const url = new URLSearchParams(location.search);
const apiLink = "http://localhost:9000/pokemon";
const teamApiLink = "http://localhost:9000/pokemonteam";
localStorage.setItem("total", "6");

if(url.has("change")){
    document.getElementById(localStorage.getItem("tag")).innerText=localStorage.getItem("poke");
    document.getElementById(localStorage.getItem("imgtag")).src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+inputCheck(localStorage.getItem("id"))+".png";
}

let ids = []; //[4,6,8,9,10,11];

window.onload = function() {
  //  if(localStorage.getItem("hasRun") === null) {
        getInitialPoke();
        let currentpoke;
        for (id of ids) {
            currentpoke = getPokemon(id);
            document.getElementById(`s${ids.indexOf(id) + 1}`).innerText = currentpoke.name;
            document.getElementById(`s${ids.indexOf(id) + 1}m`).src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + inputCheck(currentpoke["pid"]) + ".png";
            for (let i = 1; i < 7; i++) {
            }
        }

        localStorage.setItem("hasRun", true);

};

function inputCheck(id) {

    if(id.toString().length == 1 ){
        return "00"+id;
    }else if(id.toString().length == 2){
        return "0"+id;
    }else{
        return id;
    }

}

function getPokemon(id){

    req.onload = () => {
        data = JSON.parse(req.response);
        };

    req.open("GET", apiLink+`/${id}`, false);            //api call to get data
    req.send();

    return data;
}

function getInitialPoke(){

    req.onload = () => {
        data = JSON.parse(req.response);
        for (let i = 0; i < 6; i++){
            ids.push(data[0]["pokemon"][i]["id"]);
        }

    };
    req.open("GET", teamApiLink, false);            //api call to get data
    req.send();
    return false;

};

function handleB1() {
    localStorage.setItem("name", document.getElementById("s1").innerText );
    localStorage.setItem("img", document.getElementById("s1m").getAttribute("src"));
    window.location = "/pokeView.html";
}

function handleB2(){
    localStorage.setItem("name", document.getElementById("s2").innerText );
    localStorage.setItem("img", document.getElementById("s2m").getAttribute("src"));
    window.location = "/pokeView.html";
    return false;
}

function handleB3(){
    localStorage.setItem("name", document.getElementById("s3").innerText );
    localStorage.setItem("img", document.getElementById("s3m").getAttribute("src"));
    localStorage.setItem("tag", "s3" );
    localStorage.setItem("imgtag", "s3m" );
    window.location = "/pokeView.html";
    return false;
}

function handleB4() {
    localStorage.setItem("name", document.getElementById("s4").innerText);
    localStorage.setItem("img", document.getElementById("s4m").getAttribute("src"));
    localStorage.setItem("tag", "s4" );
    localStorage.setItem("imgtag", "s4m" );
    window.location = "/pokeView.html";
    return false;
}

function handleB5(){
    localStorage.setItem("name", document.getElementById("s5").innerText );
    localStorage.setItem("img", document.getElementById("s5m").getAttribute("src"));
    localStorage.setItem("tag", "s5" );
    localStorage.setItem("imgtag", "s5m" );
    window.location = "/pokeView.html";
    return false;
}

function handleB6() {
    localStorage.setItem("name", document.getElementById("s6").innerText);
    localStorage.setItem("img", document.getElementById("s6m").getAttribute("src"));
    localStorage.setItem("tag", "s6" );
    localStorage.setItem("imgtag", "s6m" );
    window.location = "/pokeView.html";
    return false;
}
