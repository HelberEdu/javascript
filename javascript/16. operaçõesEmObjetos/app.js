var person = {
    name: 'João Silva',
    height: 7.5,
    age: 23,
}

// Object.freeze(person) // não permite que ocorra alterações nos valores do objeto.

// person.name = 'Robson Silva'

var any = {
    age: 19    
}

// var newObject = Object.assign(person, any) // mesca os dois objetos.
// console.log(newObject)

var person = Object.assign(person, any)
console.log(person)