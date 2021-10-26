// O operando1 da calculadora terá no maximo 18 caracteres

let tela = document.getElementById('tela')


function adiciona(tecla) {
    tela.innerHTML += tecla
}

function resultado() {
    tela.innerHTML = eval(tela.innerHTML)

}
function limpar() {
    tela.innerHTML = ''
}

