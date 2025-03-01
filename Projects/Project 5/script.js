let box = document.getElementById("box");

box.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let rgb = `rgb(${r},${g},${b})`;
    box.style.backgroundColor = rgb;
    document.querySelector("h2").innerHTML = rgb;
})