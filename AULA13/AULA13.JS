console.clear();
const prompt = require(prompt-sync);
listaFunc = [];


//Exercicio 2
let qtd = +prompt("quantos funcionarios deseja cadastrar: ");

for (let i=0; i<qtd; i++);{    let nome = prompt('Qual o nome? ');
    let posicao = prompt('Qual o cargo? ');
    let salario = prompt('Qual o salario? ');

    let funcionario ={

        nome: nome,
        cargo: cargo,
        salario: salario
    }
    listaFunc.push(funcionario);
}

for (let i of listaFunc){
    console.log('cadastro: ');
    console.log(i);
    console.log();
}
