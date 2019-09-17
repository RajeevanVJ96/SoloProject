const req = new XMLHttpRequest()
let data;
let tBody = document.getElementById("tableBody");
const apiLink = "http://localhost:9000/pokemon";
let currentpoke = {};

function newRows(table) {
    let row = document.createElement("tr");
    for (let i = 1; i < arguments.length; i++){
        let cell = document.createElement("td");
        cell.innerHTML = arguments[i];
        row.append(cell)
    }
    table.append(row);
}

function populate(){

    req.onload = () => {
        data = JSON.parse(req.response);

        for(let i = 0; i < data.length; i++){
            let temps = data[i];
            let delBtn = `<button class='btn btn-primary' onclick='delPoke(${temps['id']})'>Delete</button>`;
            let editBtn = `<button class='btn btn-primary' data-toggle="modal" data-target="#editModal" onclick='editPoke(${temps['id']})'>Edit</button>`;
            let viewBtn = `<button class='btn btn-primary' onclick='viewPoke(${temps['id']})'>View</button>`;
            let addToTeam = `<button class='btn btn-primary' onclick='addToTeam(${temps['id']})'>Add to Team</button>`;
            newRows(tBody,temps["id"],temps["name"],temps["pid"],temps["m1"], temps["m2"], temps["m3"], temps["m4"], delBtn, editBtn, viewBtn, addToTeam );
        }
    };
    req.open("GET", apiLink, false);
    req.send();

}

function delPoke(id) {
    console.log(id);
    req.onload = () => {
        window.location = "/viewPC.html"
    };
    req.open("DELETE", "http://localhost:9000/pokemon/"+id);
    req.setRequestHeader("Content-Type", "application/json");
    req.send();


    return false;

}

function editPoke(id) {
    for(let i = 0; i < data.length; i++){
        let temps = data[i];
        if(temps["id"] == id){
            document.getElementById("exampleModalLabel").innerText = "Making Changes to " + temps["name"];
            currentpoke = temps;
        }}

}


function addToTeam(id) {

    for(let i = 0; i < data.length; i++){
        let temps = data[i];
        if(temps["id"] == id){
            localStorage.setItem("poke",temps["name"]);
            localStorage.setItem("id", temps["pid"]);
        }}

    window.location = "/index.html?change"
    return false;
}

function viewPoke(id) {

    window.location = `/pokeView.html?pid=${id}`

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
        window.location = "/viewPC.html"
    };
    req.open("PUT", "http://localhost:9000/pokemon/"+currentpoke["id"]);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(currentpoke));
    return false;
}




