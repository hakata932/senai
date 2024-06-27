//var contagem = 0
//while(contagem <= 200){
//   document.write(contagem + "<br>")
//    contagem = contagem + 5
//}

var numero = 0
var guardar =0
var soma = 0
var soma2 = 0
for(numero; numero <= 10; numero++){
    if(numero % 2 == 0){
        guardar = numero
        soma = numero + numero
        soma2 = guardar + soma
        
    }
}
document.write(soma2 + "<br>" + "<br>")