//alert("Digite sua idade para entrar no sistema, ou digite 'VIP' caso tenha passe VIP.")
//var idade = prompt("Digite sua idade")
//if(idade >= 18 || idade == "VIP"){
//    document.write("Bem vindo ao sistema.")
//} else{
//    document.write("Você não tem idade para logar no sistema.")
//}

var velocidade = Number(prompt("Em que velocidade o veículo está?"))
if(velocidade >= 40 && velocidade < 60){
    document.write("Velocidade ideal.")
} else if(velocidade >=60 && velocidade < 120){
    document.write("Velocidade alta")
} else if(velocidade >=120){
    document.write("Muito rápido, multado.")
}