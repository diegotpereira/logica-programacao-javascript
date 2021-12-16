var nJogador1 = prompt('Número do jogador 1')
nJogador1 = parseInt(nJogador1)

var nJogador2 = prompt('Número do jogador 2')
nJogador2 = parseInt(nJogador2)

// se números forem iguais mostrar
// mensagem de empate
if (nJogador1 === nJogador2) {

    alert('Vocês empataram!')

} else {

    // sorteio número entre 0 e 1
    var nSorteado = parseInt(Math.random() * 2)

    // se o número sorteado for 0,
    // ganha quem escolher o número
    // menor.
    if (nSorteado === 0) {

        if (nJogador1 < nJogador2) {

            alert('A vitória é do jogador 1')

        } else {

            alert('A vitória é do jogador 2')
        }

        // Se o número sorteado for 1, ganha
        // quem escolher o número MAIOR    
    } else {

        if (nJogador1 > nJogador2) {

            alert('A vitória é do jogador 1')
        } else {
            alert('A vitória é do jogador 2')
        }
    }
}