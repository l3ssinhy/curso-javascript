let compraInicial = 300;
let desconto
let compraFinal

if (compraInicial >= 200) {
    desconto = compraInicial * 0.20
    compraFinal = compraInicial - desconto
    console.log("20% de desconto, pague: R$" + compraFinal);
} else if (compraInicial >= 100) {
    desconto = compraInicial * 0.10
    compraFinal = compraInicial - desconto
    console.log("10% de desconto, pague: R$" + compraFinal);
} else if (compraInicial < 100) {
    console.log("Ganha bosta de desconto não, pague: R$" + compra);
}
