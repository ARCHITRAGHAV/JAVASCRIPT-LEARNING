//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ['shaktimaan', 'naagraj'];

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[1]);

//array methods

// myArr.push(6)//append value at last index
// myArr.pop()//deletes value from last index

// myArr.unshift(9)//append value at first index
// myArr.shift()//deletes value from first index

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19)); //returns index of asked value and always return -1 if asked value is not present in an array

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//slice,splice

console.log("A ", myArr);

const myA1 = myArr.slice(1, 3);//slice method start index se lekar end-1 index tak array return karta hai bina koi change kare original array mein
console.log(myA1);
console.log("B ", myArr);

const myA2 = myArr.splice(1, 3);//aur splice method start index se lekar end index tak array return karta hai aur original array mein woh saari values start se lekar end tak delete kar deta hai
console.log(myA2);
console.log("C ", myArr);