let posicao_inicial = 0
document.addEventListener("keydown", animacao)
function animacao(evento){
    let img = document.querySelector('img')
    let elemento = document.querySelector('#elemento')
    if(evento.code === 'ArrowRight'){
        posicao_inicial = posicao_inicial + 10

        elemento.style.left = posicao_inicial + 'px'
        img.classList.remove('invertido')
    }
    else if(evento.code === 'ArrowLeft'){
        posicao_inicial = posicao_inicial - 10
        elemento.style.left = posicao_inicial + 'px'
        img.classList.add('invertido')
    }
}