/*Faça um "jogo da velha" criando uma arraymatriz em duas dimensões
(Você deve criar um array com 3 arrays de 3 elementos cada dentro).
O programa deve pedir as coordenadas (linha e coluna)
alternadamente para 2 jogares e marcar X ou O em cada caso.
Caso um jogador vença, ele deve perguntar se desejam jogar mais uma vez,
e registrar quem venceu aquela rodada,
se os jogadores desejarem parar,
O programa deve mostrar quem ganhou mais rodadas e quem é
O grande vencedor.
*/

const prompt = require("prompt-sync")();
console.clear

let arraymatriz = new Array(3);

arraymatriz[0] = [0, 0, 0];
arraymatriz[1] = [0, 0, 0]
arraymatriz[2] = [0, 0, 0]
arrayPlacar = [0,0, 0];

// vitoriaX = 0;
// vitoriaO = 0;
// velha = 0;

let ganha = false;
let vencedor;

let jogada = 'X'

let rodadas = 0
rodadas = +prompt(`insira o número de rodadas: `);
    console.clear();

console.clear();
    
while(!ganha){
//Variaveis de jogada

console.table(arraymatriz)

console.log(`É a vez do jogador ${jogada}`);

let coordX = +prompt('Digite a coluna Desejada: ')
let coordY = +prompt('Digite a linha Desejada: ')


if (arraymatriz[coordY][coordX]){
    console.log('Coordenada preenchida, digite outra: ');

    continue;

}

arraymatriz[coordY][coordX] = jogada;


if (jogada =='X'.toLowerCase()){
    jogada= 'O'.toLowerCase();
} else {
    jogada = 'X'.toLowerCase();
}

let coordVazias = 0

for (let linhaA = 0; linhaA < arraymatriz.length; linhaA++){
    let linha = arraymatriz[linhaA];
    for (let coluna = 0; coluna < linha.length; coluna++){
        let jogadaAtual = linha[coluna];

        if (!jogadaAtual){
            coordVazias++
        }
    }   
}

if(coordVazias == 0 ){
    break;
}
//Variaveis de vitoria, derrota ou empate

let jogoVitorias = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 4, 8],
    [2, 4, 6],
];

for(let vitoria of jogoVitorias){

    let valoresIguais = 0;
    let ultimoValor;

    for(let coord of vitoria){
        let linha = Math.floor(coord / 3);
        let coluna = Math.floor(coord % 3);

        let jogada = arraymatriz[linha][coluna];

        if(jogada && (!ultimoValor || jogada == ultimoValor)){
            valoresIguais++;            
        }

        ultimoValor = jogada;
    }

    if (valoresIguais == 3){
        ganha = true;
        vencedor = ultimoValor
        break;
    }
    }   
}

if (ganha){
    console.log(`O jogador ${vencedor} ganhou!`)
} else{
    console.log("Deu velha!")
}





// console.clear();
// console.log();
// let player1 = prompt('Jogador 1 digite seu nome: ');
// let tipe = prompt('Escolha X ou O para jogar: ').toLowerCase();
// while( tipe !="X".toLowerCase() || tipe !="O".toLowerCase()){
//     if(tipe == 'X'.toLowerCase() || tipe =='O'.toLocaleLowerCase()){
//      break;   
//     } else{
//         console.log('escolha X ou O')
//         tipe = prompt('Escolha X ou O para jogar: ').toLowerCase();
//     }
//         }

// console.log();
// let player2 = prompt('Jogador 2 digite seu nome: ');


console.log(arraymatriz);