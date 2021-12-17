function dizOla(praquem, cb) {

    if (typeof cd === 'function') {

        return cb(praquem)
    }

    return console.log('ola', praquem);
}

function boaNoite(praquem) {

    console.log('boa noite', praquem);
}

function boaTarde(praquem) {

    console.log('boa tarde', praquem);
}

dizOla('Maria', boaNoite)
dizOla('João', boaTarde)

dizOla('Ana', function(who) {

    console.log('bom dia', who);
})