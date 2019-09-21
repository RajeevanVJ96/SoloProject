const req = new XMLHttpRequest();
let data;
let tBody = document.getElementById("tableBody");
const apiLink = "http://35.235.50.146:9000/pokemon";
let currentpoke = {};


/*
This method creates each row in the table where it takes in the id of the table that the rows should be added to and uses the arguments structure to loop through all the other args
that were passed in. For each arguments a new cell is created and the value of each cell is populated by the argument itself and the cell is added to the current row. And finally the row
is appended to the table.
 */

function newRows(table) {
    let row = document.createElement("tr");
    for (let i = 1; i < arguments.length; i++){
        let cell = document.createElement("td");
        cell.innerHTML = arguments[i];
        row.append(cell)
    }
    table.append(row);
}

/*
This method is called on onload to populate the table with all the different pokemon entries. This is done by using a GET request to the API that returns the entire list of pokemon
and then for each pokemon object, 4 buttons are created with 3 being the RUD of the CRUD while the last is used for adding the pokemon to the team. Then these buttons along with each
member of the pokemon object are passed in as parameters to the function above to create new rows.
 */

function populate(){

    req.onload = () => {
        data = JSON.parse(req.response);

        for(let i = 0; i < data.length; i++){
            let temps = data[i];
            let delBtn = `<button class='btn btn-primary' onclick='delPoke(${temps['id']})'>Release</button>`;
            let editBtn = `<button class='btn btn-primary' data-toggle="modal" data-target="#editModal" onclick='editPoke(${temps['id']})'>Edit</button>`;
            let viewBtn = `<button class='btn btn-primary' onclick='viewPoke(${temps['id']})'>View</button>`;
            let addToTeam = `<button class='btn btn-primary' onclick='addToTeam(${temps['id']})'>Add to Team</button>`;
            newRows(tBody,temps["id"],temps["name"],temps["pid"],temps["m1"], temps["m2"], temps["m3"], temps["m4"], delBtn, editBtn, viewBtn, addToTeam );
        }
    };
    req.open("GET", apiLink, false);
    req.send();

}

/*
This method is called for every delete button pressed with the parameter id corresponding to the row. It simply sends a DELETE request to remove the chosen pokemon from the list of all
pokemon. It also redirects to the same page to allow users to continue with other work.
 */


function delPoke(id) {
    console.log(id);
    req.onload = () => {
        window.location = "/viewPC.html"
    };
    req.open("DELETE", "http://35.235.50.146:9000/pokemon/"+id);
    req.setRequestHeader("Content-Type", "application/json");
    req.send();


    return false;

}

/*
This method is called for every edit button pressed with the parameter id corresponding to the row. It is used to set up and populate the modal that will be launched on press.
 */

function editPoke(id) {
    for(let i = 0; i < data.length; i++){
        let temps = data[i];
        if(temps["id"] == id){
            document.getElementById("exampleModalLabel").innerText = "Making Changes to " + temps["name"];
            currentpoke = temps;
        }}

}

/*
This method is called when the add to team button is pressed with the parameter id corresponding to the row. It will check if the pokemon can be added to the team ie the value of total
is not "6" before replacing the current chosen pokemon with the old pokemon being exchanged. The getPokeByName method is called here to get the id of the pokemon being replaced from the
index page by using the localstorage key "name".
 */


function addToTeam(id) {

    if(localStorage.getItem("total") == "6"){
        alert("Your party is full, please deposit first.")
    }else{
        req.onload = () =>{
            localStorage.setItem("total", "6");
            window.location = "/index.html";
        };
        req.open("PUT", "http://35.235.50.146:9000/pokemonteam/1/"+getPokeByName()+"/"+id);
        req.setRequestHeader("Content-Type", "application/json");
        req.send();


        return false;
    }


}

/*
This function get the id of the pokemon using its name.
 */

function getPokeByName() {

    const name = localStorage.getItem("name");
    let id;
    for(let i = 0; i < data.length; i++) {
        let temps = data[i];
        if(temps["name"] == name){
            id = temps["id"];
        }
    }
    return id;

}

/*
This function is used to view the current pokemons details by taking it to the pokeview page.
 */

function viewPoke(id) {

    window.location = `/pokeView.html?pid=${id}`

}

/*
This function is used to handle the form input from the modal form and uses a put request to replace any changes to the chosen pokemon.
 */

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
    req.open("PUT", "http://35.235.50.146:9000/pokemon/"+currentpoke["id"]);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(currentpoke));
    return false;
}

/*
This function is used to search the table of pokemon for a specific pokemon by its name for when the table is too large to display all pokemon.
Credits to W3Schools for outline of function
 */

function tableSearch() {

    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");                  //input field
    filter = input.value.toUpperCase();
    table = document.getElementById("tableBody");                //table to be searched
    tr = table.getElementsByTagName("tr");                   //each row
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];            //get name cell
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {            //to display or not to display
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}



