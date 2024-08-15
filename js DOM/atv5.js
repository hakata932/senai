let botao = document.querySelector('#botao')


botao.addEventListener('click', evento)

function evento(){
    let n1 = document.querySelector('#n1').value
    let n2 = document.querySelector('#n2').value
    if(n1 > n2){
        let texto = document.querySelector('p')
        texto.innerHTML = n1
    } else if(n1 < n2){
        let texto = document.querySelector('p')
        texto.innerHTML = n2
    } else{
        let texto = document.querySelector('p')
        texto.innerHTML = 'Os números são iguais ou inexistentes (não preenchidos no formulário)'
    }
}