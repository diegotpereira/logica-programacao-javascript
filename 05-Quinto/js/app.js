var n1 = parseFloat(prompt('Digite a primeira nota: '))

var n2 = parseFloat(prompt('Digite a segunda nota: '))

var media = (n1 + n2) / 2

if (n1 === 0 || n2 === 0 || media <= 5) {

    alert('Desculpe, não foi desta vez.')
} else {

    alert('Parabéns! Você foi aprovado.')
}