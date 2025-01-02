console.log(typeof Object)// sem estanciar
console.log(typeof new Object) // estanciado

const cliente = function () { }
console.log(typeof cliente)// sem estanciar
console.log(typeof new cliente)// estanciado

class produto { }
console.log(typeof produto)// sem estanciar
console.log(typeof new produto)// estanciado