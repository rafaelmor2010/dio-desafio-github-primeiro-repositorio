

function calculoImc(peso, altura) {
  return peso / (altura * altura);
  //peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return " está abaixo do peso" + imc;
  } else if (imc >= 18.5 && imc < 25) {
    return " peso normal " + imc;
  } else if (imc >= 25 && imc < 30) {
    return " está acima do peso " + imc;
  } else if (imc >= 30 && imc < 40) {
    return "está obeso " + imc;
  } else if (imc > 40) {
    return " obesidade grave " + imc;
  }
}

function main() {
   
  let altura = 1.72;
  let peso = 72;
  let imc = calculoImc(peso, altura);

  console.log(classificarImc(imc));
}

main();
