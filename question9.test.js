const {nextCharacter, _nextCharacter} = require ('./question9');

test('testCase1' , () => {
    expect(nextCharacter('codescript')).toBe('dpeftdsjqu');
});

test('testCase2' , () => {
    expect(nextCharacter('zebra')).toBe('afcsb');
});

test('testCase3' , () => {
    expect(nextCharacter('hashcode')).toBe('ibtidpef');
});

test('testCase4' , () => {
    expect(nextCharacter('leetcode')).toBe('mffudpef');
});

test('testCase5' , () => {
    expect(_nextCharacter('scr')).toBe('tds');
});

test('testCase6' , () => {
    expect(_nextCharacter('javascript')).toBe('kbwbtdsjqu');
});

test('testCase7' , () => {
    expect(_nextCharacter('happy')).toBe('ibqqz');
});

test('testCase8' , () => {
    expect(_nextCharacter('sciEnce')).toBe('tdjFodf');
});
