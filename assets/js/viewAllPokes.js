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
            let modButton = "<button class='btn btn-primary' type='submit' data-target='#editForm'  data-toggle='modal'>Edit</button>";
            let viewButton = "<button class='btn btn-primary' onclick='viewPoke(data[i])'>View</button>";
            let delButton = "<button class='btn btn-primary' onclick='delPoke(data[i])'>Delete</button>";
            let addTeam = "<button class='btn btn-primary' onclick='addToTeam(data[i])'>Add to Team</button>";
            newRows(tBody,temps["id"],temps["name"],temps["pid"],temps["m1"], temps["m2"], temps["m3"], temps["m4"], modButton, viewButton, delButton, addTeam);
        }
    };
    req.open("GET", apiLink, false);            //api call to get data
    req.send();

}

function populateModal(data){

    document.getElementById('M1').value = data["m1"];
    document.getElementById('M2').value = data["m2"];
    document.getElementById('M3').value = data["m3"];
    document.getElementById('M4').value = data["m4"];

}

function addToTeam() {

}

function viewPoke() {

    window.location = "/SoloProject/index.html?change"

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