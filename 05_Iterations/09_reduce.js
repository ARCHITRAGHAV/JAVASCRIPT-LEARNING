const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc:${acc}, val:${currval}`)
//     return acc + currval
// }, 0) // Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// console.log(myTotal);

const myTotal = myNums.reduce((acc, currval) => acc * currval, 1)
console.log(myTotal);