const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', input => {
    const nums = input.trim().split(' ').map(item => parseInt(item, 10));
    fizzbuzz(nums);
    rl.close();
});

const fizzbuzz = nums => {
    const fizzbuzzWords = ['Fizz', 'Buzz', 'Bazz', 'Fuzz', 'Biff', 'Farz']
    const mods = nums.slice(0, nums.length - 1);
    const upUntil = nums[nums.length - 1];

    const modMap = {};
    for (i in mods) {
        modMap[mods[i]] = fizzbuzzWords[i];
    }

    for (let i = 1; i <= upUntil; i++) {
        let word = '';
        for (mod of Object.keys(modMap)) {
            if (i % mod === 0) {
                word = word.concat(modMap[mod]);
            }
        }
        console.log(word !== '' ? word : i);
    }
};
