const fs = require('fs');

const str = fs.readFileSync('./str.txt', 'utf8');

console.log('String length:', str.length);

console.log('---------');

function test() {
  console.time('Split speed');

  const res = str.split('').join(' ');

  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`Split uses approximately ${Math.round(used * 100) / 100} MB`);

  console.timeEnd('Split speed');

  console.log('---------');
}

for (let index = 0; index < 10; index++) {
  test();
}
