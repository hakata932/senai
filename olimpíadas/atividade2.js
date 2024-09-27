//programação síncrona (comum)
var nome = "Carlos"

document.write(nome)

var idade = 13

document.write(idade)

function nome(){
    document.write('Carlos')
}
//assíncrona
var comida = 'Banana'
console.log('teste1')
setTimeout(function(){ //setTimeout é o nome da função, ela é nativa do js
    console.log('teste2')
}, 10000)
console.log('teste3')
