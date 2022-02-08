var button = document.querySelector('#app button')
var input = document.querySelector('#app input')


button.addEventListener('click', function() {
    alert('Sua idade é: '+ input.value)
})

// document.querySelector('#app button').addEventListener('click', function() {
//     alert('Hello')
// })// seleciona a tag a ser ouvida e adiciona o identificador de evento, passando também o parametro  que será realizado após o evento.




// function sayHello(){
//     alert('Hello Dear')
// }