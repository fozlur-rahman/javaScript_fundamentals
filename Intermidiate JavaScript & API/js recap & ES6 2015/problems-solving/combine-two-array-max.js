const maxNumber = (numbers, numbers2) => {
    const newNumbers = [...numbers, ...numbers2];
    const max = Math.max(...newNumbers);
    return max;
}

const numbers = [10, 20, 40, 50, 40];
const numbers2 = [10, 20, 303];

const result = maxNumber(numbers, numbers2);
console.log(result);