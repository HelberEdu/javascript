var array = ['João', 'Oliver', 'Maria']

// console.log(array.length)

// for(var i = 0; i < array.length; i++){
//     // console.log(array)
//     // console.log(i)
//     console.log(array[i])
// }

// var newValue = array.indexOf('Oliver')

// console.log(array.indexOf()) // retorna -1 porque o valor não existe.
// console.log(newValue)

// array.pop() // remove o último valor do array.
// console.log(array.pop()) // exibe o valor removido.

// array.push('Silva') // adiciona o valor na última posição.

var index = array.indexOf('Oliver') // registra na variável index o valor buscado por indexOf no array...
array.splice(index, 1) // remove o valor buscado em index.


// array.splice(0,0) // remove um valor dando sua posição e define quantas vezes o valor dessa posição deve ser removido.

console.log(array)