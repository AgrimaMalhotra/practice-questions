const { getCountVowels, _getCountVowels } = require('practice-questions/problems/countVowels.js');

test('testCase1', () => {
  expect(getCountVowels('codeScript')).toBe(3);
});

test('testCase2', () => {
  expect(getCountVowels('python')).toBe(1);
});

test('testCase3', () => {
  expect(getCountVowels('')).toBe(0);
});

test('testCase4', () => {
  expect(getCountVowels(' ')).toBe(0);
});

test('testCase5', () => {
  expect(_getCountVowels('Scr')).toBe(0);
});

test('testCase6', () => {
  expect(() => _getCountVowels(1)).toThrow('Type Error');
});

test('testCase7', () => {
  expect(_getCountVowels('happyScript')).toBe(2);
});

test('testCase8', () => {
  expect(_getCountVowels('script')).toBe(1);
});
