var numeros = new Array(1, 2, 3, 5, 2)

// Mostrar a soma de números pares do array
var somaDosNumPares = somarNumPares(numeros)

alert('A soma é: ' + somaDosNumPares)


function somarNumPares(numero) {

    var soma = 0

    for (var i = 0; i < numero.length; i++) {

        console.log(i)
        console.log(numero[i]);

        if (!isNaN(numero[i]) && numero[i] % 2 === 0) {

            soma += numero[i]
        }
    }

    return soma
}