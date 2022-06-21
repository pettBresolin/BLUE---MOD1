const prompt = require('prompt-sync')();

const arryResp = ['Pedra', 'Papel', 'Tesoura'];
const David = "David";
let pontoJ=0; pontoD=0; empate=0;
let arrayPlacar = [0, 0];

let nome = prompt('Digite seu nome: ');

inicio:  do{
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
    
    let opcao = +prompt('Digite uma opção: ');

    if(opcao ==1){
        console.clear();
    } else if (opcao ==2){
        console.clear();
        break;
    } else{
        continue;
    }
    console.clear();
    let rodadas = +prompt(`${nome}, insira o número de rodadas: `);
    console.clear();
    while(true){
        if(rodadas > 0 && rodadas < 100){
            console.clear();
            break;
        } else{
            console.clear();
            rodadas = +prompt('Insira um número de 1 a 99: ');
        }
    }
    
    beggin:for(r = 0; r < rodadas; r++){
        const random = Math.floor(Math.random() * 3+1);
        arrayPlacar.splice(0, 0, pontoJ, pontoD);
        while(true){
            console.log(`\t\t
                           ++++++++++++++++++++++++++++++++
                            \t${nome} > ${arrayPlacar[0]} | ${arrayPlacar[1]} < ${David}
                           ++++++++++++++++++++++++++++++++ 
                        `)
            console.log(`${David}: ${random}`); //Mostra a escolha do David
            if(r == 0 && r == rodadas-1){
                console.log(`Boa Sorte ${nome}`);
            } else if(r == rodadas-1){
                console.log(`Rodada ${r+1} > Última rodada! >`);
            } else{
                console.log(`Rodada ${r+1} >`);
            }
            console.log(`S <> Sair`);
            console.log();
            console.log(`1 <> PEDRA`);
            console.log(`2 <> PAPEL`);
            console.log(`3 <> TESOURA`);
            opcao = prompt('Qual sua jogada: ');
            console.log(`${arryResp[opcao-1]} x ${arryResp[random-1]}`);
            //console.log();
            //console.log = prompt ('\t------------- Enter para Continar -------------');

            if(opcao == 1 || opcao == 2 || opcao == 3){
                break;
            } else if(opcao.toUpperCase() =='S'){              
                break inicio;
                    } else{
                        console.log(`\t\t------------------- Digite -------------------
                                    \n1 para PEDRA | 2 para PAPEL | 3 para TESOURA | ou S para SAIR`);
                    }
        if(opcao == random){
        console.clear();
        console.log(`${arryResp[opcao-1]} x ${arryResp[random-1]} - EMPATE :|`);
        empate++;
        } else if(opcao != random){   
            if(opcao == 1){
                if(random == 2){
                    console.clear();
                    console.log(`${arryResp[opcao-1]} x ${arryResp[random-1]} - VOCÊ PERDEU :(`);
                    pontoD++;
                } else {
                    console.clear();
                    console.log(`${arryResp[opcao-1]} x ${arryResp[random-1]} VOCÊ GANHOU :)`);
                    pontoJ++;
                }
            } else if(opcao == 2){
                if(random == 1){
                    console.clear();
                    console.log(`${arryResp[opcao-1]} x ${arryResp[random-1]} - VOCÊ GANHOU :)`);
                    pontoJ++
                } else {
                    console.clear();
                    console.log(`${arryResp[opcao-1]} x ${arryResp[random-1]} - VOCÊ PERDEU :(`);
                    pontoD++;
                }
            } else if(opcao == 3){
                if(random == 1){
                    console.clear();
                    console.log(`${arryResp[opcao-1]} x ${arryResp[random-1]} - VOCÊ PERDEU :(`);
                    pontoD++;
                } else {
                    console.clear();
                    console.log(`${arryResp[opcao-1]} x ${arryResp[random-1]} - VOCÊ GANHOU :)`);
                    pontoJ++;
                }
             
            }
        }
        console.clear();
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
                continue beggin;
            }else if (respFim.toUpperCase() == 'N'){
                console.clear();
                break inicio;
            }
        }
        }
    }
} 
}
while(true);