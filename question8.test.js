const {countVowels, _countVowels} = require ('./question8');

test('testCase1' , () => {
    expect(countVowels('codeScript')).toBe(3);
});

test('testCase2' , () => {
    expect(countVowels('python')).toBe(1);
});

test('testCase3' , () => {
    expect(countVowels('TypeScript')).toBe(2);
});

test('testCase4' , () => {
    expect(countVowels('Script')).toBe(1);
});

test('testCase5' , () => {
    expect(_countVowels('Scr')).toBe(0);
});

test('testCase6' , () => {
    expect(_countVowels('javascript')).toBe(3);
});

test('testCase7' , () => {
    expect(_countVowels('happyScript')).toBe(2);
});

test('testCase8' , () => {
    expect(_countVowels('script')).toBe(1);
});
