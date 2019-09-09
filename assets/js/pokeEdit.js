const name = localStorage.getItem('name');

document.getElementById('changes').innerText = "Making changes to " + name;

function handleOptions() {
    const obj = {}
    // let level = document.getElementById('level').value;
    let nat = document.getElementById('nats').innerText
    // let m1 = document.getElementById('m1').val();
    // let m2 = document.getElementById('m2').val();
    // let m3 = document.getElementById('m3').val();
    // let m4 = document.getElementById('m4').val();
    // obj["level"] = level;
    obj["nature"] = nat;
    // obj["Move 1"] = m1;
    // obj["Move 2"] = m2;
    // obj["Move 3"] = m3;
    // obj["Move 4"] = m4;
    console.log(obj);
    return false;

}

