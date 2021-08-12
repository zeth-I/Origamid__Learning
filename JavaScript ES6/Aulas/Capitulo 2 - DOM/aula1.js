// O que é a DOM? (Document Object Model)

/* 
É uma interface que representa documentos HTML e XML através de objetos. 
Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
*/

//window.alert('Isso é um alerta');
//alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

const titulo = document.querySelector('h1');
const tituloClasses = titulo.classList;

/* Função + ativado a função

titulo.addEventListener('click', function(){
    console.log('Clickou no', titulo.innerText)
})

*/
// Primeiro a função separada da ativação

function callback(){
    console.log('Clickou no', titulo.innerText)
}

// ativa a função callback ao click no titulo
titulo.addEventListener('click', callback);

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;



//=================================================================


// Retorne o url da página atual utilizando o objeto window

const hrefPage = window.location.href;
console.log(hrefPage);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elementoAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);


// Retorne a largura da janela 

const largura = window.innerWidth;
console.log(largura);