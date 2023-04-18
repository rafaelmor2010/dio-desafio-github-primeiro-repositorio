//Trabalhando com objetos

const rafael = {
  nome: "Rafael morales de Lima",
  idade: 25,
};

//adicionando mais um campo no objeto rafael
rafael.altura = 1.72;

//deletar
delete rafael.idade;

console.log(rafael.nome);
console.log(rafael.idade);
console.log(rafael.altura);
console.log(rafael);

//------------------Próximo objeto-------------------------------
console.log('----------------------------------------------------------')
const pessoa = {
  nome: "Elaine Balico",
  idade: 37,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}
    `);
  },
};

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}


pessoa.descrever();

//------------------Próximo objeto-------------------------------
console.log('----------------Mudar a sintaxe deixando mais dinâmico-------------------')