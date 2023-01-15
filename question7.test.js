const {concatStrings, _concatStrings} = require ('./question7');

test('testCase1' , () => {
    expect(concatStrings(['hi','hey'])).toBe('ihey');
});

test('testCase2' , () => {
    expect(concatStrings(['bale','bhangra'])).toBe('alebhangra');
});

test('testCase3' , () => {
    expect(concatStrings(['pie','cheesecake'])).toBe('iecheesecake');
});

test('testCase4' , () => {
    expect(concatStrings(['whitefield','marathali'])).toBe('hitefieldmarathali');
});

test('testCase5' , () => {
    expect(_concatStrings(['nyt','timesofindia'])).toBe('yttimesofindia');
});

test('testCase6' , () => {
    expect(_concatStrings(['cherry','mango'])).toBe('herrymango');
});

test('testCase7' , () => {
    expect(_concatStrings(['one','three'])).toBe('nethree');
});

test('testCase8' , () => {
    expect(_concatStrings(['tee','coffee'])).toBe('eecoffee');
});
