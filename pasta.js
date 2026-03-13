const fs = require ('fs')

let pasta = 'fotos'

console.log("\n\n===== verificando pasta ====")
if (fs.existsSync(pasta)){
    console.log('Tudo certo')
}else {
    console.log('A pasta não existe')
}



console.log("\n\n===== criando pasta ====")
pasta = 'icones'
if(!fs.existsSync(pasta)){
    fs.mkdirSync(pasta)
    console.log("pasta criada")
}else{
    console.log("pasta já existe")
}

console.log("\n\n======= listando conteúdo da pasta ======")
pasta = 'icones'
console.log(fs.readdirSync(pasta))


console.log("\n\n======= renomeando pasta ======")
try{
    fs.renameSync('icones', 'icons')
    console.log("pasta renomeada")
}catch(erro){
    console.log("não foi renomeado")
}


console.log("\n\n====== deletar pasta ======")
const fsextra = require('fs-extra')

const folder = 'icons'
fsextra.remove(folder, erro => {
    console.error(erro)
})
