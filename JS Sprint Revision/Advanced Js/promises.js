function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            if (dogWalked) {
                resolve("You walk the dog 🐶.");
            } else {
                reject("Dog is not walked.")
            }
        }, 1500)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen 🧹.");
        }, 2500)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You take out the trash ♻ .");
        }, 500);
    })
}

walkDog().then((value) => {
    console.log(value);
    return cleanKitchen();
}).then((value) => {
    console.log(value);
    return takeOutTrash();
}).then((value) => {
    console.log(value);
    console.log("All tasks are completed.");
}).catch((error) => console.log(error));

const promiseFirst = new Promise((resolve, reject) => {
    setTimeout(() => {
        const donoOrNot = true;
        if (!donoOrNot) {
            resolve('Async task is completed.')
        }
        else {
            reject("Error")
        }
    })
}, 1000);

promiseFirst.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Mil gaya");
})