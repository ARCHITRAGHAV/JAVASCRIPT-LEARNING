const user = {
    username: "archit",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} -> empty object in nodeJs environment


// this keyword is used to refer current context of program

// function tea() {
//     let username="archit"
//     console.log(this.username);//undefined
// }

// tea()

// const tea = function () {
//     let username = "archit"
//     console.log(this.username);
// }
// tea() // undefined

// Arrow Functions

const tea = () => {
    let username = "archit"
    console.log(this);
}
// tea()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // Explicit Return

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2 // Implicit Return -> No need write return for one line statement in an arrow function

// const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => ({
    username: "archit"
})

console.log(addTwo(3, 4));

// {} -> return likhna hai
// () -> return nahi likhna hai