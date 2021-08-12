

function areaQuadrado(lado) {
    return lado * lado;
  }
  
  areaQuadrado(4) // 16
  areaQuadrado(5) // 25
  areaQuadrado(2) // 4
  
  addEventListener('click', function() {
    console.log('Clicou');
  });
  // A função possui dois argumentos
  // Primeiro é a string 'click'
  // Segundo é uma função anônima

  // Crie uma função para verificar se um valor é Truthy

function isTrue(dado){
    return !!dado;
  }
  var itsTrue = isTrue('Salve')
  console.log(itsTrue)
  
  // Crie uma função matemática que retorne o perímetro de um quadrado
  // lembrando: perímetro é a soma dos quatro lados do quadrado
  
  function perimetroq(lado){
    return lado * 4;
  }
  
  // Crie uma função que retorne o seu nome completo
  // ela deve possuir os parâmetros: nome e sobrenome
  
  function nome (nome, sobrenome){
    return `${nome} ${sobrenome}`;
  }
  
  // Crie uma função que verifica se um número é par
  
  function epar (numero) {
    var modulo = numero % 2;
  
    if(modulo !== 0){
      return true;
    } else {
      return false;
    }
  }
  
  // Crie uma função que retorne o tipo de
  // dado do argumento passado nela (typeof)
  
  function typedata(tipodado){
    return typeof tipodado;
  }
  
  // addEventListener é uma função nativa do JavaScript
  // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
  // utilize essa função para mostrar no console o seu nome completo
  // quando o evento 'scroll' ocorrer.
  
  addEventListener('click', function(){
    console.log('DevZeth Learning')
  });
  
  // Corrija o erro abaixo
  var totalPaises = 193;
  
  function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  