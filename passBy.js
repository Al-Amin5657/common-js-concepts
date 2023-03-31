// primitive type are pass by value

let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 24
    const result = a * b;
    return result;
}
console.log(num1);
// const output = multiply(num1, num2);
multiply(num1, num2);
console.log(num1);

// object and array are pass by reference
let student1 = { name: 'jalil', partner: 'borsha' }
let student2 = { name: 'raj', partner: 'anika' }

function makeMovie(couple1, couple2) {
    couple1.name = 'ononto';
    couple2.name = 'mim';
}
// console.log(student1, student2);
// makeMovie(student1, student2);
// console.log(student1, student2);

let p = 'Javascript';
let q = p;
p = 'React';
console.log(q);

const isTrue = 'false';
if (!isTrue) {
    console.log('hello');
} else {
    console.log('world');
}

function sum(p, q) {
    p + q;
}
const result = sum(2, 3);
console.log(result);

if ("2" === 2) {
    console.log("Inside if");
} else {
    console.log("Inside else");
}

