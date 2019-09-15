const req = new XMLHttpRequest()

let data;
let tBody = document.getElementById("tableBody");
const apiLink = "35.235.50.146:9000/pokemon";


function populate(){

    req.onload = () => {
        console.log(req.response);
        data = JSON.parse(req.response)
    };
    req.open("GET", apiLink, false);            //api call to get data
    req.send();

    let pokeinfo = [];
    let pokemons;

    for(let poke of data){
        pokemons = [];

        pokeinfo.push(poke.id);
        pokeinfo.push(poke.name);
        pokeinfo.push(poke.pid);
        pokeinfo.push(poke.m1);
        pokeinfo.push(poke.m2);
        pokeinfo.push(poke.m3);
        pokeinfo.push(poke.m4);

        pokemons.push(pokeinfo);
    }

    let innerCont;
    let container=document.createElement("tr");
    tBody.appendChild(container);

    for (let poke of pokemons){
        let tBod = document.getElementById("tableBody");
        let cellCont;

        let container = document.createElement("tr");
        tBod.appendChild(container);

        for(let att of poke){
            cellCont = document.createElement("td");
            cellCont.innerHTML = att;
            container.appendChild(cellCont);
        }

        innerCont = document.createElement("td");
        let modButton = "<button class='btn btn-primary' onclick='openForm()'>Edit</button>";
        innerCont.innerHTML = modButton;
        container.appendChild(innerCont)
    }

}