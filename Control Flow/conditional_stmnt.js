//If we work on project then it need some block of code at specific time

let num = 1;
if (num > 0)
{
    console.log("hello world")
}

//shortcut of writing if statement
let balance = 1000
if (balance < 500){
    console.log("Less than 500")
}
else if(balance <= 1000)
{
    console.log("Balance is less than or equal to 1000")
}
else{
    console.log("Balance is More than 1000")
}

// If else else if example
const userLogedIn = true
const debitCredit = true

if (userLogedIn && debitCredit == true)
{
    console.log("Yess you are in!!")
}
else if(userLogedIn || debitCredit == true){
    console.log("Please enter your debit / credit card")
}

else {
    console.log("Please log in and enter your cards detail")
}

//Switch Example
const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("If no condition matched then default executed");
        break;
}