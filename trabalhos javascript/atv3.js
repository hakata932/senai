//var nota1 = Number(prompt("Digite sua nota da 1ª prova: "))
//var nota2 = Number(prompt("Digite sua nota da 2ª prova: "))
//var nota3 = Number(prompt("Digite sua nota da 3ª prova: "))
//var media = (nota1 + nota2 + nota3) / 3
//if(media >= 7){
//    document.write("Sua média é " + media + ", parabéns! Você foi aprovado.")
//} else{
//    document.write("Sua média é " + media + ", infelizmente, você foi reprovado.")
//}
var idade = Number(prompt("Digite sua idade:"))
if(idade < 13){
    document.write("Você é uma criança.")
} else if(idade >= 13 && idade < 18){
    document.write("Você é um adolescente.")
} else if(idade >= 18 && idade < 60){
    document.write("Você é um adulto.")
} else{
    document.write("Você é um idoso.")
}