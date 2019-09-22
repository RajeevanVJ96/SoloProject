const req = new XMLHttpRequest();

const url = new URLSearchParams(location.search);
const apiLink = "http://35.235.50.146:9000/pokemon";
const teamApiLink = "http://35.235.50.146:9000/pokemonteam";
localStorage.setItem("total", "6");
let data;


let ids = [];             // array to store all the initial ids of pokemon to be stored on the index page. Pokemon is based on the current team object

/*
Getting the current team using a GET request, that will populate the index page and adding their ids to the ids array
 */

function getInitialPoke(){

    req.onload = () => {
        data = JSON.parse(req.response);
        for (let i = 0; i < 6; i++){
            ids.push(data[0]["pokemon"][i]["id"]);
        }

    };
    req.open("GET", teamApiLink, false);
    req.send();
    return false;

};


/*
When the page loads, the initalPoke function is ran in order to populate the index page with the current team roster found in the PokeTeam obj. The ids of these pokemon are passed
into the ids array which is then iterated through. For each ID the getpokemon method is called to get its name and pid so they can be used to populate a section in the index.
 */

window.onload = function() {
        getInitialPoke();
        for (let id of ids) {
            let currentpoke;
            currentpoke = getPokemon(id);
            document.getElementById(`s${ids.indexOf(id) + 1}`).innerText = currentpoke.name;
            document.getElementById(`s${ids.indexOf(id) + 1}m`).src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + inputCheck(currentpoke["pid"]) + ".png";

        }


}

/*
This method is similar to the one found in PokeView where it is to allow the displaying of pokemon with PIDs less than 100 where a 0 needs to be concatenated in front of them.
 */

function inputCheck(id) {

    if(id.toString().length === 1 ){
        return "00"+id;
    }else if(id.toString().length === 2){
        return "0"+id;
    }else{
        return id;
    }

}

/*
Function to get a pokemon by its ID using a get request.
 */

function getPokemon(id){

    req.onload = () => {
        data = JSON.parse(req.response);
        };

    req.open("GET", apiLink+`/${id}`, false);            //api call to get data
    req.send();

    return data;
}

/*
These functions are all for each of the buttons that exist underneath each pokemon. The key thing to note is that on click, two variables are created in local storage
which are used for displaying the pokemon details in the pokeview page.
 */

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
    window.location = "/pokeView.html";
    return false;
}

function handleB4() {
    localStorage.setItem("name", document.getElementById("s4").innerText);
    localStorage.setItem("img", document.getElementById("s4m").getAttribute("src"));
    window.location = "/pokeView.html";
    return false;
}

function handleB5(){
    localStorage.setItem("name", document.getElementById("s5").innerText );
    localStorage.setItem("img", document.getElementById("s5m").getAttribute("src"));
    window.location = "/pokeView.html";
    return false;
}

function handleB6() {
    localStorage.setItem("name", document.getElementById("s6").innerText);
    localStorage.setItem("img", document.getElementById("s6m").getAttribute("src"));
    window.location = "/pokeView.html";
    return false;
}
