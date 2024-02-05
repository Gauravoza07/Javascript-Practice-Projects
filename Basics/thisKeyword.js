const user = {
    username : "Gaurav",
    price : 999,

    welcomeMessage: function()
    {
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

// const chai = () => {
//     let username  = "Gaurav"
//     comsole.log(this.username);
// }

// chai()

//Arrow function ->
const addTwo = (num1,num2)=>{
    return num1+num2
}

console.log(addTwo(25,45))

//Implicit Function
const add = (num1,num2)=> num1+num2
console.log(add(25,45))