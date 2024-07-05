//var resultado = []
//var peso = Number(prompt("Qual o seu peso? em quilogramas"))
//var alt = Number(prompt("Qual a sua altura? responda em metros e use '.' no lugar de ',' com centímetros"))
//var imc = peso / (alt * alt)
//resultado.push(imc)
//document.write(resultado)

//var numero = [1, 2, 3, 4, 5, 6, 7]
//if(numero == 7){
//        document.write('o número 7 está presente no aray')
//    } else{
//        document.write('O número 7 não foi encontrado')
//    }

//var num = [1, 2, 3]
//num.pop()
//document.write(num)

//num = [1, 3, 5, 7]
//num.push(10)
//document.write(num)

//num = [3, 5, 7, 0]
//document.write(num[2])

//var num = []
//num.push(9, 2)
//document.write(num)

//var frutas = []
//var qnt = 0
//for(qnt; qnt < 5; qnt++){
//    frutas = prompt('Digite o nome de cinco fruta (uma por vez)')
//    document.write(frutas + ', ')
//} frutas.push()

//var numeros = [10,2,100]
//var valorDoMaior = 0
//var lista = []
//numeros.forEach(function(numero){
//    if(numero > valorDoMaior){
//    valorDoMaior = numero
//    }
//})
//lista.push(valorDoMaior)
//document.write(valorDoMaior)

var numeros = [10, 14, 15, 17, 20, 13]
var lista = []
numeros.forEach(function(number){
    if(number < 15){
        lista.push(number)
    }
})
document.write(lista)