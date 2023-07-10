class Instructor {
    name;
    designation = 'student'
    class = 'bsc'
    location;


    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`this time is ${time}`);
    }
    createQuize(module) {
        console.log(`this module is ${module}`)
    }


}

const amir = new Instructor('fozlur', 'pabna');
const bal = new Instructor('vbal', 'baloyr');
console.log(amir);
console.log(bal.location);
amir.startSupportSession('6:00 am');
