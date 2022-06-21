const prompt = require("prompt-sync")();
console.clear

let arraymatriz = new Array(3);

arraymatriz[0] = [0, 0, 0];
arraymatriz[1] = [0, 0, 0]
arraymatriz[2] = [0, 0, 0]

let ganha = false;
let vencedor;
let jogada = 'X'
//jogada = 'X'
// prompt('Player 1 Escolha X ou O para jogar: ')
// if (jogada === 'X'.toLowerCase()){
//     jogada = 'O';
// } else {
//     jogada = 'X';
// }

let jogoVitorias=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 4, 8],
    [2, 4, 6],
];
let rodadas = +prompt('Digite o numero de rodadas: ')
let count=0
while(count<rodadas){
    //Variaveis de jogada
    if (jogada === 'X'){
    
    jogada = 'O';
} else {
    jogada = 'X';
}

console.table(arraymatriz);

console.log(`É a vez do jogador ${jogada}`);

let coordX = +prompt('Digite a coluna Desejada: ')
let coordY = +prompt('Digite a linha Desejada: ')


if (arraymatriz[coordY][coordX]){
    console.log('Coordenada preenchida, digite outra: ');

    continue;

}

arraymatriz[coordY][coordX] = jogada;




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
        //ganha = true;
        vencedor = ultimoValor
        console.log(`O jogador ${vencedor} ganhou!`)
        console.log()
        console.log(coordVazias)
        if(count==rodadas-1){
            count=rodadas+1
        }else{
            
        console.log("Parar de jogar?")
        let rodada = prompt('Digite sim: ')
        console.log(rodada)
        if(rodada == 'sim'){
            count=rodadas+1;
            } 
            
             else{
                arraymatriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
                count++;
            }
        }
   
             }
            //  else if(coordVazias == 0 ){
            //     console.log("Deu velha!")
            //     arraymatriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
            //     count++
                
            //  }
            }         
}
//console.log(arraymatriz)arraymatriz.some(item => item != 0)