// criando uma classe pessoa
//A classe é uma definição e a instância é uma ocorrência

class Pessoa {
  //como é uma pessoa

  nome;
  idade;
//O Constructor é o que acontece quando a classe pessoa é instanciada - sempre
// quando a classe é instanciada sempre passa pelo constructor
  constructor (){

  }

  //método craido em function
  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

// instancia é uma ocorrência de uma pessoa

//instanciar a classe pessoa
const rafael = new Pessoa();
rafael.nome = "Rafael Morales de Lima";
rafael.idade = 41;

const dodo = new Pessoa();
dodo.nome = "Kenjy";
dodo.idade = 36;

console.log(rafael);
console.log(dodo);

// também posso chamar método dentro da classe

rafael.descrever();
dodo.descrever();