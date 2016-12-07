"use strict"

const express = require("express")
const bodyparser = require("body-parser")
const db = require("./connect/connectDB")

function selectVenda(id, request, response) {
    db.query('select * from venda where placa = ?', id, function (err, rows) {
        if(err) {
            response.send("Erro ao selecionar venda!" + id)
        }
        else {
            console.log(rows[0])
            response.json(rows[0])
        }
    })
}

module.exports = selectVenda

