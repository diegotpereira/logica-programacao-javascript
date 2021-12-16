var produtos = [
    { 'Nome': 'Caneta', 'Preço': 2 },
    { 'Nome': 'Lapis', 'Preço': 1.2 },
    { 'Nome': 'Borracha', 'Preço': 0.5 }
]

var msg = ''

for (var i = 0; i < produtos.length; i++) {

    console.log(produtos[i].Preço)

    msg += '<h2>Produto: ' + produtos[i].Nome + '</h2>'
    msg += '<h2>Preço: ' + produtos[i].Preço + '</h2>'
}

document.querySelector('#saida').innerHTML = msg