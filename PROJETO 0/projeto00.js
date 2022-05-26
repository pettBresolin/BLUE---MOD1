// console.log();

// console.log('fuck');


console.log("Jornada do herói")
console.log()
console.log('Parábens você acaba de dar o primeiro passo para o futuro. Bem vindo a Jornada do herói Bluemer. Você está pronto para se tornar o profissional mais desejados do mercado? Bora descobrir!!!')



console.log();

let prompt = require("prompt-sync")();

pergunta1 = prompt('Passou várias noites acordado codando? 1.[sim] 2.[não]')
pergunta2 = prompt('Trocou muitas experiências com o time? 1.[sim] 2.[não]')
pergunta3 = prompt('Deixor de sair para ficar estudando? 1.[sim] 2.[não]')
pergunta4 = prompt('Quebrou a cabeça para descobrir o erro? 1.[sim] 2.[não]')
pergunta5 = prompt('Passou em todos os projetos? 1.[sim] 2.[não]')

let pontuacao = 0

if(pergunta1 == 1){pontuacao++}
if(pergunta2 == 1){pontuacao++}
if(pergunta3 == 1){pontuacao++}
if(pergunta4 == 1){pontuacao++}
if(pergunta5 == 1){pontuacao++}

if(pontuacao==0){console.log('Ai complica ... vai estudar diabo')}
else if (pontuacao==1||pontuacao==2){console.log('\nNão foi dessa vez. Se esforce um pouco mais')}
else if (pontuacao==3){console.log('\nQuem sabe em uma próxima. Tu sabe o que precisa fazer!')}
else if (pontuacao==4){console.log('\nParabéns. Mesmo não tendo sido perfeito tu triunfou')}
else if (pontuacao==5){console.log('\nMuito bom!!!! Tu é um verdadeiro herói')}



