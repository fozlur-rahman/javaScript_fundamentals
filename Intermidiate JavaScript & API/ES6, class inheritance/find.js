const products = [
    { id: 1, name: 'abc', price: 1000 },
    { id: 2, name: 'abc', price: 10400 },
    { id: 3, name: 'abc', price: 234423 },
    { id: 3, name: 'abc', price: 10340 },
    { id: 4, name: 'abc', price: 10340 }
]

const five = products.find(p => p.price > 1000);
console.log(five);