const accountId = 12254
let email = "gaurav@gmail.com"
var password = "Gaurav1234" // var is not appropriate to use in Javascript code, Because var don't understand the block of scope or functional scope
city = "Ahmedabad"
let state;// the variable type is undefined if not assign value to any variable

// accountId = 2 //not allowed only 1 time declare const variable

console.log(accountId)
console.log(city) // so many time we have to write console log to decalre variable so we use "console.table"

console.table([accountId, email, password, city, state]) // This function will represent your data in tabular form