const { getsameDigits, _getsameDigits } = require('practice-questions/problems/sameDigits.js');

test('testCase1', () => {
  expect(getsameDigits(666)).toBe(true);
});

test('testCase2', () => {
  expect(getsameDigits(676)).toBe(false);
});

test('testCase3', () => {
  expect(getsameDigits(111)).toBe(true);
});

test('testCase4', () => {
  expect(getsameDigits(555555)).toBe(true);
});

test('testCase5', () => {
  expect(_getsameDigits(56)).toBe(false);
});

test('testCase6', () => {
  expect(_getsameDigits(282222)).toBe(false);
});

test('testCase7', () => {
  expect(_getsameDigits(27887888)).toBe(false);
});

test('testCase8', () => {
  expect(_getsameDigits(1111111111111)).toBe(true);
});
