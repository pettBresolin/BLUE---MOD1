/*Faça um "jogo da velha" criando uma arraymatriz em duas dimensões
(Você deve criar um array com 3 arrays de 3 elementos cada dentro). -ok
O programa deve pedir as coordenadas (linha e coluna) -ok
alternadamente para 2 jogares e marcar X ou O em cada caso. -ok
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
//arrayPlacar = [0,0, 0];

let ganha = false;
let vencedor;
let jogada = 'X';

// function linCol(parametro1, parametro2 , parametro3){
//     console.log
//     console.log(parametro1);
//     console.log('-----------');
//     console.log(parametro2)
//     console.log('-----------');
//     console.log(parametro3);
// }

jogo: while(!ganha){
//Variaveis de jogada

//linCol(...arraymatriz)
console.table(arraymatriz);

console.log(`É a vez do jogador ${jogada}`);

let coordX = +prompt('Digite a coluna Desejada: ')
let coordY = +prompt('Digite a linha Desejada: ')


if (arraymatriz[coordY][coordX]){
    console.log('Coordenada preenchida, digite outra: ');

    continue;

}

arraymatriz[coordY][coordX] = jogada;


if (jogada === 'X'){
    jogada = 'O';
} else {
    jogada = 'X';
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

        if (ganha){
            console.log(`O jogador ${vencedor} ganhou!`)
        } else{
            console.log("Deu velha!")
        }
        console.log()
        console.log("jogar novamente?")
        console.log('Sim para continuar ou Não para sair do jogo')
        let rodada = prompt()
        if(rodada === 'sim'.toUpperCase()){
            continue jogo;
            } else{
            break;
            }
    }
}   
}

if (ganha){
    console.log(`O jogador ${vencedor} ganhou!`)
} else{
    console.log("Deu velha!")
}
//console.log(arraymatriz)