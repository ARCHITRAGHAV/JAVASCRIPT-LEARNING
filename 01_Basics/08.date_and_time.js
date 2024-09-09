//Dates

let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(typeof myDate);

// let myCreatedDate=new Date(2024,7,9);
// console.log(myCreatedDate.toLocaleDateString());

// let myCreatedDate = new Date(2024, 9, 9, 0, 2, 45)
// console.log(myCreatedDate.toLocaleString());

let myNewDate = new Date("09-09-2024")
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDay()); 