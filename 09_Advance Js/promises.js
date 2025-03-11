const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log("Promise Consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Async 2 is resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Archit", email: "archit@raghav.com" });
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Archit", password: "123" });
        } else {
            reject("ERROR: Something went wrong!");
        }
    }, 1000)
})

promiseFour.then((user) => {
    return user.username;
})
    .then((username) => {
        console.log(username)
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally done");
    })

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR: JS went wrong!");
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/architraghav');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}
// getAllUsers();

fetch('https://api.github.com/users/architraghav').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
