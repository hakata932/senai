//var estados = ['Rondônia', 'Acre', 'Rio de Janeiro', 'São Paulo']
//var encontrado = estados.includes("Acre")
//document.write(`O estado do Acre está no array? ${encontrado}`)

//var lista = [
//    'GIGN',
//    'bope',
//    'tropa de elite',
//    'JJDJD',
//]
//document.write(lista.indexOf('bope'))

//var estados = ['Rondônia', 'Acre', 'Rio de Janeiro', 'São Paulo']
//var qual_estado = 'São Paulo'
//var des_indice = estados.indexOf(qual_estado)
//if(des_indice !== -1){
//    alert(`O nome ${qual_estado} foi encontrado no indice ${des_indice}`)
//} else{
//    alert(`O nome ${qual_estado} não foi encontrado em nenhuma posição.`)
//}

//var carros = ['BMW', 'Ferrari', 'Gol', 'Civic']
//carros[2] = 'corolla'
//alert(carros)

//var estados = ['Rondônia', 'Acre', 'Rio de Janeiro', 'São Paulo']
//document.write('o tamanho do array é ' + estados.length)

//var estados = ['Rondônia', 'Acre', 'Rio de Janeiro', 'São Paulo', 'Tocantins', 'Piauí'];
//
//estados.forEach(function(estados, indices){
//    document.write(`Indice: ${indices} — Estado: ${estados} <br>`)
//})

var estados = ['Rondônia', 'Acre', 'Rio de Janeiro', 'São Paulo', 'Tocantins', 'Piauí'];

estados.forEach(function(estados, indices){
    if(indices == 2){
        document.write(`Indice: ${indices} — Estado: ${estados} <br>`)
    }
})