require('dotenv').config()


const carros = require('./frota')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send()
})

carros.fnListarCarros()
carros.fnCadastrarCarro({marca:'Fiat', modelo: 'Palio' })
carros.fnListarCarros()

console.log(process.env.PORTA)
app.listen(3000)