const funcaoTeste = []

for (let i = 0; i < 10; i++) {
    //console.log(i)
    funcaoTeste.push(function () {
        console.log("teste 1")
        console.log(i)
    })
}

funcaoTeste[2]()
funcaoTeste[3]()

const funcaoTeste2 = []

for (var i = 0; i < 10; i++) {
    //console.log(i)
    funcaoTeste2.push(function () {
        console.log("teste 2")
        console.log(i)
    })
}

funcaoTeste2[2]()
funcaoTeste2[3]()