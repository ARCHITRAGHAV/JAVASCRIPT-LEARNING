let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    let height = form.querySelector("#height").value;
    let weight = form.querySelector("#weight").value;
    let results = document.querySelector("#results");

    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
        results.innerHTML = `${bmi} and you are underweight.`;
    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `${bmi} and your weight is normal.`;
    } else {
        results.innerHTML = `${bmi} and you are overweight.`;
    }
})