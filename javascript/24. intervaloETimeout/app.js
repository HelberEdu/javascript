function doAction(){
    console.log('fodase')
}

window.setInterval( doAction, 3000) // repete a função a cada 3000 milisegundos (3s)

// window.setInterval(function(){
//      console.log('Hello')
// }, 500)

function oneAction(){
    console.log('Só uma vez')
}

window.setTimeout(oneAction, 2000)

// window.setTimeout(function(){
//     console.log('Só uma vez')
// }, 3000) // roda a função apenas uma vez depois de 3000 milisegundos(3s)