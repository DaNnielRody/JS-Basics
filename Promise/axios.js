import axios from 'axios';

axios.get("http://api.open-notify.org/astros.json")

// o 'response' é o objeto já em json que contém a data retornada do server pega na requisição
.then(response => {
    console.log("Dados exibidos: " + JSON.stringify(response.data, null, 2)); 
})
.catch(err => {
    console.log("Error na requisição: " + err);
})
;