/*Faça um Programa que peça a idade e a altura de 5 pessoas,
armazene cada informação no seu respectivo array.
Imprima a média de idade e de altura.
*/

const prompt = require("prompt-sync")();
console.clear();

let contador = 0 //Para criar o loop while
let arrayI = []; //Vazia o usuario irá entrar com os valores
let arrayA = []; //Vazia o usuario irá entrar com os valores

while (contador < 5 ){ /*Como já tenho quantas vezes o while
                         vai fazer o loop posso declarar
                         o valor. Senão teria que usar
                         .length para o loop
                       */
    console.log(`Pessoa ${contador+1}`) //Somente para identificar o numero de loops
    let idade = +prompt('Qual sua idade?: ');
    let altura = +prompt('Qual sua altura?: ');
    console.clear()
    arrayI.push(idade); //Irá jogar os valores do prompt para a array
    arrayA.push(altura);
    contador++
}        

let somaI = arrayI.reduce((somaI, currentElement) => somaI + //com essa funçao da array ele reduz os valores da array para um unico valor já somado
currentElement);
let somaA = arrayA.reduce((somaA, currentElement) => somaA +
currentElement);

console.log(arrayI)
console.log(arrayA)
console.log(arrayI.length);
console.log(arrayA.length);
console.log (somaI/arrayI.length)
console.log (somaA.toFixed(2)/arrayA.length)