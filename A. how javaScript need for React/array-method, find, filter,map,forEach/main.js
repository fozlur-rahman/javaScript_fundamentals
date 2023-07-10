const products = [
    { name: "laptop", price: 10, brand: "lenovo", color: "silver" },
    { name: "mobile", price: 20, brand: "mi", color: "red" },
    { name: "watch", price: 30, brand: "ligi", color: "blue" },
    { name: "camera", price: 100, brand: "canon", color: "black" },
]

// map 
const brands = products.map(product => product.brand);
console.log(brands);


// forEach  not -------------- return the objects
// const brands2 = products.forEach(product => console.log(product.brand));
const brands2 = products.forEach(product => {
    console.log(product.name);
});


// filter 

const prices = products.filter(product => product.price <= 30);
console.log(prices);
const color = products.filter(product => product.name.includes('o'));
console.log(color);

// find 
const names = products.find(product => product.name.includes('t'));
console.log(names);