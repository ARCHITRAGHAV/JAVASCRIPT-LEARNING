// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // named IIFE
    console.log('DB CONNECTED');
})();
// global scope ke pollution ko hatane ke liye IIFE ka use hota hai

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("archit");

(() => {
    console.log("Archit Raghav");
})();