
// if(true){
//     var car = 'BMW'
// }

//console.log(car)// uma variável de escopo local foi acessada pelo escopo geral.

var car = ''
if(true){
    var car = 'BMW'
}

console.log(car)


// if(true){
//     let car = 'BMW' //let não é recomendado por ser do pacote ECMAscript6 que só há suporte em navegadores mais modernos
//     console.log(car)
// }

// console.log(car)

// o escopo de bloco deixa as variáveis vazarem para todo o código, enquanto o escopo de função não deixa.