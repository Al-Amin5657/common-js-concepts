// strongly typed language
// int a = 5;
// string b = 'Alim Halim';
// bool c = true;
// object student = {name: 'noya daman', id: 55}
// int[] numbers = [12, 45, 78]
// string[] = friends = ['abul', 'babul']

// javascript is a dynamic typed language
// Primitive type 
const a = 5;
const b = 'samsu kopai na akhonn r';
const c = true;

// non-primitive
const age = [25, 46, 67]
const student = { id: 1, class: 7 };
console.log(typeof a, typeof b, typeof c, typeof age, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'web developer' }
let q = p;
q.job = 'front end developer'
// q = { job: 'backend end' }
console.log(p, q);