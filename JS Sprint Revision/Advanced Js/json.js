//* JSON = (JavaScript Object Notation) data-interchange format |
//* Used for exchanging data between a server and a web application
//* JSON files {key:value) OR [value1, value2, value3]
//* JSON. stringify() = converts a JS object to a JSON string.
//* JSON. parse() = converts a JSON string to a JS object

const jsonNames = `[
    "Archit",
    "Raghav",
    "Sandy",
    "Trex"
]`

const jsonPerson = `{
    "name": "Archit",
    "age": 21,
    "isEmployed": true,
    "hobbies": [
        "watching movies",
        "listening music",
        "experimenting with tech things",
        "internet surfing"
    ]
}`

const jsonPeople = `[
    {
        "name": "Archit",
        "age": 21,
        "isEmployed": true
    },
    {
        "name": "Max",
        "age": 25,
        "isEmployed": false
    },
    {
        "name": "Chris",
        "age": 28,
        "isEmployed": true
    },
    {
        "name": "Taylor",
        "age": 30,
        "isEmployed": true
    }
]`

// const jsonString = JSON.stringify(people);

// const parsedData = JSON.parse(jsonPeople)

// console.log(jsonPeople);

// console.log(typeof jsonPeople);

// console.log(parsedData);

// console.log(typeof parsedData);

// console.log(jsonString);

// console.log(typeof jsonString);

// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value.name)))
//     .catch(error => console.log(error));

async function fetchData() {
    try {
        const response = await fetch("people.json")
        const data = await (response.json());
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

fetchData();