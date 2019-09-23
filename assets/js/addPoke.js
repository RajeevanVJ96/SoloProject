const req = new XMLHttpRequest();
const pokeObj = {};


/*function is called when the add to PC button is pressed. It takes in the form as the parameter which is looped through to gather the information
to make the new pokemon object. Once created, a POST request is made to the API to add the JSON stringified object to the database which is sent in the
body of the request. When a response is returned, the index page is loaded.
*/

function handleThis(form) {

    for (let element of form.elements){
        if(element.name){
            pokeObj[element.name] = element.value;
        }
    }
    req.onload = () => {
        window.location = "/viewPC.html";
       };
    req.open("POST", "http://35.235.50.146:9000/pokemon");
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(pokeObj));

    return false;
}
