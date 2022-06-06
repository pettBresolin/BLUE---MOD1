//Projeto 2 - Jogo Jokenpô
console.clear();
const prompt = require('prompt-sync')();

const arryResp = ['Pedra', 'Papel', 'Tesoura']; 
const David = "David"; //easter egg - achei melhor deixar a varial como const para que ela não receba nenhuma alteração na execução do programa
let pontoJ=0
let pontoD=0
let empate=0;
let arrayPlacar = [0, 0]; //Array para mostrar as vitórias em cada ciclo de jogadas
let jogadaanterior = " " //mostra as opções dos jogadores, quem ganhou ou se foi empate 

let nome = prompt('Digite seu nome: ');

inicio: while(true){  //Forma encontrada para iniciar o programa. Usei label para os breaks e continue contidos nos loops
    pontoJ=0; pontoD=0; empate=0;
    console.clear();
    console.log(`
                 ====================
                |      JOKENPÔ       |
                 ====================`);
    console.log();
    console.log(`\t\t  Digite 1 para jogar`);
    console.log(`\t\t  Digite 2 para sair`);
    console.log()
        let resp = +prompt('Digite uma opção: ');
    
        if(resp ==1){
        console.clear();
    } else if (resp ==2){
        console.clear();
        break;
    } else{
        continue;
    }
    console.clear();
    let rodadas = +prompt(`${nome}, insira o número de rodadas: `);
    console.clear();
    while(true){  //Não criei uma váriavel para usar no while pois achei essa forma mais facil de trabalhar
        if(rodadas > 0 && rodadas < 100){   //só uma condiçao para não ficar infinito o jogo
            console.clear();
            break;
        } else{
            console.clear();
            console.log(`Mínimo de 1 e máximo 99 rodadas.`);
            rodadas = +prompt('Insira um número de rodadas válido: ');
        }
    }
    
    for(r = 0; r < rodadas; r++){
        const random = Math.floor(Math.random() * 3+1);     //formula para fazer o David escolher as jogadas de forma aleátorea, usado 3+1 para não ter resultado com 0
        arrayPlacar.splice(0, 0, pontoJ, pontoD);       //Aqui a array, que foi criada como variavel global, recebe as informações da pontuação e retorna para o usuário
        while(true){
            console.log(`\t\t
                           ++++++++++++++++++++++++++++++++
                            \t${nome} > ${arrayPlacar[0]} | ${arrayPlacar[1]} < ${David}
                           ++++++++++++++++++++++++++++++++ 
                        `)
            //console.log(`${David}: ${random}`); Mostra a escolha do David
            if(r == 0 && r == rodadas-1){
                console.log(`Boa Sorte ${nome}`);
            } else if(r == rodadas-1){
                console.log(`Rodada ${r+1} > Última rodada! >`);
            } else{
                console.log(`Rodada ${r+1} >`);
            }
            console.log(`S <> Sair`);
            console.log(``);
            console.log(`1 <> Pedra`);
            console.log(`2 <> Papel`);
            console.log(`3 <> Tesoura`);
            console.log();
            console.log(jogadaanterior)     //Artificio encontrado para mostrar a escolha dos jogadores. Não consegui fazer o programa mostrar o resultado da ultima rodada. 
            resp = prompt('Qual sua jogada: ');
                                               
            if(resp ==1 || resp ==2 || resp==3){
                break;
            } else if(resp.toUpperCase() =='S'){              
                break inicio;
                    } else{
                        console.log(`\t\t------------------- Digite -------------------
                                    \n1 para PEDRA | 2 para PAPEL | 3 para TESOURA | ou S para SAIR`);
                    }
            }    
            if(resp == random){
            console.clear();
            jogadaanterior=(`${arryResp[resp-1]} x ${arryResp[random-1]} - EMPATE :|`);
            empate++;
            } else if(resp != random){   
            if(resp == 1){
                if(random == 2){
                    console.clear();
                    jogadaanterior=(`${arryResp[resp-1]} x ${arryResp[random-1]} - VOCÊ PERDEU :(`);
                    pontoD++;
                } else {
                    console.clear();
                    jogadaanterior=(`${arryResp[resp-1]} x ${arryResp[random-1]} VOCÊ GANHOU :)`);
                    pontoJ++;
                }
            } else if(resp == 2){
                if(random == 1){
                    console.clear();
                    jogadaanterior=(`${arryResp[resp-1]} x ${arryResp[random-1]} - VOCÊ GANHOU :)`);
                    pontoJ++
                } else {
                    console.clear();
                    jogadaanterior=(`${arryResp[resp-1]} x ${arryResp[random-1]} - VOCÊ PERDEU :(`);
                    pontoD++;
                }
            } else if(resp == 3){
                if(random == 1){
                    console.clear();
                    jogadaanterior=(`${arryResp[resp-1]} x ${arryResp[random-1]} - VOCÊ PERDEU :(`);
                    pontoD++;
                } else {
                    console.clear();
                    jogadaanterior=(`${arryResp[resp-1]} x ${arryResp[random-1]} - VOCÊ GANHOU :)`);
                    pontoJ++;
                }
            }
        }
        if(r == rodadas-1){
            console.log(`\t----------------- Placar Final --------------- `);
            console.log();
            if(pontoJ >0){
            console.log(`\t\t    Você pontuou: ${pontoJ} ponto(s)`);
            }
            if (pontoD >0){
                console.log(`\t\t    O ${David} pontuou: ${pontoD} ponto(s)`);
            }
            if(empate > 0){
                if(empate ==1){
                    console.log(`\t\t    Ocorreu ${empate} empate!`);
                } else{
                    console.log(`\t\t    Ocorreram ${empate} empates!`);
                }
            }
            console.log(`\t\t    Em um total de ${rodadas} rodadas!`);
            if(pontoJ > pontoD){
                console.log();
                console.log(`\t\t\t${nome} é o VENCEDOR!!!!!`);
            } else if(pontoJ < pontoD){
                console.log();
                console.log(`\t\t\t${David} VENCEU`);
            } else{
                console.log();
                console.log(`\t\t     Você e o ${David} empataram!`);
            }
                while(true){
                console.log();
                respFim = prompt(`\t------------- Digite ------------
                                  \n\t S - Jogar novamente e N - Para sair\n`);
            if(respFim == null || respFim == ''){
                break;
            }  else if(respFim.toUpperCase() == 'S'){
                continue inicio;
            }else if (respFim.toUpperCase() == 'N'){
                console.clear();
                break inicio;
            }
        }
        }
    }
}
