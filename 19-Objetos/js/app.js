// Sintaxe formal
var obj = new Object();
obj.nome = "meu objeto"
obj.funcao = function() {

    console.log('eu sou um metodo');
}

console.log(obj.nome);

obj.funcao()


// Sintaxe literal
var obj2 = {
    nome: 'meu objeto número 2',
    funcao: function() {

        console.log('eu sou o metodo do objeto número 2');
    }
}

console.log(obj2.nome);
obj2.funcao()

// Objetos customizados
var endereco1 = {

    'logradouro': 'rua tal',
    'numero': 2
}

var endereco2 = {

    'logradouro': 'rua aquela',
    'numero': 20
}


var endereco3 = {

    'logradouro': 'rua essa',
    'numero': 10
}

var minhaArray = new Array(1, 2, 3)
var hoje = new Date()
var obj3 = new Object()

function Endereco(log, n, cep) {
    this.logradouro = log
    this.n = n
    this.cep = cep

    this.enderecoCompleto = function() {

        return this.logradouro + ', ' + this.n
    }
}

var endereco1 = new Endereco('rua tal', 2, '12345-678')
var endereco2 = new Endereco('rua essa', 10, '98745-432')

console.log(endereco1.enderecoCompleto());
console.log(endereco2.enderecoCompleto());