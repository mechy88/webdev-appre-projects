class Entity {
    constructor(nameChoice,dateCreated) {
        this.nameChoice = nameChoice;
        this.dateCreated = dateCreated;
    }

    walk() {
        console.log(this.nameChoice + " is walking.");
    }

    birthDate() {
        console.log(this.nameChoice + " was created on " + this.dateCreated);
    }
}

class Robot extends Entity {
    legs = 2;

    walk() {
        console.log(this.nameChoice + " is walking with " + this.legs + "--brrrrt");
    }
}

class Cat extends Entity {
    legs = 4;

    walk() {
        console.log(this.nameChoice + " is walking with " + this.legs + "--meow");
    }

    growl() {
        console.log("Purrrr~^^");
    }
}

function main() {
    const myCat = new Cat("Dokja","January 1, 2000");
    const myRobot = new Robot("Ribi","February 2, 2000");

    myCat.walk();
    myRobot.walk();
    myCat.birthDate();
    myRobot.birthDate();
    myCat.growl();
}

main();
