const prompt = require("prompt-sync")();
console.clear()


let num1 = +prompt('Digite o primeiro número: ');
let num2 = +prompt('Digite o segundo número: ');
// let num3 = +prompt('Nota 3: ');
// let num4 = +prompt('Nota 4: ');
// let media = ((num1+num2+num3+num4)/4);
// console.log('Sua média é: ', media)

if ( num1 % num2 === 0 ){
     console.log('Os numeros são multiplos')
} else {
     console.log('Os numeros não são multiplos')

}


    //     console.log('Você foi reprovado');
// } else if(media > 5 && media < 7) {
//     console.log('Você está em recuperação');
// } else { (media >= 7);
//     console.log('Você foi aprovado');
// }


console.log()
