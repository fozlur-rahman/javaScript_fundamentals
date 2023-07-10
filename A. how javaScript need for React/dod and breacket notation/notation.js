const student = {
    name: "Fozlur Rahman",
    roll: 20,
    class: 7,
    address: "Ataikula",
    6601: 'post code'
}

const nam = student.name;
const nam2 = student["name"];
const nam3 = "name";
const nam_3 = student[nam3];
const number = student[6601];
console.log(nam, nam2, nam_3, number);