var mysql = require("mysql")

var connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'loja_carros'
})

connection.connect(function(err) {
    if(err){
        console.log("Erro de conexão com o banco de dados")
    }
    else{
        console.log("Conexão realizada com sucesso")
    }
})

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

module.exports = connection