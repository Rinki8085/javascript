function getStocks(){
    var url = "http://localhost:4300/Stockapp"
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
        data.map((item) => {
            fetch('${url}')
        })
    })
}

/*
data.map((item) => {
    var element = document.createElement('li');
    var text = document.createTextNode(item.name);
    element.appendChild(text);
    var main = document.getElementById('slist');
    main.appendChild(element);
})*/