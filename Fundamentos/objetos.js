const array = []// representa array
//par de chave representa objeto
const produto1 = {} //OBJETO
produto1.nome = 'Playstation 5' //ATRIBUTOS
produto1.preco = 'R$ 3000,00' //ATRIBUTOS
produto1.marca = 'Sony' //ATRIBUTOS
produto1.tipo = 'Slim' //ATRIBUTOS

const produto2 = {} //OBJETO
produto2.nome = 'Playstation 5' //ATRIBUTOS
produto2.preco = 'R$ 8000,00' //ATRIBUTOS
produto2.marca = 'Sony' //ATRIBUTOS
produto2.tipo = 'Pro' //ATRIBUTOS

const produto3 = { //OBJETO
    nome: "XBOX",  //ATRIBUTOS
    preco: 'R$4999,00', // reparar que tem que usar : ao inves de =
    marca: 'Microsoft', // e pra pular sempre utilizar a virgula ( , )
    tip: 'Series X',
    produto4: { // eu posso colocar OBJETO dentro de OBJETO mas ele vai puxar o objeto primario sempre
        nome: "XBOX", // da pra usar pra diferenciar e categorizar
        preco: 'R$2000,00',
        marca: 'Microsoft',
        tip: 'Series S',
    }

}

console.log(produto1)
console.log("_____________________________")
console.log(produto2)
console.log("_____________________________")
console.log(produto3)
console.log("_____________________________")
console.log(produto4)