const name = localStorage.getItem('name');
const imgsrc = localStorage.getItem('img');

document.getElementById('h1').innerText = name
document.getElementById('imgsrc').setAttribute('src', imgsrc);

function handleDelete() {

}

function handleEdit() {
    window.location = '/SoloProject/pokeEdit.html';
    return false;
}

