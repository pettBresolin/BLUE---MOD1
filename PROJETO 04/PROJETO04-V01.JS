console.clear();
const prompt = require("prompt-sync")();


console.log('\t\t\t\t\t*Quatro estações*');
console.log();
console.log('\t\t\t\t Uma história de amor em 4 atos');
console.log();

    //setInterval(function() {
    console.log(`\tNossa história começa numa tarde de primavera, o jovem e solitário Enos
    está sentado no parque da cidade, comendo um lanche e esperando o horario 
    do seu onibus para ir para Casa.`)
    console.log(`\tEle observa os casais que passeam pelo parque e fica imaginando se um dia
    ele um dia viveria aquele sentimento e teria alguem com quem dividir suas 
    duvidas, alegrias e tristesas com alguem.`)
    console.log(`\tDerrepente ele olha para um outro lado da calçada e em um banco embaixo de
    uma figueira está uma menina linda, ela está lendo um livro de filosofia e
    Enon se sente fortemente atraido por aquela garota, sente uma coisa que 
    nunca tinha experimentado, um sentimento que não consegue explicar.
    Durante um tempo ele fica observando a garota do outro lado da calçada, tudo 
    nela trás um mundo de novos sentimentos em Enon, como ela mexe no cabelo,
    o jeito que ela vira as paginas do livro, seu sorriso, qualquer coisa que a 
    garota faça Enon observa e fica cada vez mais interessado em saber quem é 
    essa menina.`);
    console.log(`\tMas Enon é muito timido e tudo que ele consegue fazer é observa-la, não tem 
    coragem de ir conversar com ela. Vez ou outra eles trocam olhares e ela 
    persebe que Enon não para de olhar para ela.
    Ela se sente um pouco desconfortável com a situação mais sente uma atração 
    por Enon e começa a olhar cada vez mais para ele.`)
//}, 1000)

//**************************************************************
//Declaração de variaveis
//**************************************************************

let Ele = 'Enon'
let Ela = 'Verônica'
let arrayTempo = ['Dia , Horário, Saúde']
let escolha = 0
let saude = 0
let Falar = true
let Terminar = true
let Namorar = true

let dados = {
  dia: 1,
  saude: 50,
  periodo: 'manha',
  Estacoes: 'Primavera',
  horasDia: 1,
  EstacoesAno: 1,

  mudaPeriodo: function (horasDia) {
    if (horasDia == 1) {
      this.periodo = 'manha'
    } else if (horasDia == 2) {
      this.periodo = 'tarde'
    } else if (horasDia == 3) {
      this.periodo = 'noite'
    }
  },

  mudaEstacao: function (EstacoesAno) {
    if (EstacoesAno == 1) {
      this.Estacoes = 'Primavera'
    } else if (EstacoesAno == 2) {
      this.Estacoes = 'Verão'
    } else if (EstacoesAno == 3) {
      this.Estacoes = 'Outono'
    } else{
        this.Estacoes = 'Inverno'
    }
  },

  mudaSaude: function (pontos) {
    this.saude += pontos
    if (pontos > 0) {
      console.log(`Você ganhou ${pontos} de saude`)
    } else {
      console.log(`Você perdeu ${pontos} de saude`)
    }
  }
}

//******************************************************************
//Funções
//******************************************************************

//funcao verifica o que foi digitado
function opcoes(valor) {
  while (valor != 1 && valor != 2 && valor != 3) {
    console.log()
    console.log('\nDigite apenas [1], [2] ou [3]')
  }
}

//Função Continuar historia
function continuar() {
  console.log()
  prompt(`Pressione ENTER para continuar...`)
}

//Função Treinamento
function treinamento() {
  console.log(`\n${personagem} Qual tipo de treinamento deseja realizar: 
    [1] - Treinamento com boneco.
    [2] - Treinamento com companheiro de Luta.
    [3] - Treinamento de caça de animais.
    `)
  escolhaTreinamento = +prompt()
  while (
    escolhaTreinamento != 1 &&
    escolhaTreinamento != 2 &&
    escolhaTreinamento != 3
  ) {
    console.log('\nDigite apenas [1], [2] ou [3]')
    escolhaTreinamento = +prompt()
  }
  if (escolhaTreinamento == 1) {
    console.log(
      'Você fez um treinamento individual e conseguiu melhorar suas habilidades '
    )
    dados.mudaForca(10)
  } else if (escolhaTreinamento == 2) {
    escolhaAleatoria = aleatorio()
    if (escolhaAleatoria == 1) {
      console.log(
        'Você e seu companheiro fizeram um bom treinamento, onde você conseguiu uma boa evolução, consumindo pouca saude'
      )
      dados.mudasaude(-10)
      dados.mudaForca(10)
    } else if (escolhaAleatoria == 2) {
      console.log(
        'Você e seu comapnheiro realizaram um treinamento forte, onde você conseguiu um aumento consideravel de força, porem foi muito desgastante, consumindo saude também'
      )
      dados.mudasaude(-20)
      dados.mudaForca(20)
    } else if (escolhaAleatoria == 3) {
      console.log(
        'Seu companheiro de luta levou o treinamento como uma batalha real e tentou impressionar o mestre, você venceu porém consumiu demais a sua saude'
      )
      dados.mudasaude(-30)
      dados.mudaForca(30)
    }
  } else if (escolhaTreinamento == 3) {
    escolhaAleatoria = aleatorio()
    if (escolhaAleatoria == 1) {
      console.log(
        'Sua caçada foi um sucesso, você acertou um alce em apenas um tiro, nem deu para se cansar'
      )
      dados.mudasaude(30)
      dados.mudaForca(10)
    } else if (escolhaAleatoria == 2) {
      console.log(
        'Você encontrou um urso feroz no seu caminho e teve muito trabalho para derrota-lo, conseguiu aumentar sua força, mais lhe custou saude'
      )
      dados.mudasaude(-10)
      dados.mudaForca(30)
    } else if (escolhaAleatoria == 3) {
      console.log('Você montou uma armadilha e conseguiu capturar um javali')
      dados.mudasaude(30)
    }
  }
}

//Função ganhar saude
function ganharsaude() {
  console.log(`\n${personagem} para se alimentar temos 3 opções: 
  [1] - Podemos dividir o que temos disponivel.
  [2] - Colher o que plantamos.
  [3] - Caçar algo para comer.
  `)
  escolhasaude = +prompt()
  while (escolhasaude != 1 && escolhasaude != 2 && escolhasaude != 3) {
    console.log('\nDigite apenas [1], [2] ou [3]')
    escolhasaude = +prompt()
  }

  //saude Opção 1
  if (escolhasaude == 1) {
    console.log(
      'Vamos dividir a colheita do dia anterior, porém temos pouco, ja que você não ajudou na colheita'
    )
    dados.mudasaude(10)

    //saude Opção 2
  } else if (escolhasaude == 2) {
    escolhaAleatoria = aleatorio()
    if (escolhaAleatoria <= 2) {
      console.log(
        'A colheita foi muito boa, conseguimos executar o trabalho sem muita força'
      )
      dados.mudasaude(20)
    } else {
      console.log(
        'A colheita foi boa, porem as raizes estava muito fortes e tivemos que usar muita força para tira-las'
      )
      dados.mudasaude(30)
      dados.mudaForca(-10)
    }

    //saude Opção 3
  } else if (escolhasaude == 3) {
    escolhaAleatoria = aleatorio()
    if (escolhaAleatoria == 1) {
      console.log(
        'Sua caçada foi um sucesso, você acertou um alce em apenas um tiro, nem deu para se cansar'
      )
      dados.mudasaude(30)
      dados.mudaForca(10)
    } else if (escolhaAleatoria == 2) {
      console.log(
        'Você encontrou um urso feroz no seu caminho e teve muito trabalho para derrota-lo, conseguiu aumentar sua força, mais lhe custou saude'
      )
      dados.mudasaude(-10)
      dados.mudaForca(30)
    } else if (escolhaAleatoria == 3) {
      console.log('Você montou uma armadilha e conseguiu capturar um javali')
      dados.mudasaude(30)
    }
  }
}

//Função Desafiar Mestre
function desafiarMestre() {
  console.log('A luta com seu mestre irá iniciar esteja preparado: ')
  continuar()
  console.clear()
  if (dados.forca < 100) {
    console.log(
      `${personagem}, eu te derrotei com facilidade, você deve aumentar sua força se quer me derrotar e principalmente derrotar o lider supremo. `
    )
    dados.mudasaude(-30)
  } else if (dados.forca >= 100 && dados.forca < 150) {
    console.log(
      `${personagem}, você me derrotou, porem ainda tem muito que aprender se deseja desafiar o lider supremo. `
    )
    dados.mudasaude(-50)
  } else {
    console.log(
      `${personagem}, você conseguiu me derrotar com facilidade, acredito estar preparado para enfretar o lider supremo, porém sempre tome cuidado. `
    )
    dados.mudasaude(-50)
  }
}

//Função Desafiar o lider Supremo
function desafiarLiderSupremo() {
  console.log('duelo')
}

//******************************************************************
//Introdução a historia
//******************************************************************


//******************************************************************
//Menu de escolhas principais
//******************************************************************

while (vida === true && confianca === true) {
  //Atualiazação de dados principais
  if (dados.horasDia >= 4) {
    dados.horasDia = 1
    dados.dia++
  }
  dados.mudaPeriodo(dados.horasDia)
  console.log(`\nVocê esta no dia ${dados.dia},
  no periodo da ${dados.periodo},
  com ${dados.saude} de saude e
  ${dados.forca} de força`)
  console.log()

  //Encontro com lider supremo
  if (dados.forca >= 150 && proposta == true) {
    console.log(`O samurai lider supremo, soube do samurai ${personagem}, um jovem muito habilidoso e decidiu encontra-lo pessoalmente.
  Ao encontrar o samurai ${personagem}, o lider supremo fez uma proposta para ele:`)
    console.log()
    console.log(
      `${personagem} eu soube de sua dedicação e evolução, quero que você entre para minha guarda pessoal, lhe ofereço dinheiro e comida em fartura`
    )
    console.log(`\no que decide, esse será sua unica proposta: 
  [1] - Você agradece a proposta e decide continuar em sua vila.
  [2] - Aceita a proposta, trai seu mestre por dinheiro e prazeres para o resto de sua vida.
  [3] - Fica com raiva da proposta e decide desafia-lo no mesmo momento.
  `)
    escolhaProposta = +prompt()
    while (
      escolhaProposta != 1 &&
      escolhaProposta != 2 &&
      escolhaProposta != 3
    ) {
      console.log('\nDigite apenas [1], [2] ou [3]')
      escolhaProposta = +prompt()
    }
    console.log()
    if (escolhaProposta == 1) {
      console.log(
        'Obrigado pelo proposta grande lider supremo, mais no momento prefiro continar em minha pequena vila'
      )
      console.log()
      proposta = false
    } else if (escolhaProposta == 2) {
      console.log('Otima proposta, eu aceito lutar ao seu lado ')
      console.log()
      confianca = false
      proposta = false
      continue
    } else {
      console.log(
        'Você é pior do que eu imaginava, nunca me juntarei a você e quero desafia-lo aqui mesmo para um duelo pelo governo da ilha'
      )
      console.log()
      desafiarLiderSupremo()
      proposta = false
    }
  }

  //Escolha principal da atividade a ser realizada
  console.log(
    `${personagem} Escolha o que deseja fazer no momento: ${escolhaPrincipal}`
  )
  escolha = +prompt()
  while (
    escolha != 1 &&
    escolha != 2 &&
    escolha != 3 &&
    escolha != 4 &&
    escolha != 5
  ) {
    console.log('\nDigite apenas [1], [2], [3], [4] ou [5]')
    escolha = +prompt()
  }
  console.log()

  //Resultado das escolhas principais

  //Escolha principal opção 1
  if (escolha == 1) {
    console.log(`${personagem}: escolheu treinar`)
    console.log()
    if (dados.saude <= 60) {
      console.log(
        'Você está com pouca saude para treinar, tente se alimentar primeiro!'
      )
    } else {
      treinamento()
      dados.horasDia++
      continuar()
      console.clear()
    }

    //Escolha principal opção 2
  } else if (escolha == 2) {
    console.log(`${personagem}: escolheu se alimentar`)
    console.log()
    ganharsaude()
    dados.horasDia++
    continuar()
    console.clear()

    //Escolha principal opção 3
  } else if (escolha == 3) {
    console.log(`${personagem}: escolheu desafiar o mestre`)
    console.log()
    if (dados.saude <= 80) {
      console.log(
        'Você está com pouca saude para enfrentar o mestre, tente se alimentar primeiro!'
      )
    } else {
      desafiarMestre()
    }
    dados.horasDia++
    continuar()
    console.clear()

    //Escolha principal opção 4
  } else if (escolha == 4) {
    console.log(`${personagem}: escolheu desafiar o lider supremo`)
    console.log()
    retorno = desafiarLiderSupremo()
    dados.horasDia++
    continuar()
    console.clear()

    //Escolha principal opção 5
  } else if (escolha == 5) {
    console.log(`${personagem}: escolheu desistir`)
    console.log()
  }
}
if (confianca == false) {
  console.log('confianca false')
} 

