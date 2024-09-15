// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    // console.log(greet);
}

// Maps

const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")


// console.log(map);

for (let [key, value] of map) {
    // console.log(key, value);
}

// const myObject = {
//     game1: "NFS",
//     game2: "SPD"
// }
// for (let [key, value] of myObject) {
//     console.log(key, value);
// }

// Objects are not iterable in this way