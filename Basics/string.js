const name = "Gaurav"
const repoCount = 50

console.log(name + repoCount + " Value") // This way to represent a data is not appropriate

console.log(`Hello my name is ${name} and my repository count is ${repoCount}`) // This is modern way to represent the data 

const Name2 = new String('Crime Master GO GO')// this way of declaring string is used when objects are used
console.log(Name2[0])

console.log(Name2.length)
console.log(Name2.toLowerCase())
console.log(Name2.toUpperCase())
console.log(Name2.charAt(2))
console.log(Name2.indexOf('r'))

const str1 = Name2.substring(0,4)// write a specifuc string
console.log(str1)

const str2 = Name2.slice(-18,4)// it write string also in reverse order
console.log(str2)

const str3 = "      Gaurav   "
console.log(str3.trim())//it trim the white space from string

const url = "http://gaurav.com/gaurav%20oza"
console.log(url.replace('%20',"-"))//it replace from any string with another string
console.log(url.includes('jethalal'))//check string value is present or not
console.log(url.includes('gaurav'))//check string value is present or not

const str4 = "Gaurav-is-a-good-boy."
console.log(str4.split('-'))