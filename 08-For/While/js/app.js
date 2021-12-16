var numero = prompt('Digite um valor')
numero = parseFloat(numero)

// Usando loop for
for (var i = 1; i < 1000; i++) {

    document.write(numero + ' x ' + i + ' = ' + (numero * i) + ' <br>')
}

// Usando loop while
var indice = 1

while (indice <= 1000) {

    document.write(numero + ' x ' + indice + ' = ' + (numero * indice) + ' <br>')
    indice = indice + 1
}

document.write('Saiu do loop')