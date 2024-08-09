//let area = document.querySelector('#area')
//area.addEventListener('click', clicar)
//area.addEventListener('mouseenter', entrar)
//area.addEventListener('mouseout', sair)

//function clicar(){
//    area.innerHTML = 'clicou'
//}
//function entrar(){
//    area.innerHTML = 'entrou'
//}
//function sair(){
//    area.innerHTML = 'saiu'
//}

//outro método de realizar o mesmo código:

let area = document.querySelector('#area')
area.addEventListener('click', () => {
    area.innerHTML = 'clicou'
})
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)