//var contador = 10
//while(contador > 0){
//    document.write("Contando até " + contador + "<br>")
//    contador = contador - 1
//}
while(numero != 3){
    var numero = Number(prompt("Digite um número"))
    if(numero == 3){
        alert("Você digitou 3, Programa encerrado.")
    }
}

var contador = 50
for(contador; contador >= 0; contador--){
    document.write(contador + "<br>")
}