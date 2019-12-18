const { reversebinary } = require('./reversebinary');

describe('ReverseBinary', () => {
    test('reverses binary of a given decimal number', () => {
        expect(reversebinary(4)).toBe(1);
        expect(reversebinary(13)).toBe(11);
        expect(reversebinary(47)).toBe(61);
    });
});