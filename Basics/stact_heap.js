//stack is only used in primitive datatype

let myname = "Gaurav"
let anothername = myname
myname = "Gaurav oza"

console.log(myname)
console.log(anothername)

//stack will create copy of a variable and store it another stack

//heap is used in non - primitive datatype

const userone = {
    email: "Gaurav@gmail.com",
    number: 8755669921
}

const usertwo = userone

usertwo.email = "Shiva@gmail.com"

console.log(userone.email)
console.log(usertwo.email)

//In non primitive datatype there is a reference of every value
