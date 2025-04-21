//* constructor => special method for defining the properties and methods of objects

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function () {
        console.log(`I drive the ${this.model}.`)
    };
}

const car1 = new Car("Ford", "Mustang", 2025, "Red");
const car2 = new Car("Lamborghini", "Aventador", 2025, "Royal Black");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();