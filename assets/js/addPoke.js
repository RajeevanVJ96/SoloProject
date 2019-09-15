const req = new XMLHttpRequest()
const pokeObj = {};
let submitName;

function handleThis(form) {

    for (let element of form.elements){
        if(element.name){
            pokeObj[element.name] = element.value;
        }
    }

   if(submitName == "Add to Team" ){
       localStorage.setItem("poke",pokeObj["name"]);
       localStorage.setItem("id", pokeObj["pid"]);
       console.log(pokeObj);
       req.onload = () => {
           window.location = "/SoloProject/index.html?change"
       };
       req.open("POST", "http://localhost:9000/pokemon");
       req.setRequestHeader("Content-Type", "application/json");
       req.send(JSON.stringify(pokeObj));

   }
   if(submitName == "Add to PC") {
       console.log(pokeObj);
       req.onload = () => {
       };
       req.open("POST", "http://localhost:9000/pokemon");
       req.setRequestHeader("Content-Type", "application/json");
       req.send(JSON.stringify(pokeObj));
   }
    return false;
}

function setSubmit (button)
{
    submitName = button.value;
}

function handlePC() {

    for (let element of form.elements){
        if(element.name){
            pokeObj[element.name] = element.value;
        }
    }



    window.location = "/SoloProject/viewPC.html"

}