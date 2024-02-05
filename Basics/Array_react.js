const marvel_heros = ["Thor","Ironman","Hulk","Spiderman"]
const dc_heros = ["Joker","Flash","Superman","Batman"]

//join two string
const allheros = marvel_heros.concat(dc_heros)
console.log(allheros)

//spread operator which act as concat
const allnewheros = [...marvel_heros,...dc_heros]
console.log(allnewheros)

const real_array = [1,5,8,9,[4,5,6],8,[54,65,87,[77,88,99,44,55,66]]]

//flat() is represent nested array into one array
const nest_array = real_array.flat(Infinity)
console.log(real_array)

