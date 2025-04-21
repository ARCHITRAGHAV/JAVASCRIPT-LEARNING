// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch resource.");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.log(error));

// async function fetchData() {
//     try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }
//         const data = await response.json();
//         console.log(data.name);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response) {
            throw new Error("Could not fetch");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgSrc = document.getElementById("pokemonSprite");
        imgSrc.src = pokemonSprite;
        imgSrc.style.display = "block";
    } catch (error) {
        console.log(error);
    }
}