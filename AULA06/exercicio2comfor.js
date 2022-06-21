const prompt = require("prompt-sync")();
console.clear();

let pessoas = 5
let arrayI = [];
let arrayA = [];
let SomaI = 0
let SomaA = 0


for (var i = 0; i < pessoas; i++) {
    console.log(`Pessoa ${i+1}`)
    arrayI[i] = +prompt('Qual sua idade?: ');
    console.log();
    arrayA[i] = +prompt('Qual sua altura?: ');
    SomaI += arrayI[i];
    SomaA += arrayA[i];
    
}

let mediaI = SomaI / arrayI.length
let mediaA = SomaA / arrayA.length
console.log(`A média de idade é de ${mediaI}`);
console.log(`a média de altura é de ${mediaA}`);

console.log()