//Faça um programa para calcular o valor gasto de combustível em uma viagem.
// você terá 5 variáveis utilizando estruturas condicionais. Sendo elas:
//- 1 Preço do combustível;
//valor médio de gasto do carro;
//3 Distância em KM da viagem;
//imprima no console o valor que será gasto para realizar esta viagem
console.log(
  "---------------- Programa gasto de combustível ------------------ "
);
const precoAlcool = 4.5;
const precoGasolina = 5.5;
let kmPorLitros = 10;
let distanciaKm = 100;
let resultado;
let tipoCombustivel = "gasolina";

if (tipoCombustivel === "alcool") {
  resultado = (distanciaKm / kmPorLitros) * precoAlcool;
  console.log("Combustível utilizado foi alcool valor gasto:" + resultado);
} else if (tipoCombustivel === "gasolina") {
  resultado = (distanciaKm / kmPorLitros) * precoGasolina;
  console.log("Combustível utilizado foi gasolina valor gasto:" + resultado);
} else {
  console.log("Erro do tipo combustível");
}
