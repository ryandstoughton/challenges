const readline = require('readline');
const { reversebinary } = require('./reversebinary');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', data => {
    const num = parseInt(data.trim(), 10);
    console.log(reversebinary(num));
    rl.close();
});
