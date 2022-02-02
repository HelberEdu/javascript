// escopo global é quaquer lugar exceto dentro de chaves. variáveis globais podem ser acessadas em todo o código, inclusive em escopos locais.

function sum(number1, number2){
    var result = number1 + number2
    return result
}

console.log(sum(3,3))

var result = 'qualquer coisa' // esse nome de variável pode ser usado no escopo geral, apesar de ter sido utilizado no escopo local da função sum()
console.log(result)

// 'use strict'
// function showCar(){
//     //escopo local, as variáveis só daqui só serão acessadas daqui.
//     var car = 'BMW'
//     console.log(car)
// }

// showCar()
// console.log(car)

