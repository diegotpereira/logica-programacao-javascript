function Endereco(dados) {

    this.logradouro = dados.logradouro || ''
    this.n = dados.n || 0
    this.complemento = dados.complemento
    this.cidade = dados.cidade
    this.estado = dados.estado
    this.cep = dados.cep
}


var aluno = [
    { nome: 'Felipe', id: 112233, endereco: new Endereco({ logradouro: 'rua Faz de conta', n: 2, complemento: 'ap 3', cidade: 'São Paulo', estado: 'SP', cep: '111111-111' }) },
    { nome: 'josé', id: 112244, endereco: new Endereco({ logradouro: 'rua belezura', n: 5, cidade: 'São Paulo', cep: '22222-222' }) },
    { nome: 'João', id: 113344, endereco: new Endereco({ logradouro: 'rua belezura', n: 20, cidade: 'São Paulo', cep: '22222-222' }) },
    { nome: 'Maria', id: 114444, endereco: new Endereco({ logradouro: 'rua chuchu', n: 1, estado: 'RJ', cep: '22222-222' }) },
    { nome: 'Ana', id: 114555, endereco: new Endereco({ logradouro: 'Av belezura', n: 41, estado: 'SP', cep: '33333-33' }) }
]



var msg = ''

document.querySelector('#saida').innerHTML = msg