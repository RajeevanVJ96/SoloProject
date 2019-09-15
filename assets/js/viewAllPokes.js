const req = new XMLHttpRequest()

let data;
let tBody = document.getElementById("tableBody");
const apiLink = "http://localhost:9000/pokemon";

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
        console.log(req.response);
        data = JSON.parse(req.response)

        for(let i = 0; i < data.length; i++){
            let temps = data[i];
            let modButton = "<button class='btn btn-primary' onclick='openForm()'>Edit</button>";
            let viewButton = "<button class='btn btn-primary' onclick='viewPoke()'>View</button>";
            let delButton = "<button class='btn btn-primary' onclick='delPoke()'>Delete</button>";
            let addTeam = "<button class='btn btn-primary' onclick='addToTeam()'>Add to Team</button>";
            newRows(tBody,temps["id"],temps["name"],temps["pid"],temps["m1"], temps["m2"], temps["m3"], temps["m4"], modButton, viewButton, delButton, addTeam);
        }
    };
    req.open("GET", apiLink, false);            //api call to get data
    req.send();

}

function addToTeam() {

}

function viewPoke() {

}

function delPoke(){

}

function editForm(form) {

    let formObject = {};
    for (let element of form.elements) {
        if (element.value) {
            formObject[element.id] = element.value;
        }
    };

    console.log(formObject);

    return false;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function cForm() {
    document.getElementById("myForm").style.display = "none";
}