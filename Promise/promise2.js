
// A promise é basicamente um placeholder de uma task asyncrona que ainda não completou, ou, não se resolveu. Por exemplo, neste pedaço de código:

/*
const request = http.get("http://api.open-notify.org/astros.json", (res) => {

    let data = ''

    res.on('data', chunk => {
        data += chunk;
    })

    res.on('end', () => {}

    O evento res.on, neste caso, é como se fosse uma promise, pois só vai ser retornada de fato quando a data terminar de processar todos os dados.
*/

let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First Resolved")
    }, 6000)
})


let mySecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second Resolved")
    }, 3000)
})

// Posso fazer a outra promise ser invocada após a primeira ser finalizada dessas duas maneiras.

myFirstPromise.then((message) => {
    console.log("First Result, first promise: " + message);
    mySecondPromise.then((message) => {
        console.log("Second Result, second promise: " + message);
    })    
})

/*
myFirstPromise.then((message) => {
    console.log("First Result, first promise: " + message);
    return mySecondPromise;
}).then((message) => {
    console.log("Second " + message);
    
})
*/

// Em resumo, o then é utilizado para retornar a promisse resolvida ou rejeitada após processar os dados de maneira assíncrona. Como o then respeita a ordem que é realizada, mesmo que a segunda promessa já tenha o seu retorno, ela só é exibida quando a primeira termina

// Agora, se eu tiver o uma 'fila' (then) depois da outra, a que terminar primeiro já é exibida:

myFirstPromise.then((message) => {
    console.log("Without queue " + message);
}).then(mySecondPromise.then((message) => {
    console.log("Without queue 2 " + message);
}))

// Nesse caso, quem termina primeiro já é exibido.