// Global Scope

// Aqui funciona em qualquer parte do código
let globalLet = "i'm global let";
var globalVar = "i'm global var";
const globalConst = "i'm global constant";

// Block scope
{
    // Aqui, só o var continua sendo acessível.
    var variable = "something";
    var variable = "same as here" // Var pode ser redeclarada e pode ser acessada antes da sua declaração, devido ao hoisting (as variáveis e funções são movidas para o topo antes da execução do código).
    let variable2 = "someone"; // Let e Const não podem ser redeclaradas, e não podem ser acessadas antes de sua declaração (temporal dead zone).
    const variable3 = "somewhere"
}


// Ainda falando sobre o Hoisting, se tivermos um cenário assim:

{
    console.log(hoisting);
    var hoisting = 10;
    console.log(hoisting);
    
    /*
        É como se acontecesse isso aqui:
        var hoisting;
        console.log(hoisting); // undefined
        hoisting = 10
        console.log(hoisting); // 10
    */

    functionHoisting();
    function functionHoisting(){
        var functionVar = "olá"
        console.log("Oi");
    }
}
  
console.log(functionVar); // Qualquer variável atribuída dentro de uma função só é acessada lá dentro.


/*
Mesmo que ainda não tenhamos inicializado, o hosting joga a declaração para cima e permite ser acessada antes da inicialização, que exibe o resultado correto depois de definida.
Funciona da mesma forma com as funções, a não ser que elas sejam atribuídas a alguma variável.

Isso não funciona com o Let, por exemplo que retornaria um erro de referência dizendo que não pode ser acessado antes da inicialização. Esta é a diferença do temporal dead zone que acontece com a let/const.
Mesmo que o hosting aconteça, ele não permite o acesso.
*/


/*
a Let/const só funciona dentro do bloco, por isso é mais segura e recomendável. Já a var, funciona em todo o escopo.
*/

console.log(variable, variable2); // ReferenceError: variable2 is not defined.
