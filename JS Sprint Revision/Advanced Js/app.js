async function fetchData() {
    const response = await fetch("names.json");
    const response1 = await fetch("people.json");

    const peopleData = await response1.json();
    const data = await response.json();

    const div = document.createElement("div");
    const ul = document.createElement("ul");
    div.classList.add("box")

    peopleData.map(person => {
        const card = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        card.classList.add("card");
        h1.textContent = person.name;
        p.textContent = person.age;
        card.appendChild(h1);
        card.appendChild(p);
        div.appendChild(card);
    })

    data.map(name => {
        const li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
    })

    document.querySelector("body").appendChild(ul);
    document.querySelector("body").appendChild(div)
}
fetchData();