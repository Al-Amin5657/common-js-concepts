// arguments is a array like object

function sum(a, b, c) {
    // console.log(arguments[4])
    const args = [...arguments]
    console.log(args);
    const result = a + b + c;
    return result;
}
const total = sum(23, 45, 67, 33, 44, 12);
console.log(total);