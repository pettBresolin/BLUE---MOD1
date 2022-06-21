console.clear();
const prompt = require("prompt-sync")();

// Peça ao usuário uma quantidade de linhas e e outra de colunas, 
// e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 3, 2, 1, 0 ]
// [ 4, 3, 2, 1 ]
// [ 5, 4, 3, 2 ]

/* MINHA TENTATIVA
const prompt = require("prompt-sync")();
console.clear;

let linhas = +prompt("Quantas linhas? ");
let colunas = +prompt("Quantas colunas? ");

let arrayLinha = [];
let arrayColuna = [];

for (let i = linhas ; i > 0 ; i--){
    for(let c = colunas; c > 0 ; c--){
     // arrayColuna.push(c + i)
    }
    arrayLinha.push(arrayColuna)
arrayColuna = 0
}
console.log(arrayLinha)
*/

console.log('Vamos fazer uma tabela de X linhas e Y colunas?');
let quantidadeLinhas = +prompt('Insira a quantidade de linhas: ');
let quantidadeColunas = +prompt('Insira a quantidade de colunas: ');
let linhas = [];

for (let i = 0; i < quantidadeLinhas; i++){
    let colunas = [];
    for (let a = 0; a < quantidadeColunas; a++){
        colunas.unshift(a + i);
    }
    linhas.push(colunas);
}

for (let i of linhas){
    console.log(i);
}