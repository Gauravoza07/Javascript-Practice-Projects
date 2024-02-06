//for of loop are array specific loop***************

const myArr = [1,2,4,5,6]

for (const i of myArr) {
    console.log(i)
}

const greet = "HELLO WORLD"
for (const i of greet) {
    console.log(`Each char is  : ${i}`)
}

//Maps : no duplicate values only unique value store in map 
const map = new Map()
map.set("India", "IN")
map.set("America", "USA")
map.set("London", "UK")

console.log(map);//simply printing map

for (const [key , values] of map) {
    console.log(key , `:-`,values)
}

//Printing Object using for in loop using For in loop***********
const myObj = {
    js : "Javascript",
    cpp : "C++",
    java : "Java",
    swift : "Swift"
}

for (const key in myObj) {
    console.log(key)//Keys of object
    console.log(myObj[key])//Values of object
    console.log(`${key} is for ${myObj[key]}`)//values with key
}

//For each loop***********
const coding = ["Js","C++","Java","Swift","Ruby"]
    
coding.forEach(element => {
    console.log(element)
});

//For ecah using to iterate object
const myCoding = [
    {
    languageName : "Javascript",
    languageExtension : "js"
    },
    {
    languageName : "Python",
    languageExtension : "py"
    },
    {
    languageName : "Ruby",
    languageExtension : "rb"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageExtension)
});