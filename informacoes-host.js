//Registar dados host em um arquivo txt

const os = require('os')
const fs = require('fs')

let host = os.hostname()
let memoriaTotal =  (os.totalmem() / 1024 / 1024 / 1024).toFixed(2)
let sistema =  os.version() + "-" + os.type()
let usuario = os.userInfo().username
let cpus = os.cpus()

let quantidadeCPU = cpus.length
let modeloCPU =cpus[0].model

let dados = `
Host: ${host}
Memória total: ${memoriaTotal} GB
Sistema Operacional: ${sistema}
Usuário ativo: ${usuario}
quantida de CPU:${quantidadeCPU}
Modelo da CPU: ${modeloCPU}
`

let nomeArquivo = `registro_${host}.txt`

fs.writeFile(nomeArquivo, dados, erro =>{
    if(erro){
        console.error("Erro ao salvar o arquivo")
        return
    }
    console.log("Arquivo criado com sucesso!")
})