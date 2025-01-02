const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
console.log(pessoa)

const { nome, idade } = pessoa // vai excluir os atributos do objeto pessoa
console.log(nome, idade)
console.log(pessoa)

const { nome: n, idade: i } = pessoa // vai excluir os atributos do objeto pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa 
console.log(sobrenome, bemHumorada)