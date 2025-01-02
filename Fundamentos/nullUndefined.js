let valor;// nao definida
console.log(typeof valor)

valor = null //valor nulo
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir o que é, deixar com que a linguagem defina para mim
console.log(!!produto.preco)
console.log(produto)

delete produto.preco
console.log(produto)
produto.preco = null
console.log(produto)
