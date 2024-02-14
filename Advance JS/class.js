class Username{
    //only
    constructor(name) {
        this.name = name;
        console.log(name);
    }
    setUsername(){
        return `${this.name}`
    }
}

const Classfun = new Username("Gaurav");
console.log(Classfun.setUsername());