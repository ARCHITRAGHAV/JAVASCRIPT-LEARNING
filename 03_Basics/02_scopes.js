// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// The value of global scope can be access anywhere in the program or any local/block scope but the value of local/block scope can not be access globally. It's accessibility is only available in local/block scope itself.


function one() {
    const username = "archit"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "archit"
    if (username === "archit") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// *********************Interesting**************

console.log(addOne(5))
function addOne(num) {
    return num + 1
}

console.log(addTwo(5)); // can not access before initialisation
const addTwo = function (num) {
    return num + 2
}