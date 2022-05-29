const prompt = require("prompt-sync")();
console.clear();

console.log("----------------JOGO DO DETETIVE----------------");
console.log();
console.log("\tResponda sim ou não as próximas perguntas e\nvamos descobrir se você é\nculpado, suspeito ou inocente");
console.log();

console.log('-----------APERTE ENTER PARA CONTINUAR-----------');
prompt();
console.clear();

let result = 0

let pergunta1 = prompt('Durante um famoso jantar um rico empresário foi assassinado, você estava nesse jantar?')
console.log()
let pergunta2 = prompt('Você conhecia o empresário assassinado?')
console.log()
let pergunta3 = prompt('Você tinha alguma desavença com a vitima?')
console.log()
let pergunta4 = prompt('Conhecia alguém que poderia ter cometido o assassinato?')
console.log()
let pergunta5 = prompt('Você tinha acesso a algum objeto que poderia ter matado a vitima?')
console.log()
if(pergunta1.toLowerCase() == 'sim'){result++}
if(pergunta2.toLowerCase() == 'sim'){result++}
if(pergunta3.toLowerCase() == 'sim'){result++}
if(pergunta4.toLowerCase() == 'sim'){result++}
if(pergunta5.toLowerCase() == 'sim'){result++}

if (result >=4 ){
    console.log('-----------Você é o assassino ... e está preso!-----------')
    } else if (result ==3) {
    console.log('-----------Talvez tu tenha cometido o assassinato ... será detido até encontrarmos o assassino!-----------')
    } else
    {
    console.log('-----------Você é inocente e pode ir para casa!-----------')
    }
console.log()