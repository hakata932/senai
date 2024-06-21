//var inicio = 0
//do{
//    document.write("Hello <br>")
//    inicio++
//} while(inicio < 7)

//var numero = 0
//var soma = 0
//while(numero < 10){
//    soma = soma+numero
//    numero++
//} 
//document.write(soma)

//var num = 100
//var sub = 2
//document.write(num + "<br>")
//while(num > 0){
//    num = num - sub
//    document.write(num + "<br>")
//}

//while(true){
//    var nota = Number(prompt("Dê uma nota entre 0 a 10."))
//    if(nota >= 0 && nota <= 10){
//        document.write("Você deu a nota: " + nota)
//        break
//    } else{
//        alert("Tente inserir um número válido.")
//    }
//}

alert("Bem vindo ao sistema, crie sua conta")
var nome = prompt("Digite seu nome de usuário: ")
var senha = Number(prompt("digite sua senha de usuário (apenas números):"))
alert("Agora, logue na sua conta.")
while(true){
    var verNome = prompt("Digite seu nome de usuário: ")
var verSenha = Number(prompt("digite sua senha de usuário (apenas números):"))
    if(nome == verNome && senha == verSenha){
        alert("Bem vindo ao sistema")
        break
    } else if(verNome == senha || verSenha == nome){
        alert("Não é aceito a senha igual ao nome de usuário, tente novamente.")
    } else{
        alert("Conta não encontrada, tente novamente.")
    }
}