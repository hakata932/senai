let funcionarios=[]
alert('Bem vindo ao sistema de cadastro, selecione uma das opções:')
while(true){
    let num = Number(prompt('"1" para idade, nome e email do funcionário;\n "2" para mostrar os funcionários;\n "3" para excluir um funcionário do sistema;\n "4" para sair do sistema.'))
    if(num == 1){
       
        var nome = prompt('Digite o nome do funcionário.')
        var idade = Number(prompt('Digite a idade do funcionário.'))
        var email = prompt('Digite o email do funcionário.')
        
        funcionarios.push(nome)
    }
    else if(num == 2){
        if(funcionarios.length == 0){
            alert('Nenhum funcionário cadastrado.')
        } else{
            funcionarios.forEach(function(nome){
                alert(`Funcionários cadastrados: ${nome}.`)
            })
        }
    }
    else if(num == 3){
        var excluir = prompt('Insira o nome do funcionário a ser excluído')
        var indice = funcionarios.indexOf(excluir)
        if(indice !== -1 ){
            funcionarios.splice(indice, 1)
            alert('excluiu')
        }
        else {
            alert('nao encontrado')
        }
    }
    else{
        alert('Sistema encerrado.')
        break
    }
}