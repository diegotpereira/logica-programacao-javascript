var nome = prompt('Digite seu primeiro nome: ')
var comprimento = nome.length

switch (comprimento) {
    case (1):
        alert('Oi')
        break

    case (2):
        alert('Olá')
        break

    case (3):
        alert('Teste')
        break

    default:
        alert('Não deu')
}

var numero = 10

switch (typeof numero) {
    case "number":
        alert('O valor é um número.')
        break

    case "string":
        alert('O valor é uma String')
}

if (typeof numero === 'number') {

    alert('O valor é um número')
} else if (typeof numero === 'string') {
    alert('O valor é uma String')
}