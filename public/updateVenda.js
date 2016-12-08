"use strict"

const express = require("express")
const router = express.Router()
const db = require("./connect/connectDB")

function updateVenda(obj, response) {
    db.query('update venda set ? where placa = ?', [obj, obj.placa], function (err, result) {
        if(err) {
            response.send("falha ao atualizar venda")
        }
        else{
            response.send("Atualização efetuada com sucesso!")
        }
    })
}

module.exports = updateVenda