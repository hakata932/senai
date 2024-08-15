//let botao = document.querySelector('#botao')
//botao.addEventListener('click', resultado)

//function resultado(){
//    alert('Você clicou no botão')
//}

let botao = document.querySelector('#botao')
botao.addEventListener('click', resultado)
let cor = document.querySelector('body')

function resultado(){
    cor.style.backgroundImage = 'url(https://th.bing.com/th/id/OIP.z6pGwFhPvV4_Yn2ruRtQTwHaEK?rs=1&pid=ImgDetMain)'
}