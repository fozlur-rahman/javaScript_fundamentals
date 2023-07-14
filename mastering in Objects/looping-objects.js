const student = {
    name: "Fozlur Rahman",
    roll: 10,
    calss: 12,
    gruop: 'A'
}

const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);
const a = [];
for (const key of keys) {
    // console.log(key);
    // const keyss = student[key];
    a.push(key);
    // console.log(key);
}
// console.log(a);
// for (const value of values) {

// }

for (const key in student) {
    // const keyss = student[key];
    // console.log(keyss);
    console.log(student[key]);
}
