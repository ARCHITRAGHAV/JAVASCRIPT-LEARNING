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
let age = 21; //number
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