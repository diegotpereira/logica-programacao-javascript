 var produto1 = new Object()
 produto1.nome = 'Caneta'
 produto1.preco = 2.2
 produto1.estoque = 10

 produto1.comprar = function(qtd) {

     if (!qtd) {

         qtd = 1
     }

     console.log('Comprou a caneta');

     this.estoque = this.estoque - qtd
     console.log(this.estoque);
 }

 var msg = ''


 msg += 'nome: ' + produto1.nome + '<br>'
 msg += 'preço: ' + produto1.preco + '<br>'
 msg += 'estoque: ' + produto1.estoque + '<br>'

 document.querySelector('#saida').innerHTML = msg