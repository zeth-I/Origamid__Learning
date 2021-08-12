var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

/* 
OPERADOR TERNÁRIO
Abreviação de condicionais com if e else
*/

var idade = 20;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

/*
IF ABREVIADO
Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código
*/

var possuiFaculdade = true;

//if(possuiFaculdade) console.log('Possui faculdade');
//else console.log('Não possui faculdade');

// organizando
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');



// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCarro) ? 'Dar crédito ao cliente' : 'Negar crédito ao cliente';
console.log(darCredito)
