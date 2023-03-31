/*
8 ways to get undefined
1. variable that is not initialized will give undefined. 
2. function with no return
3. parameter that is not passed will be undefined
4. if return han nothing on the right side will return undefined
5. property that doesn't exists on an array will give you undefined
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined


*/
let first;
console.log(first);
function second(a, b) {
    const total = a + b;
    // return total;
}
// const result = second();
// console.log(result)
// 3
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(5, 7);
// 4
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const result = noNegative(4, -6);
console.log(result);
// 5
const fifth = { id: 3, name: 'ponchom', age: 60 }
console.log(fifth.name, fifth.salary)

// 6
const sixth = [4, 5, 67, 89, 55];
// you should not do it, instead use splice
delete sixth[1];
console.log(sixth[2], sixth[3], sixth[290]);
console.log(sixth);

const eight = undefined;
const ninth = null;
const data = { results: [], updated: null };

console.log(typeof undefined)
console.log(typeof null)
