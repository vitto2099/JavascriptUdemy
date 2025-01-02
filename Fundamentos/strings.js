const escola = "Cod3r"; // Declara uma constante chamada `escola` e atribui a string "Cod3r".

console.log(escola); // Exibe a string "Cod3r" no console.
console.log(escola.charAt(3)); // Retorna o caractere na posição 3 da string (índice zero-based), que é "3".
console.log(escola.charAt(0)); // Retorna o caractere na posição 0 da string, que é "C".
console.log(escola.charCodeAt(3)); // Retorna o código Unicode do caractere na posição 3, que é o valor correspondente ao "3" (51).

console.log(escola.substring(1)); // Retorna uma substring da posição 1 até o final, ou seja, "od3r".
console.log(escola.substring(0, 3)); // Retorna uma substring da posição 0 até a 3 (não inclui o índice 3), ou seja, "Cod".

console.log("Escola ".concat(escola).concat(" !!!")); // Concatena as strings "Escola ", "Cod3r", e " !!!", resultando em "Escola Cod3r !!!".

console.log(escola.replace(3, "e")); // Substitui o caractere "3" por "e" na string, resultando em "Coder".

console.log("ana,maria,pedro".split(",")); // Divide a string em um array de strings usando a vírgula como delimitador, retornando ["ana", "maria", "pedro"].
