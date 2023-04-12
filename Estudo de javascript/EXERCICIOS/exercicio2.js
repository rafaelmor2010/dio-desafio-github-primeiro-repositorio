/*
O IMC - Indice de massa corporal é um critério da organização mundial
de saúde para dar uma indicação sobre a condição de peso de uma 
pessoa adulta.
Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre
sua condição de acordo com a tabela abaixo.

IMC em adultos condições:
-Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 obesidade grave;

*/ let nomePessoa = "Rafael";
let altura = 1.72;
let peso = 72;
let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log(nomePessoa + " está abaixo do peso" + imc);
} else if (imc >= 18.5 && imc < 25) {
  console.log(nomePessoa + " peso normal " + imc);
} else if (imc >= 25 && imc < 30) {
  console.log(nomePessoa + " está acima do peso " + imc);
} else if (imc >= 30 && imc < 40) {
  console.log(nomePessoa + " está obeso " + imc);
} else if (imc > 40) {
  console.log(nomePessoa + " obesidade grave " + imc);
}
