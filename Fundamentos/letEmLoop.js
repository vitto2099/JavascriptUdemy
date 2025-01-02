const funcaoTeste = []

for (let i = 0; i < 10; i++) {
    console.log(i)
    funcaoTeste.push(function () {
        console.log("________")
        console.log(i)
    })
}

funcaoTeste[2]()
funcaoTeste[8]()