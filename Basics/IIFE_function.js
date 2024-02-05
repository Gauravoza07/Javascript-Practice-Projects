//Immediately Invoked Function Expression
//IIFE is used to invoke function immediately
(function chai()
{
    console.log(`DB connected`);
})();

//IIFE used using this => keyword
(() => {
    console.log(`DB connected too`);
})()

//IIFE in parameterised function
((name) => {
    console.log(`DB connected too ${name}`);
})("Gaurav")




