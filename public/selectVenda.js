"use strict"

const express = require("express")
const bodyparser = require("body-parser")
const db = require("./connect/connectDB")

function selectVenda(id, response) {
    db.query('select * from venda where placa = ?', id, function (err, rows) {
        if(err) {
            response.send("Erro ao selecionar venda!")
        }
        else {
            response.send(rows[0])
        }
    })
}

module.exports = selectVenda

