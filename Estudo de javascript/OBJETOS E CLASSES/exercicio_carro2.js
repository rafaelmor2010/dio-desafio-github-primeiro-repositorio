/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível po kilometro 
rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    mediaCombustível;
    distanciaViagem;
    resultadoViagem;
    valorCombustivel;
  
    //criando um método construtor
    constructor(marca, cor, media) {
      this.marca = marca;
      this.cor = cor;
      this.mediaCombustivel = media;
      
    }
  
    calcularGastoPercurso( distancia, valor){
        this.distanciaViagem = distancia;
      this.valorCombustivel = valor;
     return this.resultadoViagem = (distancia / this.mediaCombustivel) * valor;
    
    }

    descrever( ) {
      console.log(`A marca do carro é ${this.marca} a cor é 
          ${this.cor} a média por km rodado ${this.mediaCombustivel}
          
        `);
    }
  }
  
  const chevrolet = new Carro("Chevrolet", "Azul", 10);
chevrolet.descrever();

 console.log( chevrolet.calcularGastoPercurso(100, 4.5));
