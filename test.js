let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let line = input[0].split(' ');
let a = Number(line[0]);
let b1 = Number(line[1][2]);
let b2 = Number(line[1][1]);
let b3 = Number(line[1][0]);

console.log(a*b1);
console.log(a*b2);
console.log(a*b3);
console.log(a*b1 + a*b2*10 + a*b3*100);
