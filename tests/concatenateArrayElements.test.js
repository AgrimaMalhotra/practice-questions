const { concatStrings, _concatStrings } = require('practice-questions/problems/concatenateArrayElements.js');

test('testCase1', () => {
  expect(concatStrings(['hi', 'hey'])).toBe('ihey');
});

test('testCase2', () => {
  expect(concatStrings(['123', '7866'])).toBe('237866');
});

test('testCase3', () => {
  expect(concatStrings([' ', 'cheesecake'])).toBe('cheesecake');
});

test('testCase4', () => {
  expect(concatStrings(['whitefield', 'marathali'])).toBe('hitefieldmarathali');
});

test('testCase5', () => {
  expect(_concatStrings(['nyt', 'timesofindia'])).toBe('yttimesofindia');
});

test('testCase6', () => {
  expect(_concatStrings(['cherry', 'mango'])).toBe('herrymango');
});

test('testCase7', () => {
  expect(_concatStrings(['one', 'three'])).toBe('nethree');
});

test('testCase8', () => {
  expect(_concatStrings(['tee', 'coffee'])).toBe('eecoffee');
});
