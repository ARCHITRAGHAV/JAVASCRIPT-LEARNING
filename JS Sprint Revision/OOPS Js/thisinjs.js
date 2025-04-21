const person1 = {
    name: "Archit Raghav",
    favFood: "Rajma Chawal",
    sayHi: function () {
        console.log(`hi, I am ${this.name}`);
    },
    eat: function () {
        console.log(`${this.name} is eating ${this.favFood}`);
    }
}

const person2 = {
    name: "Mark",
    favFood: "Pizza",
    sayHi: function () {
        console.log(`hi, I am ${this.name}`);
    },
    eat: function () {
        console.log(`${this.name} is eating ${this.favFood}`);
    }
}

// person1.name = this.name (inside the object)

person1.eat();
person2.eat();

console.log(this);