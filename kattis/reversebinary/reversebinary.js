function reversebinary(num) {
    return parseInt(num.toString(2)     // 4 -> "100"
        .split('')                      // "100" -> ["1", "0", "0"]
        .reverse()                      // ["1", "0", "0"] -> ["0", "0", "1"]
        .join(''), 2);                  // "001" -> 1 (decimal)
};

module.exports.reversebinary = reversebinary;
