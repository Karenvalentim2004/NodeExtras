//Calcular e mostrar em gb quanto de memória tem total.

const os = require('os')

let memoriaTotal =  os.totalmem() / 1024 / 1024 / 1024
console.log("Memória total:"  + memoriaTotal.toFixed(2), "GB")