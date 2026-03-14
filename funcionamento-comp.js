//Calcular e mostre em minutos e em horas quanto tempo o computador está ligado.

const os = require('os')

let tempo =  os.uptime() 

let minutos = tempo / 60
let horas = tempo / 3600

console.log("Tempo ligado:")
console.log("Minutos:", minutos.toFixed(2))
console.log("Horas:", horas.toFixed(2))