const student = {
    name: "Fozlur Rahman",
    roll: 10,
    class: 7,
    institute: "DIU"
}

const { name, roll } = student;
// console.log(name, roll);

const student1 = {
    name1: "Fozlur Rahmna",
    roll1: 2,
    class1: 7,
    medium: "bangla",
    address: {
        village: "Putigara",
        thana: "Ataikula",
        Distict: "pabna",
        postCode: 6601
    }
}

const { name1, medium } = student1;
// console.log(name1, medium);

// =====================destucturing 2d objects ========================
const { village, thana, postCode } = student1.address;
// console.log(village, thana, postCode);
