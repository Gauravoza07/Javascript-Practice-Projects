const course = {
    name : "Javascript",
    price : 999,
    instructor : "Gaurav"
}

//use same object element many times in code using this destructing type 
//Destructing the object
const {instructor : ins} = course
console.log(ins)

