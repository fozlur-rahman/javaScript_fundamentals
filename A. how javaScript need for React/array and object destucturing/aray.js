// array destructuring =============;

const numbers = [10, 23, 30];
const [x1, y1] = [10, 20];

const [x, y, z] = numbers;
// console.log(x, z);


function boxify(num1, num2) {
    const newnun = [num1, num2];
    return newnun;
}
// console.log(boxify(10, 20));

const boxNum = boxify(10, 20);
for (let n of boxNum) {
    // console.log(n);
}