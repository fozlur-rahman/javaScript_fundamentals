const numbers = [10, 10, 20, 50, 45, 47, 0, 850];
// console.log(Math.max(...numbers));
const a = numbers.filter(n => n > 20);
console.log(a);

const products = [
    { id: 1, name: 'abc', price: 1000 },
    { id: 2, name: 'abc', price: 10400 },
    { id: 3, name: 'abc', price: 234423 },
    { id: 3, name: 'abc', price: 10340 },
    { id: 4, name: 'abc', price: 10340 }
]

const prices = products.filter(p => p.price > 1000);
console.log(prices);