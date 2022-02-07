// console.log(window.document)
// console.log(window.document.body)

// var input = window.document.getElementById('idade')
// var input = window.document.getElementsByClassName('idade')
// var input = window.document.getElementsByClassName('idade')[0] // seleciona apenas a posição inicial do vetor.
// var input = window.document.getElementsByTagName('input')
// var input = window.document.getElementsByTagName('input')[0]
// var input = window.document.querySelector('div#app input.idade') // #app é o id da tag selecionada. Em input.idade, "idade é a classe do impute, tornando a seleção ainda mais específica."
// var input = window.document.querySelector('div#app input[name="idade"]')// [] se refere ao atributo do input.
// var input = window.document.querySelectorAll('input#idade')
// var input = window.document.querySelectorAll('input#idade')[0]
// var input = window.document.querySelector('input#idade')

var list = document.querySelector('div#app ul')

// console.log(input.parentElement.parentElement.parentElement.parentElement) // é possível selecionar o pai do pai do pai...

// console.log(input.previousElementSibling) // acessa elemento anterior
// console.log(input.nextElementSibling) // acessa o elemento posterior
// console.log(list.children)
console.log(list.children[1])

// querySelector é suficiente.