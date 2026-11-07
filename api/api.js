// const nome = document.getElementById("nome")
// const img = document.getElementById("img")

// fetch("https://rickandmortyapi.com/api/character") // Requisição para API
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.results[0].name);
//         nome.innerText = data.results[0].name
//         img.src = data.results[0].image
//     }) // Realiza algo se a requisição deu certo


// --------------------------------------------------------------------------


fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results[4].name);
    })