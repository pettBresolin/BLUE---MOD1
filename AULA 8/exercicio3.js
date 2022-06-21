/*Faca um programa que peça um numero e imprima
 toda a tabuada dele do 1 ao 10
*/

const prompt = require("prompt-sync")();

let tabuada = +prompt('Digite um numero: ')

for (i =1 ; i<=10 ; i++){
        console.log(tabuada * i);
}
