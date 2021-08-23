function nameToUpper(){
    var fname = document.getElementById('firstname').value
    fname = fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase()
    document.getElementById('firstname').value = fname
}

function checkPassword(){
    alert("Password changed")
}

function getExp(){
    var exp = document.getElementById('exp').value;
    document.getElementsByTagName('span').innerText = exp
}