//Object literals
const jsuser = {
    Name : "Gaurav",
    Age : 18,
    Location : "Ahmedabad",
    Email : "gaurav@google.com" 
}

console.log(jsuser);
console.log(jsuser.Name);
console.log(jsuser["Email"]);

jsuser.greeting = function(){
    console.log(`Hello JS User`);
    console.log(`Hello JS User, ${this.Name}`);
}

console.log(jsuser.greeting());