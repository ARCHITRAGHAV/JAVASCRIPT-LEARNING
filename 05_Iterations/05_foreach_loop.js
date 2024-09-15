const coding = ["js", "cpp", "java", "python", "ruby"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item, index) => {
    if (index == 1) {
        console.log(item.languageName);
    }
})