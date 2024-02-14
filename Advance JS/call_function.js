const playerName = {
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
}

const player1 = {
    firstName : "Virat",
    lastName : "Kohli"
}

const player2 = {
    firstName : "Rohit",
    lastName : "Sharma"
}

playerName.fullName.call(player1);

const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName  + " " + city + "," + country;
    }
}

const person1 = {
    firstName : "Rohit",
    lastName : "Sharma"
}

person.fullName.call(person1,"Mumbai","India");
