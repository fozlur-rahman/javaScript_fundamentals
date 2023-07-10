// spredd oparetor (...) three dots holo spredd oprators.

const numbers = [10, 1, 020, 52, 14];
const max = Math.max(...numbers);
console.log(max);

const numbers2 = [10, 20, 340, 50];
const numbers2Copy = [...numbers2, 1210];
numbers2Copy.push(10);
console.log(numbers2Copy);