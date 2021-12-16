var saida = document.querySelector('#saida')
var mensagem = ''

function mostrarTabuada() {

    var n = prompt('Digite um valor:')

    limparTabuada()

    // Converte o número
    n = parseFloat(n)

    // Variavel que serve de indice
    var i = 1

    // Enquanto indice for menor que 1000
    while (i <= 1000) {

        // Concatena na variavel mensagem 
        mensagem += n + ' x ' + i + ' = ' + (n * i) + ' <br>'
        i++
    }

    saida.innerHTML = mensagem
}

function limparTabuada() {

    mensagem = ''
    saida.innerHTML = mensagem
}