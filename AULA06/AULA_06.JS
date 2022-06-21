const prompt = require("prompt-sync")();
console.clear();
/*
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,[],[],];
console.log();
console.log(numeros);

if (numeros % 2 ==0){
    par.push(par);
}{


  
  
    let impar = 0 
    let par = 0
par.push(par);
nI.push(impar);
console.log('Numeros pares',par);
Consonle.log('Numeros impares',impar);

console.log();
}

*/

let contador = 0
let arrayG=[];
let arrayP=[];
let arrayI=[];

while (contador < 20){
    let numero = +prompt('Digite um numero: ')
    arrayG.push(numero);
    contador++

    if (numero % 2 ==0){
        arrayP.push(numero)
    } else {
        arrayI.push(numero)
    }
}

console.log(arrayG);
console.log()
console.log('Numeros pares:')
console.log(arrayP);
console.log();
console.log('Numeros Impares:')
console.log(arrayI);