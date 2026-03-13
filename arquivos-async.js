const fs = require('fs')


let novoCliente = 'Maria Clara\n'
// fs.writeFile('clientes.txt', novoCliente, erro => {
//     if (erro) {
//         console.error(erro)
//         return
//     }
//     console.log("Novo cliente!")
// })

novoCliente = 'Regina Gorge'
fs.appendFile( 'clientes.txt', novoCliente, erro =>{
    if(erro){
        console.error(erro)
        return
    }
    console.log("+ 1 cliente!")
})
