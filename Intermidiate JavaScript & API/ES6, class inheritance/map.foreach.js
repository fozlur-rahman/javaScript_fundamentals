const numbers = [10, 20, 30, 40, 5, 05];
const result = numbers.map(num => num + 2);
console.log(result);
// get Object 

const friends = [
    { name: 'fozluer', age: 10 },
    { name: 'fdf', age: 20 },
    { name: 'fofkjdszluer', age: 30 }


]
let findName = friends.map(friend => friend.name);
friends.forEach(element => {
    console.log(element.name);
});
console.log(findName);
