let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
var answer = '';
let n = Number(input[0].split(' ')[0]);

for (let i=1; i<=n; i++) {
  for (let j=1; j<=i; j++) {
    answer += '*';
  }
  answer += '\n';
}

console.log(answer);