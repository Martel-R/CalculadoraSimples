var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var resulta = document.querySelector('#result')

document.querySelectorAll('input').forEach(function (input_html) {
    console.log(input_html)
    input_html.addEventListener('change', function (ev) {
        var en = parseInt(ev.target.value)
        if (isNaN(en)||!isFinite(en)){
             onunload.apply()
    }})
})

document.querySelector("#dividir").addEventListener('mousemove', function () {
    resultado(parseInt(n1.value) / parseInt(n2.value))
})
document.querySelector("#mult").addEventListener('mousemove', function () {
    resultado(parseInt(n1.value) * parseInt(n2.value))
})
document.querySelector("#somar").addEventListener('mousemove', function () {
    resultado(parseInt(n1.value) + parseInt(n2.value))
})
document.querySelector("#sub").addEventListener('mousemove', function () {
    resultado(parseInt(n1.value) - parseInt(n2.value))
})
document.querySelector("#limpar").addEventListener('dblclick', function () {
    n1.textContent = ''
    n2.textContent = ''
    resulta.textContent = '0'
})

// function somar() {
//     return resultado(parseInt(n1.value) + parseInt(n2.value))
// }
// function subtrair() {
//     return resultado(parseInt(n1.value) - parseInt(n2.value))
// }
// function multiplicar() {
//     return resultado()
// }
// function dividir() {
//     resultado(parseInt(n1.value) / parseInt(n2.value))
// }
function resultado(result) {
    if (valideNaN(result)) {
        if (!valideFinite(result)){
            resulta.textContent = 0
            alert('ERROR ', n1,' ou ', n2)
        }
        else {
            alert('Resultado é infinito')
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