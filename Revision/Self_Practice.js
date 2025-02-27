// Strings

// const myName = new String("Archit Raghav");
// console.log(myName);
// console.log(typeof myName);

// const Name = "Archit";

// const name = "Archit";
// const repo = 50;
// console.log(`${name}'s score is ${repo} out of ${repo}`);

// const myFullName = "  Archit Raghav  ";
// console.log(myFullName.length);
// console.log(myFullName.toUpperCase());
// console.log(myFullName.toLowerCase());
// console.log(myFullName[2]);
// console.log(myFullName.charAt(5));
// console.log(myFullName.indexOf('A'));
// console.log(myFullName.trim());
// console.log(typeof myFullName.trimStart() + " " + myFullName.trimStart());
// console.log(myFullName.substring(2, 6));
// console.log(myFullName.slice(2, 5));
// console.log(myFullName.includes("Raghav"));
// console.log(myFullName.replace("Raghav", "Raghuvanshi"));
// console.log(myFullName.split(" "));
// console.log(myFullName);

// Numbers

// const numbers=new Number(1000);
// console.log(typeof numbers);

// console.log(typeof numbers.toFixed(5))
// console.log(numbers.toPrecision(3));
// console.log(numbers.toLocaleString("en-IN"));

// let l = Math.floor(Math.random() * 255) + 1;
// let m = Math.floor(Math.random() * 255) + 1;
// let n = Math.floor(Math.random() * 255) + 1;
// console.log(`RGB is ${l},${m},${n}`);

// Arrays

// const myArr = new Array(1, 2, 3, 4, "Archit");
// console.log(myArr);

// const myProgLang = ["Java", "JavaScript", "C++", "Python", "C"];

// for (let index = 0; index < myProgLang.length; index++) {
//     console.log(myProgLang[index]);
// }

// console.log(myProgLang[2]);

// myProgLang.push("Ruby");
// myProgLang.unshift("Dart");
// myProgLang.pop();
// myProgLang.shift();

// console.log(myProgLang.includes("R"));
// console.log(myProgLang.indexOf("C"));

// const newArr=myProgLang.join("-");
// console.log(newArr);

// console.log(myProgLang.length);

// console.log(myProgLang.slice(1,-1));

// const newArr=myProgLang;
// console.log(newArr);
// newArr.push("C#");
// console.log(myProgLang);
// console.log(newArr);
// console.log(newArr);

// newArr.splice(1,2,"Ruby")
// console.log(newArr);
// newArr.splice(2,4); 
// console.log(myProgLang);
// console.log(newArr);

// const progLang=new Array("HTML","CSS");
// console.log(progLang);
// console.log(myProgLang.concat(progLang));
// const mix=[...myProgLang,...progLang];
// console.log(mix);

// console.log(Array.from("Archit"));
// console.log(Array.isArray(["archit"]));

// Objects

// const jsUser = {
//     name: "Archit",
//     age: 21,
//     isLogged: true
// }
// console.log(jsUser["name"]);
// console.log(jsUser.age);

// jsUser.name = "Archit Raghav";
// Object.freeze(jsUser);
// jsUser.age = 20;

// jsUser.greeting = function () {
//     console.log(`hello, I am ${this.name}`);
// }
// jsUser.greeting();
// console.log(jsUser);

// const pyUser = {
//     name: "Krish",
//     age: 29,
//     isLogged: false
// }

// console.log(Object.assign({}, jsUser, pyUser));

// console.table([Object.keys(pyUser), Object.values(pyUser), Object.entries(pyUser)])


// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let elem of myArr) {
//     elem = elem + 10;
//     console.log(elem);
// }

// for (let elem in myArr) {
//     myArr[elem] = myArr[elem] + 10;
//     console.log(myArr[elem]);
// }

// myArr.forEach((item) => {
//     item = item + 10;
//     console.log(item);
// })

// console.log(myArr.map((item) => item + 10));

// const obj = {
//     name: "Archit",
//     age: 21,
//     course: "BTech CSE with specialisation in Data Science"
// }

// for (const key in obj) {
//     console.log(key + " : " + obj[key]);
// }

// myArr.forEach((item, index) => {
//     if (index > 4 && (item % 2 === 0)) {
//         console.log(item);
//     }
// })

// const sum = myArr.reduce((acc, cv) => {
//     return acc + cv;
// }, 0)
// console.log(sum);