var button = document.querySelector('#app button')
var input = document.querySelector('#app input#idade')

var link = document.querySelector('#app a')

link.addEventListener('click', function(event){
    event.preventDefault()
    console.log('Sobre foi clicado')
})

button.addEventListener('click', function(event){
    event.preventDefault()
    console.log(event)
    console.log('Sua idade é: ' + input.value)
})