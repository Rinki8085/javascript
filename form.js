// For window onload--------------
/*
function coupn() {
    var code = prompt("Get a coupen code here","Zomo50 or Edu 50")
    if (code==null || code==""){
        coupon = "you can get 20% off"
    }else if (code=="Zomo50"){
      return( "you can get 40% off")
    }else{
        return ("you can get 40% off")
    }
}

// For button onclick-----------
function coupen(){
    document.getElementById('coupin').value = coupon;
    document.getElementById('valid').innerText= "You can get 40% off.";
}*/

// for window onload to orderid------
function fillId(){
    var id = Math.floor(Math.random()*100000)
    document.getElementById('orderid').value = id
}

//For converting into camel case-----
function nameToUpper(){
    var fname = document.getElementById('firstname').value
    fname = fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase()
    document.getElementById('firstname').value = fname
}

//===making password dynamic=====//
function checkPassword(){
    var pwd = document.getElementById('password').value;
    if (pwd.length<15){
        if (pwd.length<8){
            document.getElementById('pout').innerText = "Minimum length of password is 8";
            document.getElementById('ppout').style.display= "block";
            document.getElementById('ppout').style.backgroundColor="red";
        }else if (pwd.length<11){
            document.getElementById('pout').innerText = "";
            document.getElementById('ppout').style.backgroundColor = "orange";
        }
    }else{
        document.getElementById('ppout').style.backgroundColor = "green";
    }
}

function getExp(){
    var exp = document.getElementById('exp').value;
    document.getElementsByTagName('span')[0].innerText=`Total Year of experience is ${exp}`
}