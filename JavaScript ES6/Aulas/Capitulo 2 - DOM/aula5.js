// ForEach & Arrow Function

/*
const AllImg = document.querySelectorAll('img');
let i = 0;

AllImg.forEach(function(item, index, array){
    console.log(item, index, array)
});

Códigos semelhantes 

const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
}); 

const titulos = document.getElementsByClassName('title');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

*/

/*
Sintaxe curta em relação a function expression. 
Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos. 

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});
*/ 

//==========================================================================

// Mostre no console cada parágrado do site
const allP = document.querySelectorAll('p');

console.log(allP)

allP.forEach((item) => {
    console.log(item);
});

// Mostre o texto dos parágrafos no console

allP.forEach((item) => {
    console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => { console.log(i++)});

imgs.forEach(() => i++);
