
// Arithmetic operators

// Todas operações referentes às contas (+, -, *, /, **)
let a = 5;
let b = "5";

console.log(a + b); // 55

// Comparison operators

// São booleanos, então o que ele retorna é true/false.
console.log(a > b); // false

// Diferenças de igualdade e igualdade estrita:
console.log(a === b); // false. Esse tipo de operador além de verificar se uma variável é igual a outra, ela também verifica o tipo. Por exemplo, uma string 5 é igual a um número 5, mas não é estritamente igual.
console.log(a == b); // true

// Logical operators

// Combina o resultado booleano com o uso de and, or

let c = true;
let d = false;

console.log(c && d); // false

// Assignment operators

// Usado para operar dentro de uma variável que já possua valor

let e = 10;
e += 5;
e -= 2;

// Unary Operators

// Opera através de uma variável apenas. Muito utilizado em loops.

e++;
e--;

// Typeof operator

let text = "hello"
console.log(typeof text); // verifica o tipo da variável
