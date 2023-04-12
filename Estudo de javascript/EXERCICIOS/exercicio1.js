/*
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um
    semestre da faculdade calcule e imprime a sua média e a sua 
    classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;
Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

console.log("-------------- Programa Média escolar --------------- ");

let nomeAluno = "Rafael";
let nota1 = 8;
let nota2 = 7;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log('Aluno ' + nomeAluno + 'Reprovado, sua média:' + media);
} else if (media >= 5 && media <= 7) {
  console.log('Aluno ' + nomeAluno + ' ficou de Recuperação, sua média:' + media);
} else if (media > 7) {
  console.log('Aluno ' + nomeAluno + ' foi aprovado, sua média:' + media);
}
