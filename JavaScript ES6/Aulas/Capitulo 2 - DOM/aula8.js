
/*
const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
})

img.addEventListener('click', callback); // 🚀
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function() {
  console.log('Clicou');
})
img.addEventListener('click', () => {
  console.log('Clicou');
})

function callback(event) {
  console.log(event);
}

img.addEventListener('click', callback);


const img = document.querySelector('img');

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);

//==============================================
function handleKeyboard(event) {
    if(event.key === 'a')
      document.body.classList.toggle('azul');
    else if(event.key === 'v')
      document.body.classList.toggle('vermelho');
  }
  
  window.addEventListener('keydown', handleKeyboard);

  const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});
*/

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// Atuamente existe scroll suave por propriedade CSS

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) =>{
    link.addEventListener('click', handleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
function handleElemento(event){
    console.log(event.currentTarget);
    // event.currentTarget.remove();
}  

/*
const AllElements = document.querySelectorAll('body *');
    AllElements.forEach((elemento) => {
    AllElements.addEventListener('click', handleElemento)
})
*/


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event){ 
 if(event.key === 't'){
    document.documentElement.classList.toggle('texto-maior')
 }
}

window.addEventListener('keydown', handleClickT)