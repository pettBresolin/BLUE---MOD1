/* 1 -Peça ao usuário uma quantidade de linhas e e outra de
colunas, e imprima essas informações na forma de uma tabela
como no exemplo de 3 linhas e 4 colunas:
[ 0, 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 2, 3, 4, 5 ]
*/


const prompt = require("prompt-sync")();
console.clear;

let linhas = +prompt("Quantas linhas? ");
let colunas = +prompt("Quantas colunas? ");
let arrayLinha = [];
let arrayColuna = [];

for (let i = 0; i < linhas; i++){
    let arrayColuna = []; 
    for(let c = 0; c < colunas; c++){
         arrayColuna.push(c + i)
    }
    arrayLinha.push(arrayColuna)
}
for (let i of arrayLinha){
    console.log(i)
}

console.log();
for (let i of arrayLinha){
}

console.log();