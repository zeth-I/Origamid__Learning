var nome = 'José';

// Comandos
nome.length; // 4
nome.replace('sé', 'e'); // Joe
nome; // José

// Elementos DOM 

var btn = document.querySelector('.btn');

btn.classList.add('btn-up') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

// nomeie 3 propriedades ou métodos de strings
var rpg = 'Joe Gates';

//length
//replace('Joe','Kyoko')
//fixed

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
/*
btn.addEventListener
btn.appendChild
btn.className
btn.innerHTML
btn.innerText
*/

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }