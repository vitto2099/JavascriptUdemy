const nome = "rebeca"
const concatenacao = "Olá " + nome + " tudo bem"
const cuidado="perigo"


const template = `
      Olá
      ${nome}
      tudo di bão
      `
console.log(concatenacao, template)

//da pra colocar expressoes matematicas

console.log(`1 + 1 = ${1+1}`)
console.log(`100 - 25 = ${100-25}`)//o que conta é o por tras de sifrão e chave

const up = texto => texto.toUpperCase()
console.log(`Ei..... ${up(cuidado)}!`)
    
