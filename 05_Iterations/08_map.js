const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((num) => num + 10)

// console.log(newNums);

// const newNums = myNums.map((num) => { return num + 10 }) // Calls a defined callback function on each element of an array, and returns an array that contains the results.

// console.log(newNums);

// Method Chaining -> combining methods

const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(newNums);