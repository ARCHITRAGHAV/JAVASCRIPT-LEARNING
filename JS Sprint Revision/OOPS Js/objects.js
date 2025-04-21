const person = {
    firstName: "Archit",
    lastName: "Raghav",
    age: 21,
    isEmployed: false,
    sayHello: () => {
        console.log("Hi, I am Archit");
    }
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {
        console.log("Hi, I am Patrick");
    },
    eat: () => {
        console.log("I am eating banana.");

    }
}

console.log(person.firstName);
console.log(person2.lastName);

person.sayHello();
person2.sayHello();
 