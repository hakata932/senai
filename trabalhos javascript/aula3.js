var pessoa1 = Number(prompt("Quantas pessoas estarão na viagem?"))
var pessoa2 = Number(prompt("Quantas crianças estarão na viagem?"))
var soma = pessoa1 + pessoa2 
if(soma == 2 && pessoa2 == 0){
    alert("Detectado duas pessoas na viagem, liberado desconto de 10%")
}
else if(soma == 3 || pessoa2 == 1){
    alert("Detectado duas pessoas e uma criança na viagem, liberado desconto de 15%")
}
else{
    alert("pagamento normal.")
}