//-----------------------Arrays---------------------------


// let idades = [15, 23, 21, 28, 17]

// console.table(idades)
// console.log(idades[1]);


//---------------------------------------------------


// let frutas = ["Maçã", "Pera"]

// frutas.unshift("Morango") // Adiciona um item no começo da lista ["Morango", "Maçã", "Pera"]
// console.log(frutas);

// frutas.push("Uvaia") // Adiciona um item no final da lista ["Morango", "Maçã", "Pera", "Uvaia"]
// console.log(frutas);

// frutas.splice(2, 0, "Acerola") // 2 = adiciona a fruta em um index, 0 = quantos itens após a 
//                               // posição do index 
// console.log(frutas);

// frutas.pop() // Remove o último item da lista
// console.log(frutas);

// frutas.shift() // Remove o primeiro item da lista
// console.log(frutas.length); // Mostra a quantidade de elementos na lista


// --------------------------ForEach-----------------------------


let nome = ["Matheus", "Ana", "Igor"]

nomes.forEach((elemento) => {
    console.log(`Bom dia ${elemento}`);
})