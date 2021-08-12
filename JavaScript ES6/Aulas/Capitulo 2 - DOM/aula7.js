const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;
console.log(height);

/*
const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll


rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
*/

// ========================================================
// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop)
const imgs = document.querySelectorAll('img')
imgs.forEach((imagem) =>{
    console.log(imagem.offsetWidth)
});
// Retorne a soma da largura de todas as imagens
function somaImages(){

    const imgs = document.querySelectorAll('img');
    let soma = 0;
    imgs.forEach((imagem) =>{
        soma = soma += imagem.offsetWidth;
});
    console.log(soma)
}
window.onload = function(){
 somaImages();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google

const links = document.querySelectorAll('a');
links.forEach((link)=>{
    const linkWidth = links.offsetWidth;
    const linkHeight = links.offsetHeight;
    
    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link, 'possui acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small = window.matchMedia('(max-width: 720px)').matches;
if(small){
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile');
}
