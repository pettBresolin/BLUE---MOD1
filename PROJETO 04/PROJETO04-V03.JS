console.clear();
const prompt = require("prompt-sync")();

console.log('\t\t\t\t\t*Quatro estações*');
console.log();
console.log('\t\t\t\t Uma história de amor em 4 atos');
console.log();

    console.log(`\tNossa história começa numa tarde de primavera, o jovem Enon
    está sentado no parque da cidade, comendo um lanche e esperando o horario 
    do seu onibus e ir para Casa.\n`)
    console.log(`\tEle observa os casais que passeam pelo parque e fica imaginando ...\n
           "Será que um dia eu terei alguem com quem dividir minha vida."\n`)
    console.log(`\tDerrepente ele olha para o outro lado da calçada e, em um banco embaixo de
    uma figueira está uma menina linda, ela está lendo um livro de filosofia e
    Enon se sente fortemente atraido por aquela garota, sente uma coisa que 
    nunca tinha experimentado, um sentimento que não consegue explicar.
    Durante um tempo ele fica observando a garota do outro lado da calçada e tudo 
    nela, trás um mundo de novos sentimentos para Enon. Ele observa cada detalhe ...\n
            como ela mexe no cabelo, o jeito que ela vira as paginas do livro, seu sorriso.\n`);
    console.log(`\tMas Enon é muito timido e tudo que ele consegue fazer é observa-la, não tem 
    coragem de conversar com a garota. Vez ou outra eles trocam olhares e ela 
    percebe que Enon não para de olhar para ela.
    Ela se sente um pouco desconfortável com a situação mais sente algo mais por Enon.`)
    console.log();
prompt('\t\t<3<3<3<3<3<3 Aperte Enter para continuar. <3<3<3<3<3<3')
console.clear();

//**************************************************************
//Declaração de variaveis
//**************************************************************

let Ele = 'Enon'
let Ela = 'Verônica'
let Namorar = true
let fazer = 0

let dados = {
  dia: 1,
  saude: 50,
  periodo: 'Tarde',
  horasDia: 2,
  estacoes: 'Primavera',
  estacao: 1,

  Periodo: function (horasDia) {
    if (horasDia == 1) {
      this.periodo = 'manha'
    } else if (horasDia == 2) {
      this.periodo = 'tarde'
    } else if (horasDia == 3) {
      this.periodo = 'noite'
    }
  },

  Estacao: function (estacao) {
    if (estacao == 1) {
      this.estacoes = 'Primavera'
    } else if (estacao == 2) {
      this.estacoes = 'Verão'
    } else if (estacao == 3) {
      this.estacoes = 'Outono'
    } else if (estacao == 4) {
        this.estacoes = 'Inverno'
    }
  },

  pontosSaude: function (pontos) {
    this.saude += pontos
    if (pontos > 0) {
      console.log(`Você ganhou ${pontos} de saude`)
    } else {
      console.log(`Você perdeu ${pontos} de saude`)
    }
  },
};

let Desisoes = [
    `\n[1] Sair com amigos`,
    `\n[2] Viajar`,
    `\n[3] Ficar em casa agarradinho assistindo tv`,
    `\n[4] Passear no parque`,
    `\n[5] Não se ver`,
    `\n[6] Deixar de namorar`,
  ]

  function continuar() {
    console.log()
    prompt(`Pressione ENTER para continuar...`)
  }

  function OpcoesAleatorias() {
    let num = Math.floor(Math.random() * 2 + 1)
    return num
  }

    principal: while(true){
        console.log(`\tOutro dia e ${Ele} vai a uma festa com amigos, e lá está ela, a garota do parque.
        ${Ele} sai para buscar uma bebida e sem querer se esbarra na garota, ${Ele} fica tão nervoso
        que não sabe o que fazer, as palavras fogem da boca, só consegue emitir ruidos, ele tenta se concentrar
        e falar com a garota.`);
        console.log();
    console.log(`${Ele}, pede desculpas, pergunta o nome da garota e tenta conversar com ela  - Digite [1]
                 ${Ele}, pede desculpas e sai nervoso - Digite [2]`)
    let opcao = +prompt('Digite a opção: ')
    if(opcao === 1){
        dados.pontosSaude(+10)
        console.log(`\t${Ele} tomou coragem, falou com a garota do parque e descobriu seu nome ... ${Ela}.
${Ele} e ${Ela} combinam um encontro para se conhecerem melhor. Alguns dias depois eles vão ao cinema e
depois do filme eles vão até o parque para passear.
Durante o passeio os dois vão se conhecendo e ${Ele} tenta beijar ${Ela}.
${Ele} se aproxima de ${Ela}, seus lábios se tocam e os dois dão um beijo de novela. A cidade, ao fundo como cenário 
Nesse momento algo mágico acontece e eles começam a namorar - Digite [1] ou
Os dois decidem ser só amigos e não continuar a história de amor - Digite [2]`)
        console.log();
        opcao = +prompt('Qual caminho eles devem seguir: ')
        if(opcao == 1){
            dados.pontosSaude(+10)
            console.log(`Vocês estão namorando, parabéns!!! Agora vamos descobrir se essa relação vai dar casamento ou
            vai ser só mais um amor de estação?`)
            while( dados.saude >=0 && dados.saude <=100 ){
                console.log('Agora vamos ver se o namoro irá resistir a rotina dos dias ...')
                console.log();
                console.clear();

                if (dados.horasDia >3) {
                  dados.horasDia = 2
                  dados.dia++
              }
                if(dados.dia > 5){
                  dados.estacao = 1
                  dados.estacao++
                }
                  dados.Periodo(dados.horasDia)
                  dados.Estacao(dados.estacao)
                  console.log(`\nDia ${dados.dia},
                  ${dados.periodo}, estação do ano ${dados.estacoes}
                  com ${dados.saude} pontos de saude namoro.`)
                  console.log()
            
                console.log(`${Desisoes}`)
                fazer = +prompt()
                if (fazer == 1){
                    escolhas = OpcoesAleatorias()
                    if(escolhas == 1){
                        console.log(`${Ele} e ${Ela} decidem sair com amigos, e a noite foi fantástica. Muitas risadas e vocês passaram bons momentos juntos!`)
                        console.log()
                        dados.pontosSaude(+10);
                        continuar()
                        dados.horasDia++
                        dados.estacao++
                    }else if(escolhas == 2){
                        console.log(`Você e ${Ela} ficam cansados e vão cada um para sua casa`)
                        console.log()
                        dados.pontosSaude(-05);
                        continuar()
                        dados.horasDia++
                        dados.estacao++
                  }
                }else if (fazer == 2){
                    escolhas = OpcoesAleatorias()
                    if(escolhas == 1){
                    console.log(`${Ele} e ${Ela} viajaram no fim de semana para uma praia e puderam ficar sozinhos e namorar bastante.`)
                    console.log()
                    dados.pontosSaude(+15)
                    continuar()
                    dados.horasDia++
                    dados.estacao++
                    }else if(escolhas == 2){
                    console.log(`${Ele} e ${Ela} viajaram no fim de semana para uma praia e acabaram brigando :(!`)
                    console.log()
                    dados.pontosSaude(-10)
                    continuar()
                    dados.horasDia++
                    dados.estacao++
                    }
                  } else if (fazer == 3) {
                    escolhas = OpcoesAleatorias()
                    if(escolhas == 1){
                    console.log(`${Ele} e ${Ela} ficaram em casa assistindo séries e filmes o fim de semana todo, e isso aproximou ainda mais os dois.`)
                    console.log()
                    dados.pontosSaude(+10)
                    continuar()
                    dados.horasDia++
                    dados.estacao++
                    }else if(escolhas == 2){
                    console.log(`${Ele}, quis ficar em casa, enquanto ${Ela} queria ter saido. Isso acabou deixando ${Ela} chateada.`)
                    console.log()
                    dados.pontosSaude(-05)
                    continuar()
                    console.clear()
                    dados.horasDia++
                    dados.estacao++
                    }
                } else if (fazer== 4) {
                    escolhas = OpcoesAleatorias()
                    if(escolhas == 1){
                    console.log(`${Ele} e ${Ela} passearam pelo parque onde eles se conheceram e deram o primeiro beijo, foi um dia especial!`)
                    console.log()
                    dados.pontosSaude(+20)
                    continuar()
                    dados.horasDia++
                    dados.estacao++
                    }else if(escolhas == 2){
                    console.log(`${Ele} e ${Ela} foram no parque da cidade mais, o passeo não foi tão legal como eles imaginaram`)
                    console.log()
                    dados.pontosSaude(-10)
                    continuar()
                    dados.horasDia++
                    dados.estacao++
                    }
                  } else if (fazer== 5) {
                    console.log(`${Ele} e ${Ela} decidiram não se ver e isso esfriou um pouco a relação.`)
                    console.log()
                    dados.pontosSaude(-15)
                    continuar()
                    dados.horasDia++
                    dados.estacao++
                    } else if(fazer==6){
                        break principal;
                    }
           }
          console.clear();
          console.log('Ninguém pode falar que vocês não tentaram. Mais infelizmente o namoro não deu certo! :(')
          break principal;
        } else if(opcao==2){
            console.log(`\tFoi mágico connhecer ${Ela}, infelizmente o destino não quis que vocês ficassem juntos.
        \tSiga acreditando no amor, você logo vai conhecer alguém!`)
                Namorar = false
                break;
                }
    } else if(opcao === 2){
        dados.pontosSaude(-10)
        console.clear();
        console.log (`\t${Ele}, infelizmente ficou tão nervoso que não conseguiu falar com ela.
Sorte que o destino reservou outra oportunidade para os dois se encontrarem.
${Ele} encontra a garota do parque num café da cidade, ela olha para ele,
deixa escapar um largo sorriso que ilumina toda a cafeteira e diz um oi para ${Ele}`)
        console.log();
        console.log(`${Ele} pergunta o nome dela e começam a conversar  - Digite [1]
${Ele} de tão nervoso, sai da cafeteria e perda a oportunidade de conhecer a garota do parque  - Digite [2]`)
        console.log();
        let opcao = +prompt('Digite a opção: ')
        if(opcao === 1){
            dados.pontosSaude(+10)
            console.clear();
            continue;
        } else if(opcao === 2){
            dados.pontosSaude(-50)
            console.log();
            console.log(`\tInfelizmente ${Ele}, você nunca vai descobrir o nome da garota do parque.
             \tMais sorte na próxima vez que se apaixonar`)
            break;
        } else{
        console.log('Opção invalida digite [1] ou [2]')
                }
                if (Namorar == false) {
                  break;
                }
        }
console.log(`\tinfelizmente o namoro de ${Ela} e ${Ele} não deu certo. Hora de seguir em frente!
\tMas não desista de achar a pessoa certa!`)
    
  }
    console.clear();
    if(dados.saude <=0){
      console.log(`O relacionamente de ${Ele} e ${Ela}, infelizmente, não resistiu aos dias. Mas os dois seguem na busca do amor.`)
    }else{
    console.log(`${Ele} e ${Ela}, vocês deram tão certo que está na hora de escrever um novo capitudo dessa história. Parabéns pelo casamento!`)
console.log();
    }

