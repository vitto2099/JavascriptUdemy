{ { { var teste = ("Hello World") } } } // VAR é acessivel dentro de blocos
console.log(teste)
/* evitar utilizar esse escopo global
é muito facil utilizar novamente o mesmo nome e pode bugar o codigo */

{
    {
        {
            let teste2 = ("Palmito")
            console.log(teste2)
        }
    }
} // LET não é acessado por fora do bloco
