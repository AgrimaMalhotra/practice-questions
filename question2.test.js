const {sameDigits, _sameDigits} = require ('./question2');

test('testCase1' , () => {
    expect(sameDigits(666)).toBe(true);
});

test('testCase2' , () => {
    expect(sameDigits(676)).toBe(false);
});

test('testCase3' , () => {
    expect(sameDigits(111)).toBe(true);
});

test('testCase4' , () => {
    expect(sameDigits(555555)).toBe(true);
});

test('testCase5' , () => {
    expect(_sameDigits(56)).toBe(false);
});

test('testCase6' , () => {
    expect(_sameDigits(282222)).toBe(false);
});

test('testCase7' , () => {
    expect(_sameDigits(27887888)).toBe(false);
});

test('testCase8' , () => {
    expect(_sameDigits(1111111111111)).toBe(true);
});
