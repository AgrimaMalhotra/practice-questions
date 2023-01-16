const { getCapitalise, _getCapitalise } = require('practice-questions/problems/stringUtility.js');

test('testCase1', () => {
  expect(getCapitalise('I aM in CoDe AcAdeMy')).toBe('i Am IN cOdE aCaDEmY');
});

test('testCase2', () => {
  expect(getCapitalise('ThIs PlaCe Is caLled Sun cIty')).toBe('tHiS pLAcE iS CAlLED sUN CiTY');
});

test('testCase3', () => {
  expect(getCapitalise('AT THIS PLACE')).toBe('at this place');
});

test('testCase4', () => {
  expect(getCapitalise('hi bengaluru')).toBe('HI BENGALURU');
});

test('testCase5', () => {
  expect(_getCapitalise('')).toBe('');
});

test('testCase6', () => {
  expect(_getCapitalise('kIdS aRe CoDing')).toBe('KiDs ArE cOdING');
});

test('testCase7', () => {
  expect(_getCapitalise('HoW aRe You')).toBe('hOw ArE yOU');
});

test('testCase8', () => {
  expect(_getCapitalise('McKinsey and cOmpany')).toBe('mCkINSEY AND CoMPANY');
});
