import http from 'http'

const request = http.get("http://api.open-notify.org/astros.json", (res) => {

    let data = ''

    res.on('data', chunk => {
        data += chunk;
    })

    res.on('end', () => {
        // O JSON.parse permite que o resultado seja transformado em um objeto JavaScript, para que consiga trabalhar de forma mais estruturada
        let jsonData = JSON.parse(data);
        // O JSON.stringy converte o objeto em uma string json. No caso, esse caminho é feito para que o retorno exibido do response seja legível. Porém, poderia ser apenas:
        // console.log("Dados recebidos: " + data);
        console.log("Dados recebidos: " + JSON.stringify(jsonData, null, 2));
    })
})

request.on('error', error => {
    console.log("Erro da requisição: " + error);
});

request.end();