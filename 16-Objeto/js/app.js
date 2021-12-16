var usuario1 = new Object()
usuario1.nome = 'Maria'
usuario1.email = 'maria@gmail.com'

var usuario2 = new Object()
usuario2.nome = 'João'
usuario2.email = 'joao@gmail.com'

var usuario3 = new Object()
usuario3.nome = 'José'
usuario3.email = 'jose@gmail.com'

var usuarios = new Array(usuario1, usuario2, usuario3)

console.log(usuarios)

var msg = ''
var x = 0

while (usuarios[x]) {

    console.log(usuarios[x].nome)
    msg += usuarios[x].nome + ' - ' + usuarios[x].email + '<br>'
    x++
}

document.querySelector('#saida').innerHTML = msg