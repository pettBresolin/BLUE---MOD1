/* Projeto 01
Jogo Jornada do Herói
Criar um questionário com 5 perguntas para definir o que acontece com o herói.
*/

const prompt = require("prompt-sync")();
console.clear();

console.log (`Nosso herói é uma pessoa que, como muitos,
\ntrabalha o dia inteiro e estuda para tentar melhorar a vida.
\nDepois de muito tempo buscando uma oportunidade e se dedicando para
\nalcancar seus objetivos, ele conseguiu entrar em um curso que
\npode fazer ele alcançar seus objetivos.
\n              Parabéns! Você está perto de concluir sua missão
\nApós uma longa jornada responda estas cinco perguntas e
descubra se deu tudo certo.`);
console.log();
console.log("\tResponda sim ou não as próximas perguntas e\nvamos descobrir se sua jornada foi bem sucedida.");
console.log();

console.log('-----------APERTE ENTER PARA CONTINUAR-----------');
prompt();
console.clear();

let result = 0

let quest1 = prompt('Está preparado para se desafiar todos os dias?')
console.log()
while(quest1.toLowerCase() != 'sim' && quest1.toLowerCase() != 'nao'){
    console.log('Responda "sim" ou "nao"');
    quest1 = prompt('Está preparado para se desafiar todos os dias?');
}
let quest2 = prompt('Sabe que terá que passar noites acordado estudando, está pronto?')
console.log()
while(quest2.toLowerCase() != 'sim' && quest2.toLowerCase() != 'nao'){
    console.log('Responda "sim" ou "nao"');
    quest2 = prompt('Sabe que terá que passar noites acordado estudando, está pronto?');
}
let quest3 = prompt('Buscou outras fontes para estudar, além das da aula?')
console.log()
while(quest3.toLowerCase() != 'sim' && quest3.toLowerCase() != 'nao'){
    console.log('Responda "sim" ou "nao"');
    quest3 = prompt('Buscou outras fontes para estudar, além das da aula?');
}
let quest4 = prompt('Passou em todos as provas?')
console.log()
while(quest4.toLowerCase() != 'sim' && quest4.toLowerCase() != 'nao'){
    console.log('Responda "sim" ou "nao"');
    quest4 = prompt('Passou em todos as provas?');
}
let quest5 = prompt('Participou de eventos ou outros cursos para aumentar seu conhecimento?')
console.log()
while(quest5.toLowerCase() != 'sim' && quest5.toLowerCase() != 'nao'){
    console.log('Responda "sim" ou "nao"');
    quest5 = prompt('Participou de eventos ou outros cursos para aumentar seu conhecimento?');
}

if(quest1.toLowerCase() == 'sim'){result++}
if(quest2.toLowerCase() == 'sim'){result++}
if(quest3.toLowerCase() == 'sim'){result++}
if(quest4.toLowerCase() == 'sim'){result++}
if(quest5.toLowerCase() == 'sim'){result++}

console.clear()

if (result == 5 ) {
    console.log('Você respondeu sim a todas as perguntas,\ntua jornada foi épica!!!!!')
    }
    else if (result == 4){
    console.log('Você atingiu teus objetivos, parabéns você está formado!!!')
    } 
    else if (result == 3){
    console.log('Foi por pouco, não desanime e tente se esforçar mais da próxima vez. ')
    }
    else if (result ==1 || result ==2){
    console.log('Infelizmente você não conseguiu!')
    }
    else
    {
    console.log('Toda jornada exige sacrificios\ne você não se dispos a realizar nenhum.\nAi fica dificil né!!!!')
    }
console.log()