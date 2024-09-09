const name = "Archit"
const repoCount = 50

console.log(name + repoCount + "value");//not a good method to write a string instead of this write in this way that is given below.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Archit-Raghav");// datatype is object if you are declaring string with a new keyword.

//String Methods

console.log(gameName[0]);

console.log(gameName.__proto__);//object but it is not empty it has many methods and functions of strings

console.log(gameName.length);//length of the string

console.log(gameName.toUpperCase());//converts string into an uppercase string

console.log(gameName.charAt(1));// character at a particular index number of the string

console.log(gameName.indexOf('t'));//index number of a particular character of a string

const newString = gameName.substring(0, 6)
console.log(newString);//ignores the negative index value

const anotherString = gameName.slice(-13, -13)
console.log(anotherString);

const newStringOne = "    archit  "
console.log(newStringOne.trim());//trims the white spaces from start and end

const url = "https://architraghav.com/archit%20raghav"
console.log(url.replace('%20', '-'))//replaces the part of the string or string with someother string 

console.log(url.includes("sundari"));

console.log(gameName.split('-'));//returns array