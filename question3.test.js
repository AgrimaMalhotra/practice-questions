const {capitalise, _capitalise} = require ('./question3'); 

test('testCase1' , () => {
    expect(capitalise('I aM in CoDe AcAdeMy')).toBe('i Am IN cOdE aCaDEmY');
});

test('testCase2' , () => {
    expect(capitalise('ThIs PlaCe Is caLled Sun cIty')).toBe('tHiS pLAcE iS CAlLED sUN CiTY');
});

test('testCase3' , () => {
    expect(capitalise('At tHis pLaCe')).toBe('aT ThIS PlAcE');
});

test('testCase4' , () => {
    expect(capitalise('Hi BenGaluru')).toBe('hI bENgALURU');
});

test('testCase5' , () => {
    expect(_capitalise('tHis aPPle')).toBe('ThIS AppLE');
});

test('testCase6' , () => {
    expect(_capitalise('kIdS aRe CoDing')).toBe('KiDs ArE cOdING');
});

test('testCase7' , () => {
    expect(_capitalise('HoW aRe You')).toBe('hOw ArE yOU');
});

test('testCase8' , () => {
    expect(_capitalise('McKinsey and cOmpany')).toBe('mCkINSEY AND CoMPANY');
});
