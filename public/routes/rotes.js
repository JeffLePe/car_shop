"use strict"

const express = require("express")
const bodyparser = require("body-parser")
const cadvenda = require("../cadVenda")
const selvenda = require("../selectVenda")

const app = express()
const router = express.Router()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))


router.post("/cadVenda", (request, response) => {
    var venda = request.body
    cadvenda(venda, response)
})

router.post("/svenda", (request, response) => {
    var codVenda = request.body.placa_carro
    selvenda(codVenda, request, response)
})

module.exports = router