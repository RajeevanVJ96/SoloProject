const req = new XMLHttpRequest();

const url = new URLSearchParams(location.search);

if(url.has("change")){
    document.getElementById(localStorage.getItem("tag")).innerText=localStorage.getItem("poke");
    document.getElementById(localStorage.getItem("imgtag")).src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+localStorage.getItem("id")+".png";
}

if(url.has("poke")){
    const newt = url.get("poke");
    const newimg = url.get("src");
}

function handleB1() {
    localStorage.setItem("name", document.getElementById("s1").innerText );
    localStorage.setItem("img", document.getElementById("s1m").getAttribute("src"));
    localStorage.setItem("tag", "s1" );
    localStorage.setItem("imgtag", "s1m" );
    window.location = "/SoloProject/pokeView.html";
}

function handleB2(){
    localStorage.setItem("name", document.getElementById("s2").innerText );
    localStorage.setItem("img", document.getElementById("s2m").getAttribute("src"));
    localStorage.setItem("tag", "s2" );
    localStorage.setItem("imgtag", "s2m" );
    window.location = "/SoloProject/pokeView.html";
    return false;
}

function handleB3(){
    localStorage.setItem("name", document.getElementById("s3").innerText );
    localStorage.setItem("img", document.getElementById("s3m").getAttribute("src"));
    localStorage.setItem("tag", "s3" );
    localStorage.setItem("imgtag", "s3m" );
    window.location = "/SoloProject/pokeView.html";
    return false;
}

function handleB4() {
    localStorage.setItem("name", document.getElementById("s4").innerText);
    localStorage.setItem("img", document.getElementById("s4m").getAttribute("src"));
    localStorage.setItem("tag", "s4" );
    localStorage.setItem("imgtag", "s4m" );
    window.location = "/SoloProject/pokeView.html";
    return false;
}

function handleB5(){
    localStorage.setItem("name", document.getElementById("s5").innerText );
    localStorage.setItem("img", document.getElementById("s5m").getAttribute("src"));
    localStorage.setItem("tag", "s5" );
    localStorage.setItem("imgtag", "s5m" );
    window.location = "/SoloProject/pokeView.html";
    return false;
}

function handleB6() {
    localStorage.setItem("name", document.getElementById("s6").innerText);
    localStorage.setItem("img", document.getElementById("s6m").getAttribute("src"));
    localStorage.setItem("tag", "s6" );
    localStorage.setItem("imgtag", "s6m" );
    window.location = "/SoloProject/pokeView.html";
    return false;
}
