
    //bind helps to use method from another object 
    const obj1 = {
        firstName:"Sobhit",
        lastName:"Ahuja",
        fullName : function(){
            return this.firstName + " " + this.lastName;
        }
    }
    const obj2 = {
        firstName : "Suraj",
        lastName : "Gupta",
    }

//taking value of object 2 in object 1 function
    let fullName = obj1.fullName.bind(obj2);
console.log(fullName());