//carregar a biblioteca do express. 
var express = require('express');
//inicializando o express.
var app = express();

//ponto de acesso : endpoint
//resquest é uma requisição
//response é a resposta do servidor
app.get('/', function (req, response) {
  response.send('Robson Ribeiro');
});

//a porta que o node irá expor..
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});