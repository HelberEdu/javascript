var isActive = true
var message = ''

// condição
if (isActive) { // se
    message =  'Está ativo'
} else { // se não
    message = 'Não está ativo.'
} 
// se o valor da variável isActive é verdadeiro, será realizado o escopo dentro das chaves {}.

console.log(message)

///////////////////////////////////////////////////

var trafficLight = 'verde' // = atribui um valor.
var trafficMessage = ''

// if (trafficLight == 'verde') { // == faz comparação.
//     trafficMessage = 'Pode passar!'
// } else if (trafficLight == 'amarelo') { // se não, se
//     trafficMessage = 'Atenção!'
// } else if (trafficLight == 'vermelho') {
//     trafficMessage = 'Pare!'
// } else { // se não
//     trafficMessage = 'Valor inválido.'
// }

// console.log(trafficMessage)

switch (trafficLight){
    case 'verde':
        trafficMessage = 'Pode passar!'
        break
    case 'amarelo':
        trafficMessage = 'Atenção!'
        break
    case 'vermelho':
        trafficMessage = 'Pare!'
        break
    default:
        trafficMessage = 'Valor inválido.'
}

console.log(trafficMessage)
