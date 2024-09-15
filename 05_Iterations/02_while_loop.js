// while loop

let index = 0;
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ["flash", "batman", "superman"]

let arr = 0;
while (arr < myArray.length) {
    // console.log(myArray[arr]);
    arr++;
}

// do while loop -> it will check the condition at the last. Therefore, it will always execute once whether the condition is matched or not.

let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);