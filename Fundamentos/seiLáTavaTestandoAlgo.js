// par Nome Valor
const ola = 'oi turu bem'
let nome = 'bruno'
console.log(typeof nome)
console.log(ola)

const saudacao = 'salve salve '
console.log(saudacao)

function printOi() {
    const oi = 'oi como vai'
    return oi
}
console.log(printOi()) // se quiser puxar o nome tem que fazer atraves de return


const bruno = {
    nome: 'bruno da silva',
    idade: '23',
    peso: '80kg',
    altura: '1.80',
}

function printOlar (){
    let olar = 'oi eu sou '
    return olar + JSON.stringify(bruno)
}

console.log(printOlar())