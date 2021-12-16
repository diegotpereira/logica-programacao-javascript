var saida = document.querySelector('#saida')

var n1 = prompt('Digite um valor: ')
n1 = parseFloat(n1)

escreve()

function escreve() {
    saida.innerHTML = n1
}

function somar() {

    var n = prompt('Digite um novo valor')
    n = parseFloat(n)

    // n1 = n1 + n
    n1 += n

    escreve()
}

function subtrair() {

    var n = prompt('Digite um novo valor')
    n = parseFloat(n)

    // n1 = n1 - n
    n1 -= n

    escreve()

}

function multiplicar() {

    var n = prompt('Digite um novo valor')
    n = parseFloat(n)

    // n1 = n1 * n
    n1 *= n

    escreve()
}

function dividir() {

    var n = prompt('Digite um novo valor')
    n = parseFloat(n)

    // n1 = n1 / n
    n1 /= n

    escreve()
}