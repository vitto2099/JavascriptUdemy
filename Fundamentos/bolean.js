let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

let ativo = 1
console.log(!ativo)// ( ! ) serve para declarar se é falso, dois ( !! ) declara verdadeiro pois negativa a afirmação

// passa como verdadeiro
console.log(!!" ") //um espaço de texto com espaço (com algum conteudo)
console.log(!! -44) //numeros negativos
console.log(!!2) //numeros positivos
console.log(!! "Strings")// textos
console.log(!!Infinity)//dados
console.log(!!(isAtivo = true))// atribuiçoes que retornam falso

// passa como falso
console.log(!!0)// 0 retorna falso
console.log(!!"")//espaços vazios
console.log(!!null) // vazio
console.log(!!NaN) //not a number
console.log(!!undefined) // nao definido


// so retorna os verdadeiro se mais de um estiver presente
console.log(!!0 || null || "é verdade esse Bilhete " || 123)