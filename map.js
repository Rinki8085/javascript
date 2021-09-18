var url = "https://developerfunnel.herokuapp.com/location"
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels"

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            var element = document.createElement('option'); // create <option></option>
            var Text = document.createTextNode(item.city_name); // create text- "Delhi"
            element.appendChild(Text); // add text inside the option - <option>Delhi</option>
            element.value = item._id; // add value inside the option - <option value="Delhi">Delhi</option
            document.getElementById('city').appendChild(element); // add option inside the select <select><option>Delhi</option></select>
        })
    })
}

function getHotels(){
    var selected = document.getElementById('city').value; 
    var Restaurent = document.getElementById('restaurent').value; 
    localStorage.setItem("CityName",selected)

    /*----get data wrt to citys---*/
    while(Restaurent.length>0){
        Restaurent.clear()
    }

    fetch('${hotelUrl}${selected}')
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            var element = document.createElement('option'); // create <option></option>
            var Text = document.createTextNode('$(item.locality}|${item.locality}'); // create text- "Delhi"
            element.appendChild(Text); // add text inside the option - <option>Delhi</option>
            element.value = item._id; // add value inside the option - <option value="Delhi">Delhi</option
            Restaurent.appendChild(element); // add option inside the select <select><option>Delhi</option></select>
        })
    })
}

//Promise {<pending>}
//[[Prototype]]: Promise
//[[PromiseState]]: "fulfilled"
//[[PromiseResult]]: Array(6)
//0: {_id: 1, city_name: "Delhi", city: 1, country_name: "India"}
//1: {_id: 3, city_name: "Pune", city: 3, country_name: "India"}
//2: {_id: 2, city_name: "Mumbai", city: 2, country_name: "India"}
//3: {_id: 4, city_name: "Chandigarh", city: 4, country_name: "India"}
//4: {_id: 5, city_name: "Goa", city: 5, country_name: "India"}
//5: {_id: 6, city_name: "Manali", city: 6, country_name: "India"}
//length: 6
//[[Prototype]]: Array(0)

// map returns array
city.map((data) => {return data})

var a = [1, 2, 3, 4, 5, 6]
a.map((data) => {return data*2})

// >- map help to iterate over the date
// >- map always returns array

[2, 4, 6, 8, 10, 12]

var movies =[
    {
        name:'Avengers',
        rating:4.5,
        type:'movie',
    },
    {
        name:'The Lord of the Rings',
        rating:4.4,
        type:'movie',
        showtiming:{
            daytime:["9:00am","12:00am"],
            nightTime:["9:00am","12:00am"],
        }
    }
]

typeof(movies)
'object'
movies.name
undefined
movies[0].name
'Avengers'
movies[0].type
'movie'

movies[1].showtiming
{daytime: Array(2), nightTime: Array(2)}
movies[1].showtiming["daytime"]
(2) ['9:00am', '12:00am']
movies[1].showtiming.daytime[0]
'9:00am'