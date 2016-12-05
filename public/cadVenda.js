"use strict"

const express = require("express")
const router = express.Router()
const db = require("./connect/connectDB")

function cadVenda(obj, response) {
    db.query('insert into venda set ?', obj, function (err, result) {
        if(err) {
            response.send("falha ao cadastrar venda")
        }
        else{
            response.send("Cadastro efetuado com sucesso!")
        }
    })
}

module.exports = cadVenda