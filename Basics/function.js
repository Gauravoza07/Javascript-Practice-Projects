//Normal Function Declaration and Using
function sayMyName(){
    var name =  "Gaurav";
    return name;
}

sayMyName();

//Parameterised Function
function add(num1, num2) {
    var num1,num2;
    var addition = num1 + num2;
    return addition;
}

add(24, 32);

//function with default value
//if the user don't enter values in function then value is by Default "Sam" other wise what the user enter is override it
function Login(name = "Sam")
{
    return `${name} just logged in`
}

// Login()
Login("Rahul")