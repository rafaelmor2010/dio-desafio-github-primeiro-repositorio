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
let precoProduto = 100;
let valorPago;
console.log(
  "Sobre a forma de pagamento | debito 10% desconto | Dinheiro /pix " +
    " 15% desconto | Duas vezes preço normal | Acima de duas vezes juros 10%"
);
console.log("Escolha formas de pagamento");
console.log("debito - diheiro - pix - duasVezes - acimaDuasVezes");
//colocando qual forma de pagamento vai ser utilizada
let condicaoPagamento = "debito";

if (condicaoPagamento === "debito") {
  valorPago = precoProduto - (precoProduto * 10) / 100;
  console.log(
    "Preço normal é : " +
      precoProduto +
      " - forma de pagamento é: " +
      condicaoPagamento +
      " 10% desconto  - Preço pago é = " +
      valorPago
  );
} else if (condicaoPagamento === "dinheiro" || condicaoPagamento === "pix") {
  valorPago = precoProduto - (precoProduto * 15) / 100;
  console.log(
    "Preço normal é : " +
      precoProduto +
      " - forma de pagamento é: " +
      condicaoPagamento +
      " 15% desconto  - Preço pago é = " +
      valorPago
  );
} else if (condicaoPagamento === "duasVezes") {
  valorPago = precoProduto;
  console.log(
    "Preço normal é : " +
      precoProduto +
      " - forma de pagamento é: " +
      condicaoPagamento +
      "sem desconto  - Preço pago é = " +
      valorPago
  );
} else if (condicaoPagamento === "acimaDuasVezes") {
  valorPago = precoProduto + (precoProduto * 10) / 100;
  console.log(
    "Preço normal é : " +
      precoProduto +
      " - forma de pagamento é: " +
      condicaoPagamento +
      "15% desconto  - Preço pago é = " +
      valorPago
  );
} else {
    console.log('Erro! Inicie o programa -   Digite a forma correta da pagamento | debito | dinheiro | pix | duasVezes | acimaDeDuasVezes');
}
