var seneca = require('seneca')()
var client = seneca.client({ host:'localhost', port:8080 })

// Envia al topico de la suma los operandos y espera respuesta
client.act({ type: 'stock', function: 'stockByCategory'}, function (err, result) {
  console.log(result);
})
