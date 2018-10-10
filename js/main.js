var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var resulta = document.querySelector('#result')

function somar() {
    return resultado(parseInt(n1.value) + parseInt(n2.value))
}
function subtrair() {
    return resultado(parseInt(n1.value) - parseInt(n2.value))
}
function multiplicar() {
    return resultado(parseInt(n1.value) * parseInt(n2.value))
}
function dividir() {
    resultado(parseInt(n1.value) / parseInt(n2.value))
}
function resultado(result) {
    if (valideNaN(result)) {
        if (!valideFinite(result)){
            alert('ERROR')
            resulta.textContent = 0
        }
    } else {
        resulta.textContent = result
    }
}
function valideNaN(result) {
    return isNaN(result)
}
function valideFinite(result) {
    return isFinite(result)
}