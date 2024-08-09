let area = document.querySelector('#area')
function clicar(){
    area.style.backgroundColor = 'blue'
    area.style.color = 'white'
    area.innerHTML = 'você clicou aqui'
}
function sair(){
    area.style.backgroundColor = 'green'
    area.innerHTML = 'você saiu'
}
function entrar(){
    area.style.backgroundColor = 'red'
    area.innerHTML = 'você entrou'
}
function limpar(){
    area.style.backgroundColor = 'transparent'
    area.innerHTML = 'clique aqui para interagir'
    area.style.color = 'black'
}