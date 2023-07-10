const numbers = [10, 10, 20, 30, 40];
const total = numbers.reduce((pre, cur) => {
    console.log(pre + cur);
    return pre + cur;
}, 0);
console.log(total);