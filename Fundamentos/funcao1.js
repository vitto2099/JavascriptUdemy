function printSoma(a, b) { // função  feita atraves de variavel
    console.log(a + b)
}
printSoma(5, 5) // posso pedir retorno direto pela função
//printSoma(2) // se nao tiver o valor relacionado buga tudoda pra evitar fazendo um dos valores sem = a 0

function printSubtracao(a, b = 0) {// caso arme a função com return Obrigatoriamente tem que puxar pelo console.log()
    return a + b
}

console.log(printSubtracao(2,))//unica forma de ver atraves do return