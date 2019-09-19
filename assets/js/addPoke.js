const req = new XMLHttpRequest();
const pokeObj = {};
let submitName;

function handleThis(form) {

    for (let element of form.elements){
        if(element.name){
            pokeObj[element.name] = element.value;
        }
    }
    req.onload = () => {
        window.location = "/index.html?change"
       };
    req.open("POST", "http://35.235.50.146:9000/pokemon");
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(pokeObj));

    return false;
}

function setSubmit (button)
{
    submitName = button.value;
}
