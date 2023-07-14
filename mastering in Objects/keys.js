// seal korle delete hobe na but modified kora jabe
// sudu matro delete ta . sara korte hoy 

const bottle = { color: 'red', weight: 10, height: '10inc', brand: 'RFL', isFresh: true };
const keys = Object.keys(bottle);
const values = Object.values(bottle);
const entries = Object.entries(bottle);

Object.freeze(bottle);
Object.seal(bottle);
bottle.color = 'bule';
delete bottle.color;
console.log(bottle);
console.log(keys, values, entries);