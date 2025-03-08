function bgColorChanger() {
    let body = document.querySelector("body");
    let startBtn = document.querySelector("#start");
    let stopBtn = document.querySelector("#stop");
    let changeColor;
    let colorChanger = () => {
        let r = Math.floor(Math.random() * 255 + 1);
        let g = Math.floor(Math.random() * 255 + 1);
        let b = Math.floor(Math.random() * 255 + 1);
        body.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    startBtn.addEventListener("click", () => {
        changeColor = setInterval(colorChanger, 1000);
    })
    stopBtn.addEventListener("click", () => {
        clearInterval(changeColor);
        changeColor = null;
    })
}
bgColorChanger();