alert("Bem vindo ao sistema, crie sua conta")
var nome = prompt("Digite seu nome de usuário: ")
var senha = Number(prompt("digite sua senha de usuário (apenas números):"))
alert("Agora, logue na sua conta.")
var verNome = prompt("Digite seu nome de usuário: ")
var verSenha = Number(prompt("digite sua senha de usuário (apenas números):"))
if(nome == verNome && senha == verSenha){
    document.write("Bem vindo ao site!" + "<br>" + "<img height=700px src='https://i.redd.it/ypkem8jwzwn71.png' alt='não existe'>")
} else{
    alert("Conta não encontrada.")
    document.write("Reinicie a página e tente novamente inserir os campos corretamente." + "<br>" + "<img height=500px src='https://th.bing.com/th/id/R.4cdb36d90046a635133f6eb3575c3f91?rik=wbpNp05TzW3Emw&riu=http%3a%2f%2fpa1.narvii.com%2f6490%2fa75a3e7391d9cd98ce99df7c7c8b01d50da79a32_00.gif&ehk=fDYwSuJM6U%2fZj8vLZUIilolQ4UfRjPuUwuViuFE2Gno%3d&risl=&pid=ImgRaw&r=0'")
}