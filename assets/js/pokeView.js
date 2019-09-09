const name = localStorage.getItem('name');
const imgsrc = localStorage.getItem('img');
const origtag = localStorage.getItem('tag').toString();
const origimgt = localStorage.getItem('imgtag').toString();

document.getElementById('name').innerText = name
document.getElementById('imgsrc').setAttribute('src', imgsrc);

console.log(origimgt);
console.log(origtag);


function handleDelete() {

    //Delete from db
    window.location = '/SoloProject/index.html?slot='+origtag+'&img='+origimgt

}

function handleEdit() {
    window.location = '/SoloProject/pokeEdit.html';
    return false;
}

