const prompt = require("prompt-sync")();
console.clear();

    // função para verificar todas as combinações de vitória
    function verificador(a){
        // linha
        for (let i=0;i<3;i++) {
            if ((a[i][0] == a[i][1]) && (a[i][1] == a[i][2]) && a[i][0] != "") {
                return true;
            }
        }
        // coluna
        for (let i=0;i<3;i++) {
            if ((a[0][i] == a[1][i]) && (a[1][i] == a[2][i]) && a[0][i] != "") {
                return true;
            }
        }
        // diagonal
        if ((a[0][0] == a[1][1]) && (a[1][1] == a[2][2]) && a[0][0]!= ""){
            return true;
        }
        // diagonal
        if ((a[0][2] == a[1][1]) && (a[1][1] == a[2][0]) && a[0][2] != ""){
            return true;
        }
    }   
    // declaração de variáveis
    let matriz = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    let vitoria = verificador(matriz)
    let jogada = 0;
    let jogador1;
    let jogador2;
    let pontoJogador1 = 0;
    let pontoJogador2 = 0;
    // apresentação
    console.log(`Bem vindo ao JOGO DA VELHA 😁 🎮`);
    console.log();
    console.log(`[IMPORTANTE!] instruções do jogo: `);
    console.log();
    console.log(`como jogar: cada jogador deve escolher uma posição dentro do 
            tabuleiro. Essa posição é indicada da seguinte forma:`);
    console.log();
    console.log(`
        colunas:           --> 0        --> 1      -->  2
        linhas:   --> 0    [0][0]       [0][1]      [0][2]
                  --> 1    [1][0]       [1][1]      [1][2]
                  --> 2    [2][0]       [2][1]      [2][2]`);
    console.log(); 
    // escolha do jogador             
    prompt(`pressione [ENTER] para começar!`); 
    console.clear();
    console.log(`************************************`);
    while(true){
    let jogador = prompt(`Escolha seu jogador [x] ou [o] : `);
    if(jogador === "x"){
        jogador1 = jogador;
        break;
    }else if(jogador === "o"){
        jogador1 = jogador;
        break;
    }else{
        console.log(`Opção invalida! Tente novamente`);
        continue;
    }
    }
    // condição para identificar cada jogador
    if(jogador1 === "x"){
        jogador2 = "o";
    }else{
        jogador2 = "x";
    }
    console.clear();
    console.log(`Vamos la!`);
    console.table(matriz)
    // começo do jogo com validação das jogadas
    jogo:while(true){   

        let linhaJogador1 = +prompt(`[${jogador1}] Escolha a Linha: `);
        let colunaJogador1 = +prompt(`[${jogador1}] Escolha a Coluna: `);      
        console.clear();

    if((linhaJogador1 !== 0 && linhaJogador1 !== 1 && linhaJogador1 !== 2) || (colunaJogador1 !== 0 && colunaJogador1 !== 1 && colunaJogador1 !== 2)){
            console.log(`jogada invalida! Tente novamente.`)
            continue;
        } 
        while(matriz[linhaJogador1][colunaJogador1] !== 0){
            console.log(`A coordenada já esta preenchida! tente outra...`)
            console.table(matriz)
        linhaJogador1 = +prompt(`[${jogador1}] Escolha a Linha: `);
        colunaJogador1 = +prompt(`[${jogador1}] Escolha a Coluna: `);    
        console.clear();
        }
        console.clear();    
        matriz[linhaJogador1][colunaJogador1] = jogador1;  
        vitoria = verificador(matriz)
        if(vitoria === true){
            console.log(`PARABÉNS Jogador [${jogador1}] você foi o vencedor!`)
            pontoJogador1++
            let continuar = prompt(`Deseja continuar [s/n] ? `).toLowerCase().trim();
            while(true){
                if(continuar === "s"){
                    matriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
                    jogada = 0;
                    console.clear();
                    continue jogo;
                }else if(continuar === "n"){
                    console.clear();
                    break jogo;
                }else{
                    console.log(`Opção Invalida! Tente novamente...`)
                    continuar = prompt(`Deseja continuar [s/n] ? `).toLowerCase().trim();
                } 
            }      
        }      
        console.table(matriz)
        jogada++
        if(jogada == 9){
            let continuar = prompt(`Deseja Jogar novamente [s/n] ? `).toLowerCase().trim();
            while(true){
                if(continuar === "s"){
                    matriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
                    jogada = 0;
                    console.clear();
                    continue jogo;
                }else if(continuar === "n"){
                    console.clear();
                    break jogo;
                }else{
                    console.log(`Opção Invalida! Tente novamente...`)
                    continuar = prompt(`Deseja jogar novamente [s/n] ? `).toLowerCase().trim();
                } 
            }       
        }
        let linhaJogador2 = +prompt(`[${jogador2}] Escolha a Linha: `);
        let colunaJogador2 = +prompt(`[${jogador2}] Escolha a Coluna: `);      
        console.clear();

    if((linhaJogador2 !== 0 && linhaJogador2 !== 1 && linhaJogador2 !== 2) || (colunaJogador2 !== 0 && colunaJogador2 !== 1 && colunaJogador2 !== 2)){
            console.log(`jogada invalida! Tente novamente.`)
            continue;
        } 
        while(matriz[linhaJogador2][colunaJogador2] !== 0){
            console.log(`A coordenada já esta preenchida! tente outra...`)
            console.table(matriz)
        linhaJogador2 = +prompt(`[${jogador2}] Escolha a Linha: `);
        colunaJogador2 = +prompt(`[${jogador2}] Escolha a Coluna: `);     
        console.clear();
        }
        console.clear();    
            matriz[linhaJogador2][colunaJogador2] = jogador2;  
            vitoria = verificador(matriz) 
            if(vitoria === true){
                console.log(`PARABÉNS Jogador [${jogador2}] você foi o vencedor!`)
                pontoJogador2++
                let continuar = prompt(`Deseja continuar [s/n] ? `).toLowerCase().trim();
                while(true){
                    if(continuar === "s"){
                        matriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
                        jogada = 0;
                        console.clear();
                        continue jogo;                    
                    }else if(continuar === "n"){
                        console.clear();
                        break jogo;                    
                    }else{
                        console.log(`Opção Invalida! Tente novamente...`)
                        continuar = prompt(`Deseja continuar [s/n] ? `).toLowerCase().trim();
                    } 
                }        
            }         
            console.table(matriz) 
            jogada++
            if(jogada == 9){
                let continuar = prompt(`Deseja jogar novamente [s/n] ? `).toLowerCase().trim();
                while(true){
                    if(continuar === "s"){
                        matriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
                        jogada = 0;
                        console.clear();
                        continue jogo;
                    }else if(continuar === "n"){
                        console.clear();
                        break jogo;
                    }else{
                        console.log(`Opção Invalida! Tente novamente...`)
                        continuar = prompt(`Deseja jogar novamente [s/n] ? `).toLowerCase().trim();
                    } 
                }        
            }          
    }  
    if(pontoJogador1 > pontoJogador2){
            console.log(`PARABÉNS pela grande vitória jogador [${jogador1}] você mandou muito bem!!`);
            console.log();
            console.log(`Pontuação: [${jogador1}]  [${pontoJogador1}]`);
            console.log(`Pontuação: [${jogador2}]  [${pontoJogador2}]`);
    }else if(pontoJogador2 > pontoJogador1){
            console.log(`PARABÉNS pela grande vitória jogador [${jogador2}] você mandou muito bem!!`);
            console.log();
            console.log(`Pontuação: [${jogador2}]  [${pontoJogador2}]`);
            console.log(`Pontuação: [${jogador1}]  [${pontoJogador1}]`);
    }else{
            console.log(`O jogo terminou EMPATADO!`)
            console.log();
            console.log(`Pontuação: [${jogador1}]  [${pontoJogador1}]`);
            console.log(`Pontuação: [${jogador2}]  [${pontoJogador2}]`);
    }
    console.log();
    console.log();