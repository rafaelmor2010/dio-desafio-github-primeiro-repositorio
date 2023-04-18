// criando uma classe pessoa
//A classe é uma definição e a instância é uma ocorrência

class Pessoa {
  //como é uma pessoa

  nome;
  idade;
  anoDeNascimento;
  //O Constructor é o que acontece quando a classe pessoa é instanciada - sempre
  // quando a classe é instanciada sempre passa pelo constructor
  constructor(nome, idade) {
    //passando informações por parametros
    this.nome = nome; //pegando os atributos da classe para poder passar por parametro
    this.idade = idade; //pegando os atributos da classe para poder passar por parametro
    //mostrando ano de nascimento
    this.anoDeNascimento = 2022 - idade;
  }

  //método criado em function
  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

// instancia é uma ocorrência de uma pessoa

//instanciar a classe pessoa
const rafael = new Pessoa("Rafael Morales", 40); //passando por parametro

const dodo = new Pessoa("Kenji", 36); //passando por parametro

// também posso chamar método dentro da classe

rafael.descrever();
dodo.descrever();

//imprimindo os dados da pessoa com ano de nascimento
console.log(rafael);
console.log(dodo);
