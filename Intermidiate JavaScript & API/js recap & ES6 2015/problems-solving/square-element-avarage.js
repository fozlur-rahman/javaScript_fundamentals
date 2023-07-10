// const numbers = [10, 16, 24, 4, 45, 12];
// let sum = 0;
//     let count = 0;
//     for (element of numbers) {
//         if (element % 4 == 0) {
//             sum += element;
//             element + 1;
//             count++;
//         }
//     }
// const avarage = sum / count;
// console.log(avarage);



// use the arrow function ------------------------
// -----------------------------------------------
const avarage = (numbers) => {
    let sum = 0;
    let count = 0;
    for (element of numbers) {
        if (element % 4 == 0) {
            sum += element;
            element + 1;
            count++;
        }
    }
    const ava = sum / count;
    return ava;
}

const numbers = [10, 16, 24, 4, 45, 12];
const result = avarage(numbers);
console.log(result);