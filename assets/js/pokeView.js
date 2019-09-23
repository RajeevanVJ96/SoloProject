const name = localStorage.getItem("name");
const imgsrc = localStorage.getItem("img");
let data;
const req = new XMLHttpRequest();
const apiLink = "http://35.235.50.146:9000/pokemon";
let currentpoke;

const url = new URLSearchParams(location.search);

/*
This function is used to assist the display of certain pokemon images due to the way PIDs are stored in the database. Any preceding 0s are not stored and this method is used to append
0s to the beginning of a string based on the number of characters in the PID. The returned ID is then concatenated to the end of the image serving url to get the correct image.
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
This is used to populate the view page with relevant details of the pokemon chosen to be viewed. This makes a get request to get all the pokemon and filters out the required
pokemon  using the name passed in through the local storage key "name". It also checks if the url coming in has a pid parameter so that the pid pokemon is viewed instead.

 */

function setUp() {
    req.onload = () => {
        data = JSON.parse(req.response);
        if(url.has("pid")){
            pop(url.get("pid"));
        }else{
            for (let poke in data){
                if (data[poke]["name"] === name){
                    currentpoke = data[poke];
                    document.getElementById("m1").innerText = data[poke]["m1"];
                    document.getElementById("m2").innerText = data[poke]["m2"];
                    document.getElementById("m3").innerText = data[poke]["m3"];
                    document.getElementById("m4").innerText = data[poke]["m4"];
                    document.getElementById("name").innerText = data[poke]["name"];
                    document.getElementById("imgsrc").setAttribute("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+inputCheck(data[poke]["pid"])+".png");
                }
            }
        }

    };
    req.open("GET", apiLink, false);            //api call to get data
    req.send();
    return false;

}

/*
This method is called if the view pokemon redirect came from the view all pokemon page as opposed to the index page.
 */

function pop(id) {
    for (let pokemon in data) {
        if (data[pokemon]["id"] === id) {
            currentpoke = data[pokemon];
            document.getElementById("m1").innerText = data[pokemon]["m1"];
            document.getElementById("m2").innerText = data[pokemon]["m2"];
            document.getElementById("m3").innerText = data[pokemon]["m3"];
            document.getElementById("m4").innerText = data[pokemon]["m4"];
            document.getElementById("name").innerText = data[pokemon]["name"];
            document.getElementById("imgsrc").setAttribute("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + inputCheck(data[pokemon]["pid"]) + ".png");
        }

    }
}


/*
This method is called when users want to exchange a pokemon from the PC.  The total localstorage variable is set to 5 so that a pokemon can be added to the team.
 */

function handleSwitch() {

    localStorage.setItem("total", "5");
    window.location = "/viewPC.html";

}

/*
 Function that handles the information from the edit form modal. Similar to the add poke method but the difference is that the attributes of the current pokemon on screen is changed
 The currentpoke object is obtained on onload and the changes to it are reflected on the database by using a PUT request to the API.
 */

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
        window.location = "/pokeView.html";
    };
    req.open("PUT", "http://35.235.50.146:9000/pokemon/"+currentpoke["id"]);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(currentpoke));

    return false;

}





