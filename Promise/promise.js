
let myPromise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Resolved")
    }, 3000)
});

console.log("Before calling");

myPromise.then((message) =>{
    console.log("From callback: " + message);
})

console.log("After calling");
