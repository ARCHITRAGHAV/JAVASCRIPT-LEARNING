// singleton => jab constructor se object banta hai tab woh singleton object matlab single object

// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "archit",
    "fullname": "Archit Raghav",
    [mySym]: "mykey1",
    age: 20,
    location: "ghaziabad",
    email: "architraghav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["fullname"]);
// console.log(typeof JsUser[mySym]);//datatype is showwing string
// console.log(JsUser["email"]);

JsUser.email = "archit@gmail.com"//to update any value

// Object.freeze(JsUser);//to lock the values of an object so, that it can not be changed further

// console.log(JsUser)

JsUser.greeting = function () {
    console.log("hi");
}
JsUser.greeting()// Do not write console.log() here because in above function we had not return any value. So, if you will write the console.log() then, it return undefined value, instead of this just call the function

JsUser.greetingTwo = function () {
    console.log(`Hi, my name is ${this.fullname}.`);
}// this keyword helps to access the properties of object inside the object function
JsUser.greetingTwo()