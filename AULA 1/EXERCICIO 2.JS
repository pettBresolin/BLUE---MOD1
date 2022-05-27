const prompt = require("prompt-sync")();
console.clear()


let num1 = +prompt('Nota 1: ');
let num2 = +prompt('Nota 2: ');
let num3 = +prompt('Nota 3: ');
let num4 = +prompt('Nota 4: ');
let media = ((num1+num2+num3+num4)/4);
console.log('Sua média é: ', media)

if (media <= 5) {
    console.log('Você foi reprovado');
} else if(media > 5 && media < 7) {
    console.log('Você está em recuperação');
} else { (media >= 7);
    console.log('Você foi aprovado');
}

console.log()



//console.log('a soma dos dois números é: ${num1+num2}')
