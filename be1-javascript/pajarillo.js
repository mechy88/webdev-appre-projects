class Entity{
    constructor(name, date){
        this.Name = name;
        this.DateCreated = date;
    }

    Walk(){
        console.log(`${this.Name} is walking`);
    }

    Birthdate(){
        console.log(`${this.Name} is walking`);
    }
}

class Robot extends Entity{
    constructor(name, date){
        super(name, date);
        const legs = 2;
    }

    Walk(){
        console.log(`${this.Name} is walking with legs--brrrrt`);
    }
}

class Cat extends Entity{
    constructor(name, date){
        super(name, date);
        const legs = 4;
    }

    Walk(){
        console.log(`${this.Name} is walking with legs--meow`);
    }

    Growl(){
        console.log("“Purrrr~^^");
    }
}

const date = new Date();
bday = date.getDay();

let roby = new Robot("Roby", bday);
let tom = new Cat("Tommy", bday);
roby.Walk();
tom.Walk();
roby.Birthdate();
tom.Birthdate();
tom.Growl();