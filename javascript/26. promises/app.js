var voceComprouOsProdutos = new Promise(function(resolve, reject){
    setTimeout(function(){
        var products = ['Pão','Maçã','Avelã']
        reject(products)
    }, 3000)
})

//then é usado porque o javascript é assincrono, portanto suas funções carregam simultaneamente. O then srviu pro caso de uma função ter que rodar após o resultado de outra função.

// then é caso a promessa obtenha o primeiro parâmetro
// catch é caso a promessa obtenha o segundo parâmetro
voceComprouOsProdutos.then(function(){
    console.log('Deu certo')
}).catch(function(){
    console.log('Deu errado')
})

console.log(voceComprouOsProdutos)