//If user enter's number but we can't know how many and how much
//so we use rest operator(...)
//rest & spread operator are same but both are differentiate by it's usage 
function calculatePrice(...num1)
{
    return num1
}

calculatePrice(500,586,981,666)

//this function having 2 value with one rest variable which rest of the value after first 2 values
function calculatePrice(val1,val2, ...num1)
{
    return num1
}

calculatePrice(500,586,981,666)

//Object in function

function handleObject(anyobject){
    console.log(`Username is : ${user.name} Price is : ${user.price}`)
}

handleObject(
    user = {
        name : "Romil",
        price : 28000
    }
)

//return array using function
const newArray = [200,500,600,800]

function printArray(getArray)
{
    return getArray
}

console.log(printArray(newArray))

//print array using array as parameter 
console.log(printArray(
    Array2 = [200,300,400]
))