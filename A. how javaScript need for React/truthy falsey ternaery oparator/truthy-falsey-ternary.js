// some falsey =====================
// '' , false, 0, undefined, null etc 

const a = 10;
const b = 20;

if (a) {
    // console.log(a + b);
}
else {
    // console.log(a * b);
}
// if a less then 20 
a < 10 ? console.log(a + b) : console.log(a * b);
// if a is true 
a ? console.log(a + b) : console.log(a * b);


let u = true;
const user = () => {
    console.log("hello user");
}
const user2 = () => {
    console.log("hello user2");
}
!u ? user() : user2();
u && user();
// u || user();

// toggle boolen 
u = !u;
console.log(u);
