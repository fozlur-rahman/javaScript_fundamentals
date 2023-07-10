const add = (a, b = 1) => {
    const sum = a + b;
    return sum;

}
const result = add(10);
console.log(result);