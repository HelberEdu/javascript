var app = document.querySelector('div#app')

// app.innerText = 'Hello World' // transforma em texto tudo selecionado em 'app'

//<a href="http://www.google.com">Visitar google</a>

var link = document.createElement('a') // cria <a></a> vazio
link.setAttribute('href','https://google.com')
var textLink = document.createTextNode('Visitar Google') // cria o texto
link.appendChild(textLink) // adiciona o texto como filho na tag link
// link.href = 'http://www.google.com'
app.appendChild(link)

var app = document.querySelector('div#app')
var p = document.querySelector('div#app p')

app.removeChild(p)