//Programa escrever meu nome
function escrevaNome(nome) {
  console.log("Meu nome é:" + nome);
}

escrevaNome("Rafael Morales de lima");
escrevaNome("Vitor");

//Escreva nome tipo 2

function escrevaNome2(nome2) {
  return "  Meu nome é:" + nome2;
}

//Programa maior de idade pegando informações da função escrevaNome2
function maiorIdade(idade) {
  const maiorDeIdade = idade;
  if (maiorDeIdade >= 18) {
    console.log(
      "Você é maior de idade : " + maiorDeIdade +' anos '+ escrevaNome2( "Rafael Morales")
    );
  } else {
    console.log(
      "Você é menor de idade : " + maiorDeIdade +' anos '+ escrevaNome2(" Rafael Morales")
    );
  }
}

maiorIdade(18);
