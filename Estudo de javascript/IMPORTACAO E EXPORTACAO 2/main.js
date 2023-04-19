/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100
    Faça um programa que recebe os 5 números sorteados para os alunos e
    mostre o maio número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const { gets, print } = require("./funcao-auxiliar");
/*
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
  const sorteados = gets();
  numerosSorteados.push(sorteados);
}
print(numerosSorteados);

//fazer um for para pegar o maior número

let maiorNumero = 0;
for (let j = 0; j < numerosSorteados.length; j++) {
  const sorteados = numerosSorteados[j];

  if (sorteados > maiorNumero) {
    maiorNumero = sorteados;
  }
 
}

print(maiorNumero);
*/

console.log("-------------Ou assim-----------------");
const quatidadeNumeroAluno = gets();

let maiorNumero2 = 0;
for (let r = 0; r < quatidadeNumeroAluno; r++) {
  const sorteados = gets();

  if (sorteados > maiorNumero2) {
    maiorNumero2 = sorteados;
  }
}

print(maiorNumero2);
