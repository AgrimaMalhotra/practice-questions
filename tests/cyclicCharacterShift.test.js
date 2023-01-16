const { getNextCharacter, _getNextCharacter } = require('practice-questions/problems/cyclicCharacterShift.js');

test('testCase1', () => {
  expect(getNextCharacter('codescript')).toBe('dpeftdsjqu');
});

test('testCase2', () => {
  expect(getNextCharacter('zebra')).toBe('afcsb');
});

test('testCase3', () => {
  expect(getNextCharacter('')).toBe('');
});

test('testCase4', () => {
  expect(getNextCharacter('AGSSD')).toBe('BHTTE');
});

test('testCase5', () => {
  expect(_getNextCharacter('scr')).toBe('tds');
});

test('testCase6', () => {
  expect(_getNextCharacter('javascript')).toBe('kbwbtdsjqu');
});

test('testCase7', () => {
  expect(() => _getNextCharacter(1233)).toThrow('Type Error');
});

test('testCase8', () => {
  expect(_getNextCharacter('sciEnce')).toBe('tdjFodf');
});
