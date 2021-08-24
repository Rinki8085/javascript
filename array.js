//collection of homogenius 

var a = ['a', 'b', 'c', 'dplp', 'ess']
var b = [1, 34, 4534, 1232]
var c = [true, false, true, false]

//collection of hetrogenius 
var d = [1, true, 'uoo', 'opi', 90, true]

//array is a collection of hetrogenius as well as homogenius array
var city = ["sultanpur", "payagipur", "allahabad", "amerstden"]

city.length
4
city[0]
"sultanpur"
city[city.length]
undefined
city[city.length-1]
"amerstden"
city
(4) ["sultanpur", "payagipur", "allahabad", "amerstden"]
city.push('london') // add the value in the end of the array
5
city
(5) ["sultanpur", "payagipur", "allahabad", "amerstden", "london"]
city.pop() // remove the value from the end of the array 
"london"
city
(4) ["sultanpur", "payagipur", "allahabad", "amerstden"]
city.pop(2) // whatever position u have given, dosen't matter.
"amerstden"
city.shift() // add the value to the beginning of the array
"sultanpur"
city.unshift('sultanpur') // always remove the first value of array.
3
city
(3) ["sultanpur", "payagipur", "allahabad"]
var city = ['delhi', 'odisha', 'west bengal', 'thaialnd']
city.slice(1) // it removes the value according to the given index
(3) ["odisha", "west bengal", "thaialnd"]
city.slice(2,3) // it gives the particular value
["west bengal"]
city
(4) ["delhi", "odisha", "west bengal", "thaialnd"]

city.splice(start, deleteCount, array)

var city = ["delhi", "odisha", "west bengal", "thaialnd"]
city.splice(2,0,'Nice', 'helesink') 

var city = ["delhi", "odisha", "west bengal", "thaialnd"]
city.splice(2,0,'Nice', 'helesink')  // for adding value at a particular location
[]
city
(6) ["delhi", "odisha", "Nice", "helesink", "west bengal", "thaialnd"]
city.splice(3,1)  
["helesink"]
city
(5) ["delhi", "odisha", "Nice", "west bengal", "thaialnd"]
city.splice(3,3)
(2) ["west bengal", "thaialnd"]
city
(3) ["delhi", "odisha", "Nice"]

var a = ['a', 'b', 'c']
var b = [1,2,3,4]

a+b
"a,b,c1,2,3,4"

var a = ['a', 'b', 'c']
var b = [1,2,3,4]

a+b
"a,b,c1,2,3,4"

a.concat(b) // concate the two array
(7) ["a", "b", "c", 1, 2, 3, 4]

// sort function do the set the array in alphabetical order but first it do with the number then word start with capital letter and after that remaining.
var city = ["delhi", "odisha", "Nice", "helesink", "west bengal", "thaialnd"]
city.sort() 
(6) ["Nice", "delhi", "helesink", "odisha", "thaialnd", "west bengal"]
city.reverse() // reverse of sort
(6) ["west bengal", "thaialnd", "odisha", "helesink", "delhi", "Nice"]

var city = [1,5, "delhi", 4, "odisha", "Nice",3, "helesink", true,  "west bengal", false,  "thaialnd"]
city.sort()
(12) [1, 3, 4, 5, "Nice", "delhi", false, "helesink", "odisha", "thaialnd", true, "west bengal"]
var city = [1,5, "delhi", 4, "Odisha", "Nice",3, "helesink", true,  "Westbengal", false,  "Thaialnd"]
    
city.sort()
(12) [1, 3, 4, 5, "Nice", "Odisha", "Thaialnd", "Westbengal", "delhi", false, "helesink", true]

var city = ["delhi", "odisha",['Red', ['Bmw', 'Audi', 'Mer'], 'Yelow', 'Green'], "Nice", "helesink", "west bengal", "thaialnd"]
city[2]
(4) ["Red", Array(3), "Yelow", "Green"]
city[2][1]
(3) ["Bmw", "Audi", "Mer"]
city[2][1][1]
"Audi"