function salto() {

    for (var i = 0; i < 10; i++) {

        if (i === 5) {

            return 'teste'
        }

        console.log(i);
    }

    console.log('-------');
}

var teste = salto()
console.log(teste);