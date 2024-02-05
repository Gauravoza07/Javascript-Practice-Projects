//declaration of singleton object
const tinder = new Object()
console.log(tinder)

//declaration of non singleton object
const tinderUser = {}
console.log(tinderUser)

//Nested Object
const regUser = {
    email: "Someone@hotmail.com",
    fullname : {
        firstname : "Gaurav",
        lastname : "Oza"
    },
    contact : "phone"
}

console.log(regUser.fullname.firstname)

// concat two string
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const concatObj= Object.assign(obj1, obj2)
console.log(concatObj)

//using spread operator
const obj3 = {...obj1,...obj2}
console.log(obj3)