console.log(typeof console)

const obj1 = {}         // obj1 é um objeto
obj1.nome = 'bola'  // nome é um atributo de obj1

function OBJ(nome) {    // OBJ é uma função
    this.nome = nome; // this torna o atributo visivel fora da função
}

const obj2 = new OBJ ('cadeira')    // new cria um objeto a partir de uma função
const obj3 = new OBJ ('mesa') // new cria um objeto a partir de uma função

console.log(obj2.nome)  // cadeira