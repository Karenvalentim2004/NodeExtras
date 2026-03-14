let carros = [
    {
        marca: 'Ford',
        modelo: 'Fiesta'
    },

    {
        marca: 'Fiat',
        modelo: 'Uno'
    }
]

function fnListarCarros() {
    carros.forEach(carro => {
        console.log(carro.marca + " - " + carro.modelo)
    })
}

function fnCadastrarCarro(carro){
    carros.push(carro)
    console.log("Cadastrato com sucesso!")
}

exports.fnListarCarros = fnListarCarros
exports.fnCadastrarCarro = fnCadastrarCarro