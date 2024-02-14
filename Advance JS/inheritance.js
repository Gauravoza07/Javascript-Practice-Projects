//Parent Class
class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

//Child Class
class Teacher extends User{
    constructor(username,email,password)
    {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourses()
    {
        console.log(`A new course is added ${this.username}`);
    }
}

//creating object of child class
const obj = new Teacher("Gaurav","abc.com","123456")
obj.addCourses();
