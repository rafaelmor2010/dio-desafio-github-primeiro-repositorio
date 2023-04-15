function quadrado(valor) {
  return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

//funcao juros
function incrementaJuros(valor, percentualJuros) {
  const valorDeacrecimo = (percentualJuros / 100) * valor;
  return valor + valorDeacrecimo;
}

console.log(incrementaJuros(100, 10));
console.log(incrementaJuros(100, 15));
