const accountId = 12345;
// accountId = 789;
// console.log(accountId);

let accountEmail = "architraghav2004@gmail.com";
// accountEmail="archit";
// console.log(accountEmail);

var accountPassword = 123;
// accountPassword=98765;
// console.log(accountPassword);

{
    // var accountPassword=90;
    // console.log(accountPassword);

}
// console.log(accountPassword);

// console.table([accountId, accountEmail, accountPassword])

// accountName="Archit";
// accountName="Raghav";
// console.log(accountName);


let name = "Archit"; //string
// let age = 21; //number
let isMarried = false; //boolean
let address = null; //object
let gender = undefined; //undefined

// console.table([
//     typeof (name),
//     typeof (age),
//     typeof (isMarried),
//     typeof (address),
//     typeof (gender)]);

// let score = "archit";
// console.log(typeof (score));

// let valueInNumber = Number(score);
// console.log(valueInNumber) //NaN
// console.log(typeof (valueInNumber)); //number

// console.log(typeof(Number("33abc")));

// let isLoggedIn="";
// console.log(Boolean(isLoggedIn));

let randomNumber = 21;
let randomString = String(randomNumber);
// console.table([randomNumber, typeof (randomNumber), randomString, typeof (randomString)])

// console.log(randomNumber + 19); //40
// console.log(randomString + 19); //2119

// let str1 = "archit";
// let str2 = " raghav";

// let str3 = str1 + str2;
// console.log(str3);

// console.log(+true);
// console.log(+"");

// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32

// datatype should be different in comparison
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(2 == "2"); //true (only checks value)
// console.log(2 === "2"); //false (checks both value and its datatype)

const Score = 45;
const scoreValue = 67.6;
const isLoggedIn = true;
const outsideTemp = null;

// console.table([typeof (Score), typeof (scoreValue), typeof (isLoggedIn), typeof (outsideTemp)]);

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(typeof anotherId);
// console.log(id === anotherId);
// console.log(id);

const bigNumber = 671289672567n;
// console.log(typeof bigNumber);

const Array = ["Archit", "Raghav", "Krishna"];

const obj = {
    name: "Archit",
    age: 21,
    course: "BTECH CSE"
};

// console.log(Array[2]);
// console.log(obj.name);

let myFunction = function () {
    console.log("Archit");
}
// myFunction();
// console.log(typeof Array);
// console.log(typeof obj);
// console.log(typeof myFunction);

let myName = "Archit";
let mySurname = myName;
mySurname = "Raghav";
// console.log(myName);
// console.log(mySurname);

let myCredentials = {
    name: "raghav",
    age: 21
}
let myData = myCredentials;
myData.name = "Archit";
// console.log(myData.name);
// console.log(myCredentials.name);

// Strings 
const fname = "archit";
const repoCount = 50;

// console.log(fname + repoCount);

// String Literals or String Interpolation using back ticks or basically placeholders ke beech mein kissi variables ko inject kar sakte hain
// console.log(`hello my name is ${fname} and my repoCount is ${repoCount}`);

const gameName = new String("Archit-Raghav");

// console.log(gameName[0]);
// console.log(gameName.__proto__); //object hota hai

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2)); // character return kardega specific index pe

// console.log(gameName.indexOf("t")); // index return kardega specific character ka

const newString = gameName.substring(0, 4); //last index is not included
// console.log(newString);

const anotherString = gameName.slice(-6, 4);
// console.log(anotherString);

const newStringOne = "  archit  ";
// console.log(newStringOne);
// console.log(newStringOne.length);
// console.log(newStringOne.trim().length);
// console.log(newStringOne.trimStart().length);

const url = "https://architraghav.com/home docs";
// console.log(url.replace(" ", "%20"));

// console.log(url.includes("archit")); // true
// console.log(url.includes("archikt")); // false
// console.log(gameName.split("-")); // returns array

const value = new Boolean(true);
// console.log(typeof value);

const balance = new Number(100);
// console.log(typeof balance);// object

// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); //datatype is string

const otherNumber = 123.677;
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Math);

// console.table([Math.abs(-4), Math.round(3.5), Math.ceil(4.8), Math.floor(4.7)]);

// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

let l = Math.floor(Math.random() * 255) + 1;
let m = Math.floor(Math.random() * 255) + 1;
let n = Math.floor(Math.random() * 255) + 1;
// console.log(`RGB color : (${l},${m},${n})`);

// Arrays

const myArr = [1, 2, 3, 4, 5, 1];
const myHeroes = ['shaktimaan', 'naagraj'];

// console.log(myArr);
// console.log(myArr.length);
// console.log(myArr[1]);

// Array Methods
// myArr.push(6); //Appends new elements to the end of an array.
// myArr.pop();// removes last element from the array.

// myArr.unshift(0); //Inserts new elements at the start of an array and very time consuming method.
// myArr.shift(); //Removes the first element from an array and returns it.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(1)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present

const newArr = myArr.join("-"); //Adds all the elements of an array into a string, separated by the specified separator string
// console.log(typeof newArr);
// console.log(newArr);

// console.log(myArr);

// slice, splice

// console.log("A", myArr);
const myArr1 = myArr.slice(1, 3); //Returns a copy of a section of an array
// console.log(myArr1);
// console.log("B", myArr);

const myArr2 = myArr.splice(1, 3); // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(myArr2);
// console.log("B", myArr);

const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// console.log(marvel_heroes.concat(dc_heroes)); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const all_Heroes = [...marvel_heroes, ...dc_heroes]; //spread operator
// console.log(all_Heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

let score1 = 10;
let score2 = 20;
let score3 = 30;
// console.log(Array.of(score1, score2, score3))

// let arr1=[1,2,3,4,5,6,6];
// let arr2=["Archit", "Raghav", "Kanha", "Raghuvanshi"];
// let arr3=[...arr1, ...arr2];
// console.log(arr3);
// console.log(arr1.concat(arr2));


// Objects

// singleton object constructor se banta hai
// Object Literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Archit",
    "fullname": "architraghav",
    [mySym]: "key10",
    age: 21,
    location: "Vasundhara",
    email: "archit.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}
// console.log(JsUser.fullname);
// console.log(JsUser["fullname"]);
// console.log(JsUser["name"]);
// console.log(JsUser.name);

JsUser.email = "architraghav@gmail.com";
// Object.freeze(JsUser);
// console.log(JsUser["email"]);
// JsUser.email = "architraghav@hotmail.com";
// console.log(JsUser);

// JsUser.greeting = function () {
//     console.log("Hello Js User");
// }
// JsUser.greeting();
// JsUser.greeting2 = function () {
//     console.log(`hello, my name is ${this.name}`);
// }
// JsUser.greeting2();

// const tinderUser=new Object();
// tinderUser.name="Archit";
// console.log(tinderUser);

const tinderUser = {};
tinderUser.id = "123Abc";
tinderUser.name = "Archit";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);
// console.table([tinderUser.name, tinderUser.id, tinderUser.isLoggedIn])

const regularUser = {
    email: "random@gmail.com",
    fullname: {
        userfullname: {
            fname: "Archit",
            lname: "Raghav"
        }
    }
};

// console.log(regularUser.fullname.userfullname.lname);

const obj1 = {
    1: "a", 2: "b"
}
const obj2 = {
    3: "a", 4: "b"
}

// const obj3 = { obj1, obj2 };
// const obj3 = { ...obj1, ...obj2 };
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Objects De-Structuring

const course = {
    courseName: "Js",
    price: 999,
    courseMentor: "Raj"
}

const { courseMentor: teacher } = course;
// console.log(courseMentor);
// console.log(teacher);

// JSON

// {
//     "courseName": "Js",
//     "price": 999,
//     "courseMentor": "Raj"
// }

// [
//     {},
//     {},
//     {}
// ]

// Functions

function sayMyName() {
    const name = "Archit";
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
// sayMyName();

function addTwoNumbers(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
    else {
        return "sorry can't add";
    }
}
// let sum = addTwoNumbers(3, 8.9);
// console.log("Sum = ", sum);

function loginUserMessage(username) {  //(username="Samurai")
    if (!username) {
        console.log("Pls enter the username: ");
        return
    } else {
        return `My username is ${username}.`
    }
}
// console.log(loginUserMessage("Archit"));

function calculateCartPrice(val1, val2, ...num1) { //rest operator
    return num1;
}
// console.log(calculateCartPrice(200, 300, 400)); //result will be displayed in an array

const user = {
    username: "Archit",
    price: 20
}
function handleUser(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleUser(user);
// handleUser({
//     username: "Raghav",
//     price: 399
// })

const myNewArray = [200, 300, 400];

function returSecondValue(myNewArray) {
    return myNewArray[1];
}
// console.log(returSecondValue(myNewArray));

// console.log(returSecondValue([200, 400, 56]));


// Scope

// var c = 300;

let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log(a); //Block Scope

}

// console.log(a); //Global Scope

function getArray(printArray) {
    for (let index = 0; index < printArray.length; index++) {
        console.log(printArray[index]);
    }
}
// getArray([1,2,3,4,5]);

function getValues(getObject) {
    return `${getObject.username}`
}
// console.log(getValues({
//     username: "Archit"
// }));

function one() {
    const username = "Archit";
    function two() {
        const age = 21;
        console.log(username);
    }
    console.log(age);
    two();
}
// one();

if (true) {
    const username = "Archit";
    if (username === "Archit") {
        const age = 21;
        // console.log(username + " " + age);
    }
    // console.log(age);

}
// console.log(username);

// addone(5);
function addone(num) {
    return num + 1;
}

// addtwo(3)
const addtwo = function (num) { //mini hoisting concept
    return num + 2;
}