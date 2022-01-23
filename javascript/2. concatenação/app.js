// Concatenação
var product = 'Camisa';
var price = 10;

console.log('O preço de ' + product + ' é R$ ' + price +'.'); // puxando valores de variáveis.

var estoque = ['Tênis', 'Short']

console.log('Os itens disponíveis no estoque são: ' + estoque[0] + ' e ' + estoque[1] +'.'); // puxando valores de propriedades em um array pela posição.

var armário = {
    camisas: 3,
    calças: 2,
}
console.log('O número de de camisetas e calças disponíveis no armário são respectivamente ' + armário.camisas + ' e ' + armário.calças +'.'); // puxando valores de propriedades em um objeto pelo nome da propriedade.