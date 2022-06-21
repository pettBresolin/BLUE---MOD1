const prompt=require('prompt-sync')();
console.clear();

/* Exercicio 1 aula 1
console.log('Bem Vindo! Entre com as notas');
let Nota1 = +prompt('Primera nota: ');
let Nota2 = +prompt('Segunda nota: ');

console.log(`As notas são ${Nota1} e ${Nota2} e a média ponderada do aluno é: ${Nota1 * 4 + Nota2 * 6}`)
*/




/* Exercicio 2 aula 1
let peca1 = ('Martelo')
let preco1 = ('10.00')
let peca2 = ('Pá')
let preco2 = ('40.00')

let numero1 = +prompt(`Qual a quantidade de ${peca1} (${preco1} a unidade): `);

let numero2 = +prompt(`Qual a quantidade de ${peca2} (${preco2} a unidade): `);

console.log('O valor total da compra é: ',(numero1*preco1 + numero2*preco2))
*/

/* Exercicio 3 aula 1 

console.log('Vamos ver quantos dias você já viveu?')
let anos = +prompt('Quantos anos você tem: ')*365;
let meses = +prompt('Quantos meses você tem: ');
let dias = +prompt('Quantos dias você tem: ')

//console.log(soma)
//console.log(meses)
//console.log(dias)
console.log(`Você já viveu: ${anos+((meses)*30)+dias} dias`)

console.log()

*/

/* Exercicio 4 aula 1 */

console.log('Agora vamos converter seus dias de vida para ano e meses!???');
let dias = +prompt(`Informe quantos dias você já viveu: `);
let diasA = parseInt (dias/365).toFixed();
 diasM = parseInt ((dias%365)/30)
let diasD = parseInt ((dias%365)%30)
//let conver = (dias%365)
//let anos1 = +prompt('Quantos anos você tem: ');
//let meses1 = +prompt('Quantos meses você tem: ');
//let dias1 = +prompt('Quantos dias você tem: ')
//let soma1 = (``)
//console.log(conver)
//console.log(meses)
console.log(`Você já viveu ${diasA} anos, ${diasM} meses e ${diasD} dias`)