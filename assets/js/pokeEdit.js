const name = localStorage.getItem("name");

document.getElementById("changes").innerText = "Making changes to " + name;

function handleThis(form) {
    const obj = {};

    for(let element of form.elements){
        if(element.name){
            obj[element.name] = element.value;
        }
    }

    console.log(obj);
    return false;

}

