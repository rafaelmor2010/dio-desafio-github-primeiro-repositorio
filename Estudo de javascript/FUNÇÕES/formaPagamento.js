/* Regra de negócio
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
function aplicarJuros(valor, juros){
    return valor + (valor * juros) / 100;
}

function aplicarDesconto(valor, desconto) {
  return valor - (valor * desconto) / 100;
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
  console.log(
    "Preço normal é : " +
      precoEtiqueta +
      " Pagamento débito  - seu desconto foi de 10% : " +
      aplicarDesconto(precoEtiqueta, 10)
  );
} else if (formaPagamento === 2) {
  console.log(
    "Preço normal é : " +
      precoEtiqueta +
      " Pagamento dinheiro ou pix  - seu desconto foi de 15% : " +
      aplicarDesconto(precoEtiqueta, 15)
  );
} else if (formaPagamento === 3) {
  console.log(
    "Forma de pagamento  em duas vezes sem juros - Valor sem desconto-  Preço normal é : " +
      precoEtiqueta
  );
} else if (formaPagamento === 4) {
  console.log(
    "Preço normal é : " +
      precoEtiqueta +
      " Pagamento acima de duas vezes  - seu juros foi de 10% : " +
      aplicarJuros(precoEtiqueta, 10)
  );
}
