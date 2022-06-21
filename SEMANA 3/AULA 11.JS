console.clear();
const prompt = require('prompt-sync')();


/*Faça um programa, com uma função que necessite de três argumentos:
 dois números e um sinal de operador matemático
  (+, -, * ou /). Ela deve fazer o cálculo indicado
   pelo operador usando os dois número passados.

*/


// function calculo(a, b, c){
//     let resultado = 0;
//     if(c == '+'){
//         resultado = a+b;
//     } else if(c == '-'){
//         resultado = a-b;
//     } else if(c == '*'){
//         resultado = a*b;
//     } else if (c == '/'){
//         resultado = a/b;
//     } else {
//         console.log('operador invalido')
//     }
//     console.log(resultado)
// }
// let nome1 = +prompt("Digite o primeiro numero: ")
// let nome2 = +prompt('Digite o segundo numero: ')
// let operador = +prompt('Digite o operador para o fazer o calculo(+, - , *, /): ')

// calculo(nome1, nome2, operador);
// console.log();


function calculo(a, b, c){
    let resultado = 0;

    if(c == '+'){
        resultado = a+b;
    } else if(c == '-'){
        resultado = a-b;
    } else if(c == '*'){
        resultado = a*b;
    } else if (c == '/'){
        resultado = a/b;
    } else {
        console.log('operador invalido')
    }
    console.log(resultado)
}
let nome1 = +prompt("Digite o primeiro numero: ")
let nome2 = +prompt('Digite o segundo numero: ')
let operador = prompt('Digite o operador para o fazer o calculo(+, - , *, /): ')

calculo(nome1, nome2, operador);
console.log();

// function calculadora(a, b, c){
//     let resultado = 0;

//     if (c == '+'){
//         resultado = a + b;
//     } else if (c == '-'){
//         resultado = a - b;
//     } else if (c == '*'){
//         resultado = a * b;
//     } else if (c == '/'){
//         resultado = a / b;
//     } else {
//         console.log('Operador inválido!');
//     }

//     console.log(resultado);
// }

// let op = prompt('Digite o operador: ');
// let n1 = +prompt('Digite um número: ');
// let n2 = +prompt('Digite outro número: ');


//calculadora(n1, n2, op)

console.log();