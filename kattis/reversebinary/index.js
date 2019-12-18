const readline = require('readline');
const reversebinary = require('./reversebinary');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', data => {
    const num = data.trim().map(s => parseInt(s, 10));
    reversebinary(num);
    rl.close();
});
