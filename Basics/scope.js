function one()
{
    username = "Gaurav"
    //child function can access all the variable of parent function
    function two()
    {
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website) //Here we are using website which present in one function 
    two()
}

one()

