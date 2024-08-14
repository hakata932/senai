let botao = document.querySelector('#botao')

botao.addEventListener('click', formulario)

function formulario(){
    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let telefone = document.querySelector('#numero').value

    if(nome == '' || sobrenome == '' || telefone == ''){
        return false
    }

    alert('Meu nome é ' + nome)
    alert('Meu sobrenome é ' + sobrenome)
    alert('Meu telefone é ' + telefone)
}