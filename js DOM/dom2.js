let h1 = document.querySelector('h1')
console.log(h1)

let novoParag = document.createElement('p')
let texto = document.createTextNode('Texto criado pelo js')
novoParag.appendChild(texto)
let corpo = document.querySelector('body')
corpo.appendChild(novoParag)