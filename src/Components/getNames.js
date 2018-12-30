const fs = require('fs');

const result = JSON.parse(fs.readFileSync('./resName.json', 'utf-8'));
// console.log(result);
let data = result['USD']['TRADES'];
// data = data.split('~');
let ans = [];
for (let x of data) {
  ans.push(x.split('~')[1]);
}

console.log(ans);
