let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
var answer = 0;

let dice1 = Number(input[0].split(' ')[0]);
let dice2 = Number(input[0].split(' ')[1]);
let dice3 = Number(input[0].split(' ')[2]);

// 3개
if (dice1 === dice2 && dice2 === dice3) {
  answer = 10000 + dice1*1000;
} else if (dice1 === dice2) {
  answer = 1000 + dice1 * 100;
} else if (dice2 === dice3) {
  answer = 1000 + dice2 * 100;
} else if (dice1 === dice3) {
  answer = 1000 + dice1 * 100;
} else {
  answer = Math.max(dice1, dice2, dice3) * 100;
}
// 1개
console.log(answer)
