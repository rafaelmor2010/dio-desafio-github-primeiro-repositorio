//criando classe pessoa

class Pessoa {
  nome;
  idade;
  anoNascimento;
  //passando por parametros as informações dessa pessoa
  constructor(nome, idade, nascimento) {
    this.nome = nome;
    this.idade = idade;
    this.anoNascimento = nascimento;
  }

  descrever() {
    console.log(
      `Meu nome é ${this.nome} e minha idade é ${this.idade} ano nascimento ${this.anoNascimento}`
    );
  }
}
//instaciando a pessoa
const rafael = new Pessoa("Rafael Morales", 41, 1982);
const dodo = new Pessoa("Kenjy", 36, 1986);

rafael.descrever();
dodo.descrever();

//criando comprando pessoas

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome} `);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e  ${p2.nome} tem a mesma idade.`);
  }
}

//instaciando a classe Pessoa
//para não apagar outras instancias la em cima declarei aqui de novo
const rafael2 = new Pessoa("Rafael morales", 40);
const dodo2 = new Pessoa("Kenjy", 36);

compararPessoas(rafael2, dodo2);
