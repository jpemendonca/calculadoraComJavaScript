
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

