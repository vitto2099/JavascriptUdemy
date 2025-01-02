//é possivel armazenar uma função dentro de uma variavel
let printSoma = function printSoma(a, b = 0) {
    console.log(a + b)
}
printSoma(50, 25)

// função em ARROW (faz com o Simbolo =>)

let printMenos = (a, b = 0) => {// fiz com return
    return (a - b)
}
console.log(printMenos(10, 4))// sempre que a função feita com return puxar atraves de console.log

// função com return simples

let printDiv = (a, b = 2) => a / b //da pra fazer sem escrever o return seria uma função de unica linha
console.log(printDiv(100, 2))

