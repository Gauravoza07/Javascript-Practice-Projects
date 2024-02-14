class User {
    constructor(username,email,password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    } 

    //constructor calls when object declare
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}
const callingfun = new User("Gaurav","email.com","123456")
console.log(callingfun.encryptPassword());