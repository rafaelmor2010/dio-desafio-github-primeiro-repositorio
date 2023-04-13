/*
3- Elabore um algoritmo que calcule o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento 
escolhida e efetuar o calculo adequado.

Código da condição de pagamento:
-1- À  vista débito, recebe 10% de desconto;
-2- À vista no dinheiro ou pix, recebe 15% de desconto;
-3- Em duas vezes, preço normal de etiqueta sem juros;
-4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/
console.log("------------Programa condição de pagamento -------------");
let precoEtiqueta = 100;
let escolhaFormaPagamento = 1;

if (escolhaFormaPagamento === 1) {
  console.log(precoEtiqueta - precoEtiqueta * 0.1);
} else if (escolhaFormaPagamento === 2) {
  console.log(precoEtiqueta - precoEtiqueta * 0.15);
} else if (escolhaFormaPagamento === 3) {
  console.log(precoEtiqueta);
} else if (escolhaFormaPagamento === 4) {
  console.log(precoEtiqueta + precoEtiqueta * 0.1);
} else {
  console.log(
    "Erro ! - Escolha corretamente a forma de pagamento | 1 - Débito | 2 Dinheiro ou pix | 3 Duas vezes | 4 Acima de duas vezes"
  );
}
