//Arrays

for (var numero = 0; numero < 10; numero++) {
    //console.log(numero);
}

var i = 0;
while (i <= 10) {
  //console.log(i);
  i++;
}
// Retorna de 0 a 10 no console

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  //console.log(videoGames[i]);
}

['a', 'b'].concat(['c'])
['a', 'b'].join(['-'])
['a', 'b', 'c'].slice(1)
['a', 'b', 'c'].indexOf('b')
['a', 'b', 'b'].lastIndexOf('b')
[1, 2, 3].map(x => x * 2)
[2, 15, 3].sort()
[1, 2, 3].reverse()

/* 
videoGames[0] // Switch
videoGames[2] // Xbox

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
*/

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break; // O loop irá parar caso encontro e palavra break
  }
}
// forEach é um método que executa uma função para cada item da Array. 
// É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
videoGames.forEach(function(item) {
  console.log(item);
});

// O argumento item será atribuído dinamicamente

//============================================================================

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < copas.length; i++){
    //console.log(`O Brasil ganhou a copa de ${copas[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for( var fruta = 0; fruta < frutas.length; fruta++ ){
    console.log(frutas[fruta]);
    if(frutas [fruta] === 'Pera'){
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length-1]