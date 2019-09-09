const req = new XMLHttpRequest();

function setUpViewing(name) {
    const nameToSend = JSON.parse(name);
    req.onload = () => {

    };
    req.open('GET', "");
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(name)

}

function handleB1() {
    localStorage.setItem('name', document.getElementById(1).innerText );
    localStorage.setItem('img', document.getElementById('1i').getAttribute('src'));
    window.location = '/SoloProject/pokeView.html';
}

function handleB2(){
    localStorage.setItem('name', document.getElementById(2).innerText );
    localStorage.setItem('img', document.getElementById('2i').getAttribute('src'));
    window.location = '/SoloProject/pokeView.html';
    return false;
}

function handleB3(){
    localStorage.setItem('name', document.getElementById(3).innerText );
    localStorage.setItem('img', document.getElementById('3i').getAttribute('src'));
    window.location = '/SoloProject/pokeView.html';
    return false;
}

function handleB4() {
    localStorage.setItem('name', document.getElementById(4).innerText);
    localStorage.setItem('img', document.getElementById('4i').getAttribute('src'));
    window.location = '/SoloProject/pokeView.html';
    return false;
}

function handleB5(){
    localStorage.setItem('name', document.getElementById(5).innerText );
    localStorage.setItem('img', document.getElementById('5i').getAttribute('src'));
    window.location = '/SoloProject/pokeView.html';
    return false;
}

function handleB6() {
    localStorage.setItem('name', document.getElementById(6).innerText);
    localStorage.setItem('img', document.getElementById('6i').getAttribute('src'));
    window.location = '/SoloProject/pokeView.html';
    return false;
}
