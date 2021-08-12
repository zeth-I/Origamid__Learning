// Traversing e manipulação

/*



menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

*/

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt')
// Selecione o DD referente ao primeiro DT
const proximoDd = primeiroDt.nextElementSibling;
console.log(proximoDd);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML;