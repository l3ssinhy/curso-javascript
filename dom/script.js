// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     paragrafo.innerText = "Green tropinha!"
//     paragrafo.style.color = "blue"
// })

const paragrafo = document.getElementById("paragrafo")
const btn = document.getElementById("btn")
const img = document.getElementById("img")

btn.addEventListener("click", function(){
    paragrafo.innerText = "Schutzstaffel!"
    paragrafo.style.color = "red"
    img.src = "https://static.wikia.nocookie.net/bleach/images/2/26/Ep399SchutzstaffelReceivesOrders.png/revision/latest/scale-to-width-down/1200?cb=20241202184159&path-prefix=en"
})
