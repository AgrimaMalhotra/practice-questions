const {longestString, _longestString} = require ('./question4');

test('testCase1' , () => {
    expect(longestString(['hi','hey','hello','namaste'])).toBe('namaste');
});

test('testCase2' , () => {
    expect(longestString(['bale','bhangra','classical','tapdance'])).toBe('classical');
});

test('testCase3' , () => {
    expect(longestString(['pie','cheesecake','donut'])).toBe('cheesecake');
});

test('testCase4' , () => {
    expect(longestString(['whitefield','marathali','indiranagar','kdh'])).toBe('indiranagar');
});

test('testCase5' , () => {
    expect(_longestString(['nyt','timesofindia','hindustantimes','cosmos'])).toBe('hindustantimes');
});

test('testCase6' , () => {
    expect(_longestString(['cherry','mango','pineapple'])).toBe('pineapple');
});

test('testCase7' , () => {
    expect(_longestString(['one','three','five'])).toBe('three');
});

test('testCase8' , () => {
    expect(_longestString(['tee','coffee','hotchocolate'])).toBe('hotchocolate');
});
