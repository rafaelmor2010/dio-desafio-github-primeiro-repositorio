//Faça um programa para calcular o valor gasto de combustível em uma viagem.
// você terá 3 variáveis. Sendo elas:
//- 1 Preço do combustível;
//valor médio de gasto do carro;
//3 Distância em KM da viagem;
//imprima no console o valor que será gasto para realizar esta viagem

//Entrada de nosso programa
let kmPorLitros = 10;
let distanciaKm = 1150;
let valorCombustivel = 4.5;
let resultado;


resultado  = (distanciaKm / kmPorLitros)*valorCombustivel;
//toFixed mostrar apenas duas casas decimais
console.log('O gasto de uma viagem de 100KM é de: ' + resultado.toFixed(2) + ' Reais');
