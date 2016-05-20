import 'babel-polyfill';

console.log(Array.from('aaaa'));

const sum = (a, b) => a + b;

let x = sum(1, 2);
let y = sum(3, 4);

console.log(x);