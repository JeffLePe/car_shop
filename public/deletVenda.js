const express = require("express")
const bodyparser = require("body-parser")
const db = require("./connect/connectDB")

function deletVenda(id, request, response) {
    db.query('delete from venda where placa = ?', id, function (err, rows) {
        if(err) {
            response.send("Erro ao deletar venda!" + id)
        }
        else {
            response.send("Venda deletada com sucesso!")
            //console.log(rows[0])
            //response.json(rows[0])
        }
    })
}

module.exports = deletVenda