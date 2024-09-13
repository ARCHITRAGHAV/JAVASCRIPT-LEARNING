// Functions

function sayMyName() {
    console.log("Archit");
}

// sayMyName(); // sayMyName -> reference of the function, sayMyName() -> execution of function

// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2);
// }

// const result = addTwoNumbers(3, 5)
// console.log("Result:" ,result);

// Jab aap kissi function ko define karte ho tab uske parenthesis mein aap jo input lete hai usse parameter bolte hain aur jab aap function ko call karte ho tab aap usme jo valueS pass karte ho toh usse arguments kehte hain

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result
    return number1 + number2;;
    console.log("Archit"); // by default JavaScript mein return ho ke baad kuch bhi kaam nahi hota function mein woh basically unreachable code hota HAI
}

const result = addTwoNumbers(2, 3);
// console.log("result:", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("archit"));

// console.log(loginUserMessage()); //undefined aata hai jab hum kuch define nahi karte

function calculateCartPrice(val1, val2, ...num1) {
    return num1
} // ... -> rest operator is used here.

// console.log(calculateCartPrice(200, 300, 500, 2000));

// Function with Objects

const obj = {
    username: "archit",
    age: 20
}

function objectFunction(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}.`);
}

// objectFunction(obj);
objectFunction({
    username: "raghav",
    age: 21
})

// Function with Arrays

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getarray) {
    console.log(getarray[1]);
}

// returnSecondValue(myNewArray);
returnSecondValue([100, 500, 400, 800])