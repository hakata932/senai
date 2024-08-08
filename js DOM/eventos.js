function clicar(){
    alert('Você apertou o botão')
    let novoParag = document.createElement('p')
    let texto = document.createTextNode('Texto criado pelo js')
    novoParag.appendChild(texto)
    let corpo = document.querySelector('body')
    corpo.appendChild(novoParag)
}