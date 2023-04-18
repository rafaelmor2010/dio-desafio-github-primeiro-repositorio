function mediaEscolar(nota1, nota2, nota3, nota4) {
  return (nota1 + nota2 + nota3 + nota4) / 4;
}

const not1 = 3;
const not2 = 5;
const not3 = 5;
const not4 = 5;

console.log(mediaEscolar(not1, not2, not3, not4));
const media = mediaEscolar(not1, not2, not3, not4);
if (media >= 7) {
  console.log("Aprovado - média é: " + media);
} else if ((media >= 5) & (media < 7)) {
  console.log("Exame - média é: " + media);
} else {
  console.log("Reprovado - média é: " + media);
}
