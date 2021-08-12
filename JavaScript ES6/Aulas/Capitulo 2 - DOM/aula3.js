// Seleção por ID

const animais = document.getElementById('animais');
console.log(animais)

//const sapato = document.getElementById('sapato'); --- Retorna Null

const gridSection = document.getElementsByClassName('grid__section');
console.log(gridSection)

const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno)

const imgAnimal = document.querySelectorAll('.animais img');
console.log(imgAnimal)

// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll('img'); // Busque todos as tag's IMG do site
console.log(allImg)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const Allimages = document.querySelectorAll('img[src^="img/imagem"]')
console.log(Allimages, 'Imagens animais')

// Selecione todos os links internos (onde o href começa com #)
const allLinks =  document.querySelectorAll('[href="#"]')
console.log(allLinks,'Links')

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Title = document.querySelector('.description-animals h2')
console.log(h2Title)

// Selecione o último p do site
const LastP = document.querySelectorAll('p')
console.log(LastP[LastP.length - 1])
