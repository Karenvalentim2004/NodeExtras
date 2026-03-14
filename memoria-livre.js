//Calcular e mostrar em gb quanto de memória tem livre.

const os = require('os')

let memoriaLivre =  os.freemem() / 1024 / 1024 / 1024
console.log("Memória livre:"  + memoriaLivre.toFixed(2), "GB")