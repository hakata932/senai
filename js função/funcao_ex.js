//function Somar(numero1, numero2){
//    return numero1 + numero2
//}
//alert(Somar(2, 33))

//function Somar(numero1, numero2){
//    return numero1 + numero2
//}
//let n1 = Number(prompt('Digite um número para somar:'))
//let n2 = Number(prompt('Digite outro número para somar:'))
//document.write(Somar(n1,n2))

////////////////////////////////////////
//duas formas diferentes de se fazer oo mesmo código:

//function Nome(algumNome){
//    return algumNome
//}
//var nome = prompt('digite seu nome')
//document.write(Nome(nome))

//function Nome(){
//    var nome = 'carlos'
//    return nome
//}
//document.write(Nome())

////////////////////////////////////////

//function Porcento(){
//    var porcentagem = (1/4) * 100
//    return porcentagem
//}
//document.write(Porcento())

function Numero(numero1){
    if(numero1 %2 == 0){
        document.write('true')
    } else{
        document.write('false')
    }
    return numero1
}
var numero = Numero(Number(prompt('Digite um número par (true) ou ímpar (false)')))
document.write()