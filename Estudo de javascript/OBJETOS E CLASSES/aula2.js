const pessoa = {
  nome: "Rafael",
  idade: 41,
  sexo: "M",
  cpf: "037.737.489-06",
  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} - 
    sexo ${this.sexo} e CPF: ${this.cpf}`);
  },
};

//acessar valores com sintaxe mais dinâmica através string
//anotação de coleção
//forma dinâmica dessa forma consigo atribui valor ee sobscrevendo esse objeto
pessoa['nome'] = 'teste';

//acesso direto
pessoa.nome = 'teste';

pessoa.descrever();