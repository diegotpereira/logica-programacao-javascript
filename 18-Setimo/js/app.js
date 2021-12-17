var msg = ''

var pessoa = {
    nome: 'Fulano',
    sobrenome: 'De Tal',
    rg: '11.222.333-44',
    tel: '(11)88888-9999'
}

for (propriedade in pessoa) {

    console.log(propriedade, ': ', pessoa[propriedade]);
}

document.querySelector('#saida').innerHTML = msg