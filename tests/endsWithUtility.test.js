const { checkEndsWith, _checkEndsWith } = require('practice-questions/problems/endsWithUtility.js');

test('testCase1', () => {
  expect(checkEndsWith('codeScript')).toBe(true);
});

test('testCase2', () => {
  expect(checkEndsWith('python')).toBe(false);
});

test('testCase3', () => {
  expect(checkEndsWith('')).toBe(false);
});

test('testCase4', () => {
  expect(checkEndsWith('Script')).toBe(true);
});

test('testCase5', () => {
  expect(_checkEndsWith('Scr')).toBe(false);
});

test('testCase6', () => {
  expect(_checkEndsWith('javascript')).toBe(false);
});

test('testCase7', () => {
  expect(_checkEndsWith('happyScript')).toBe(true);
});

test('testCase8', () => {
  expect(_checkEndsWith('script')).toBe(false);
});
