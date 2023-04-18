/* 
    2- Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacdade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instacie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura
    e peça ao José para dizer seu valor do IMC;
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }

  classificarImc(){
    const imc = this.calcularImc();
    if (imc < 18.5) {
        return ("está abaixo do peso" );
      } else if (imc >= 18.5 && imc < 25) {
        return  (" peso normal " );
      } else if (imc >= 25 && imc < 30) {
        return (" está acima do peso " );
      } else if (imc >= 30 && imc < 40) {
        return (" está obeso " );
      } else if (imc > 40) {
        return (" obesidade grave " );
      }
  }

  descrever() {
    console.log(` Seu nome é : ${this.nome}, seu peso é : ${this.peso}, 
     sua altura é : ${this.altura} e seu IMC é :${this.calcularImc()} sua 
     classificação é : ${this.classificarImc()}`);
  }
}

const jose = new Pessoa("José", 70, 1.75);
//console.log(jose.calcularImc());
jose.descrever();

console.log('-------------------------------');

const rafael = new Pessoa('Rafael', 78, 1.72);
rafael.descrever();

console.log('-------------------------------');

const elaine = new Pessoa('Elaine ', 56, 1.57);
elaine.descrever();