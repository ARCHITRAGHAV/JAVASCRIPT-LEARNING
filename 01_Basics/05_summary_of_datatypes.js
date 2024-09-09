// Primitive Data Types
// Call by Value

// 7 types : String, Number, Boolean, null, undefined, Symbol => to make the value unique, BigInt

const score = 45;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

// console.log(typeof id)
// console.log(id === anotherId)

const bigNumber = 562345256436334n;
// console.log(typeof bigNumber)

// Js is Dynamically Typed

// Reference Type(Non-Primitive)
// Array, Objects, Functions

const heroes = ["Shaktimaan", "Doga", "Naagraj"];

let obj = {
    name: "Archit",
    age: 20
};

// let myFunction = function () {
//     console.log("Archit");
// } //datatype=>object function
// myFunction();
// console.log(typeof heroes);

//*********************************************************************************************/

//Stack (Primitive) => variable ka copy milta hai declare karne par.

//  Heap (Non-Primitive) => yaha datatypes ko milti hai memory address ki reference toh joh bhi changes hote hain inn datatypes mein woh original datatypes mein bhi ho jaate hain.

// ****Stack Memory => Primitive Data Types****

let myName = "Archit";
let mySurname = myName;
mySurname = "Raghav";
// console.log(myName);
// console.log(mySurname);

// ****Heap Memory => Non-Primitive Data Types****

let myCredentials = {
    name: "archit",
    age: 20
};
let myData = myCredentials;
myData.name = "kannu";
console.log(myData.name);
console.log(myCredentials.name);