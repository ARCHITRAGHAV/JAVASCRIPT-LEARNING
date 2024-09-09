//array2

const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes);

const heroes = [...marvel_heroes, ...dc_heroes]//spread operator
// console.log(heroes);

const another_array = [1, 2, 3, [4, 5, 6], [7, [8, 9]], 10];
const real_another_array = another_array.flat(Infinity);// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(real_another_array)

// console.log(Array.isArray("archit"));
// console.log(Array.from("archit"));// Creates an array from an iterable object
console.log(Array.from({ name: "archit" }));//interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));// Returns a new array from a set of elements