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