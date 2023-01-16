const { checkLeapYear, _checkLeapYear } = require('practice-questions/problems/leapYear.js');

test('testCase1', () => {
  expect(checkLeapYear(2016)).toBe(true);
});

test('testCase2', () => {
  expect(checkLeapYear(100)).toBe(false);
});

test('testCase3', () => {
  expect(checkLeapYear(2024)).toBe(true);
});

test('testCase4', () => {
  expect(() => checkLeapYear('str')).toThrow('TypeError');
});

test('testCase5', () => {
  expect(_checkLeapYear(2012)).toBe(true);
});

test('testCase6', () => {
  expect(_checkLeapYear(1400)).toBe(false);
});

test('testCase7', () => {
  expect(_checkLeapYear(2020)).toBe(true);
});

test('testCase8', () => {
  expect(_checkLeapYear(1115)).toBe(false);
});
