// ===== Variáveis =====
// Declarando variáveis em JavaScript
let nome = "Vitor"; // Variável que pode ser alterada
const idade = 22;    // Constante que não pode ser alterada
var cidade = "Mafra"; // Variável com escopo global ou de função

console.log(nome, idade, cidade); // Exibe os valores no console

// ===== Funções =====
// Função Declarativa
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Vitor")); // Chama a função e exibe "Olá, Vitor!"

// Função Anônima
const soma = function(a, b) {
    return a + b;
};
console.log(soma(3, 5)); // Chama a função e exibe 8

// Arrow Function
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // Chama a função e exibe 20

// ===== Objetos =====
// Declarando um objeto
const pessoa = {
    nome: "Vitor",
    idade: 22,
    cidade: "Mafra",
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}!`;
    }
};
console.log(pessoa.nome);        // Acessa o valor "Vitor"
console.log(pessoa.saudacao()); // Chama o método e exibe "Olá, meu nome é Vitor!"

// ===== Condicionais =====
// Estrutura básica de condicional
const numero = 10;
if (numero > 5) {
    console.log("O número é maior que 5.");
} else {
    console.log("O número é 5 ou menor.");
}

// ===== Loops =====
// Loop for
for (let i = 0; i < 5; i++) {
    console.log(`Valor de i: ${i}`);
}

// Loop while
let contador = 0;
while (contador < 3) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// ===== Arrays =====
// Declarando um array
const frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // Acessa o primeiro item: "Maçã"

// Iterando sobre um array
frutas.forEach((fruta) => {
    console.log(fruta);
});

// ===== Manipulação de DOM (caso use no navegador) =====
// Acessando elementos HTML
// document.querySelector('#idDoElemento');
// document.getElementById('idDoElemento');
