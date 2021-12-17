function dizBla(n) {

    return (n > 1) ? dizBla(--n) + ' bla' : 'bla'
}

//bla bla
console.log(dizBla(2))

// bla bla bla bla bla
console.log(dizBla(5));

// bla bla bla bla bla bla
console.log(dizBla(6));

// bla bla bla bla bla bla bla
console.log(dizBla(7));