// Abreviação de area: function() {} para area() {}

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2; // this irá retornar o próprio objeto
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

var menu = {
    width: 800,
  }
  
  menu.hasOwnProperty('width') // true
  menu.hasOwnProperty('height') // false

// hasOwnProperty é um método de Object

//============================================================================

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
    nome: 'José Lucas',
    sobrenome: 'Cabral Braga',
    idade: 20,
    cidade: 'recife',
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

carro.preco = 3000;
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  var cao = {
      raca: 'labrador',
      cor: 'preto',
      idade: 10,

      latir(pessoa){
        if(pessoa === 'homem'){
            return 'Woof'
        } else {
            return 'nothing'
        }
      }
  }