var saida = document.querySelector('#saida')

var produtos = new Array('Caneta', 'Lapis', 'Tesoura', 'Borracha', 'Caderno', 'Livro')
produtos.push('Compasso', 'Cartolina')

var msg = ''

for (let i = 0; i < produtos.length; i++) {
    msg += 'produto' + (i + 1) + ': ' + produtos[i] + '<br>'

}

saida.innerHTML = msg