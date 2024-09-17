let box = document.querySelector("#box")
let button = document.querySelector("button")
function getRandomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let rgb = `rgb(${r},${g},${b})`;
    return rgb
}

button.addEventListener("click", function () {
    box.style.backgroundColor = `${getRandomColor()}`;
})