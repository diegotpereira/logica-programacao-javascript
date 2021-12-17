function teste1() {

    console.log('teste1 chamado')
}

function teste2(p) {

    console.log('teste2 chamado recebendo p', p)
}

function executa(cb) {

    console.log('executa chamado')

    if (typeof cb === 'function') {

        cb('parametro de callback')
    }
}

executa(teste1)

executa(teste2)

executa(function(x) {

    console.log('funcao anonima', x);
})