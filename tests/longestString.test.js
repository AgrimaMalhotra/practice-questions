const { getLongestString, _getLongestString } = require('practice-questions/problems/longestString.js');

test('testCase1', () => {
  expect(getLongestString(['hi', 'hey', 'hello', 'namaste'])).toBe('namaste');
});

test('testCase2', () => {
  expect(getLongestString(['1', '234', '123455', '000'])).toBe('123455');
});

test('testCase3', () => {
  expect(getLongestString([])).toBe();
});

test('testCase4', () => {
  expect(getLongestString(['whitefield', 'marathali', 'indiranagar', 'kormangla'])).toBe('indiranagar');
});

test('testCase5', () => {
  expect(_getLongestString(['KDH', 'marathali', 'kormangla'])).toBe('marathali');
});

test('testCase6', () => {
  expect(_getLongestString([' ', '   ', '     '])).toBe('     ');
});

test('testCase7', () => {
  expect(_getLongestString(['one', 'three', 'five'])).toBe('three');
});

test('testCase8', () => {
  expect(() => _getLongestString("teststring")).toThrow("Type Error");
});
