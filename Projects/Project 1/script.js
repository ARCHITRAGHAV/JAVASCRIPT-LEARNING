let body = document.querySelector("body");
let btns = document.getElementsByClassName("button");
// document.querySelectorAll(".button");
const btnArr = Array.from(btns);

btnArr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        body.style.backgroundColor = btn.id;
        // console.log(e.target);
        // body.style.backgroundColor = e.target.id;
    })
})