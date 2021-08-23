function popUp(){
    alert("Hello! Welcome to This Page.");
}

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
    document.getElementsByTagName('span')[0].innerText=`Total Year of experience is ${exp}`
}