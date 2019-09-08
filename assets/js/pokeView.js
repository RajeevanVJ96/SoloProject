const name = localStorage.getItem('name');
const imgsrc = localStorage.getItem('img');

document.getElementById('h1').innerText = name
document.getElementById('imgsrc').setAttribute('src', imgsrc);