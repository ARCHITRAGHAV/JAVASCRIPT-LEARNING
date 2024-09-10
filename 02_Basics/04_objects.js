// const tinderUser=new Object()// singleton object

const tinderUser = {}// non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "raj"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "random@gmail.com",
    fullname: {
        userfullname: {
            firstname: "archit",
            lastname: "raghav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a", 2: "b"
}
const obj2 = {
    3: "a", 4: "b"
}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)// {empty object} yaha par target object hai aur baki saare objects source objects hai jiska sara data empty object mein copy ho jaata hai. Agar hum empty object nahi denge then, saara data pehle waale object mein copy ho jaata hai

// console.log(obj3);
// console.log(obj1);

//best method to combine objects

const obj3 = { ...obj1, ...obj2 }// spread operator
// console.log(obj3);

// Array of objects

const users = [
    {
        id: 1,
        email: "f@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    },
]

// console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));//Returns the names of the enumerable string properties and methods of an object.

console.log(Object.values(tinderUser));//Returns an array of values of the enumerable properties of an object

console.log(Object.entries(tinderUser));//Returns an array of key/values of the enumerable properties of an object

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//Determines whether an object has a property with the specified name.


// Object de-structure

const course = {
    coursename: "JavaScript",
    price: "free",
    courseinstructor: "random"
}

// course.courseinstructor

const { courseinstructor: coach } = course

// console.log(courseinstructor);
console.log(coach);

//Note: api data can be in both object and array formats

// object format
// {
//     "name":"archit",
//     "coursename":"Js",
//     "price":"free"
// } 

// array format
// [
//     {},
//     {},
//     {}
// ]