//* super = keyword is used in classes to call the constructor or
//* access the properties and methods of a parent (superclass)
//* this = this object
//* super = the parent


class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at the speed of ${speed}mph.`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`The ${this.name} runs`);
        super.move(this.runSpeed)
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
console.log(rabbit.runSpeed);
console.log(rabbit.name);
rabbit.run();