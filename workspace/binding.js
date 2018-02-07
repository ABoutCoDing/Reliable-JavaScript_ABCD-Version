const bruce = { name: "Bruce" };
const madeline ={ name: "Madeline" };

function greet() {
    return `Hello, I'm ${this.name}!`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

console.log("bruce1 : " + JSON.stringify(bruce));

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');

console.log("bruce.brithYear : " + JSON.stringify(bruce));
console.log("bruce.brithYear : " + JSON.stringify(madeline));


var people  = [bruce, madeline];
function list(first, second) {
    console.log(first.name);
    console.log(second.name);
}
list.apply(null, people);



const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr);
Math.max.apply(null, arr);



const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);
Math.min(...arr);
Math.max(...arr);




const updateBruce = update.bind(bruce)
updateBruce(1904, "actor");                 // { name: 'Bruce', birthYear: 1904, occupation: 'actor' }
updateBruce(madeline, 1274, "king");
// { name: 'Bruce',
//   birthYear: { name: 'Madeline' },
//   occupation: 1274 }

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
// { name: 'Bruce',
//   birthYear: 1949,
//   occupation: 'singer, songwriter' }