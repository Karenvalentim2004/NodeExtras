// setTimeout(function() {
//     console.log('agendamento')
// }, 1000
// )

let contador = 0
function mensagem() {
    contador++
    console.log('agendado', contador)
    if (contador === 5) {
        clearInterval(intervalo)
    }
}

const intervalo = setInterval( function() {
    mensagem()
}, 100)