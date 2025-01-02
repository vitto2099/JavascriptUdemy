const valores = [7.7, 8.5, 9.9, 0, 1, 10]
console.log(valores[0])
console.log(valores[2])
console.log(valores[5])
console.log(valores[100]) // ele é tecnicamente infinito e se mantem indefinido ate eu colocar um valor

valores[7] = 616 // posso alocar mais valores dentro do array
delete valores[5];
valores[0] = 10// mudei o valor de 0
console.log(valores[0], valores[5], valores[7]) // posso alocar mais de um 

console.log(valores.length)// ver quantos elementos tem

console.log(valores.pop())
console.log(valores)

console.log(typeof valores)
