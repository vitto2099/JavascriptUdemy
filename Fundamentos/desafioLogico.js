function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // se qualquer um der certo compra sorvete
    const comprarTv50 = trabalho1 && trabalho2 // se os dois derem certo compra tv 50
    const comprarTv32 = trabalho1 != trabalho2 // se um der certo e o outro não compra tv 32
    const manterSaudavel = !comprarSorvete // se comprar sorvete não mantem saudável

    return { comprarSorvete: comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true)) 
console.log(compras(false, true)) 
console.log(compras(true, false)) 
console.log(compras(false, false)) 