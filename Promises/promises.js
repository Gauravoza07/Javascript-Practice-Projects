const promise1 = new Promise(function(resolve,reject){
    //Do an async task
    //DB call
    setTimeout(function()
    {
        console.log('Async task is complete');
    },1000)

})


promise1.then(function(){
    console.log("Promise consumed");
})

//get  value by resolve
const promise3 = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        resolve({username:"Chai",email:"abcd@example.com"})
    }, 1000)
})

promise3.then(function(user){
    console.log(user);
})

//using reject function,finally,errors etc

const promise4 = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error = false;
        if(!error)
        {
            resolve({username : "Rohit", password : "1234"});
        }
        else{
            reject('Error : Something went wrong');
        }
        
    }, 1000);
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{console.log("Either promise is resolved or rejected")})

//Promise 5

const promise5 = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error)
        {
            resolve({username:"Virat",password:"Benstokes"})
        }
        else{
            reject('Error occured');
        }
    }, 1000);
});

//use async function to execute promise
async function consumePromise(){
    const response = await promise5
    console.log(response)
}

consumePromise();

//fetch api from database
async function getAllUser(){
    try {
        const response = await fetch('https://randomuser.me/api/')
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log("E",error);
    }
}

getAllUser()

