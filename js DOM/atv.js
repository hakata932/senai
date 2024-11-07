let h1 = document.createElement('h1')
let textoNovo = document.createTextNode('texto novo')
h1.appendChild(textoNovo)

let corpo = document.querySelector('body')
corpo.appendChild(h1)
//corpo.removeChild(h1) para remover o comando