"use strict"

const express = require("express")
const bodyparser = require("body-parser")

const app = express()
app.use(bodyparser.json())
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended: true}))

app.get("/", function(request, response) {
    response.sendFile("index.html")
})

//servidor
var server = app.listen(3000)
console.log("Servidor iniciado na porta: " + server.address().port)