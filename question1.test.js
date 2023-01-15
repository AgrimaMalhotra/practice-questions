const {largestEvenNumber, _largestEvenNumber} = require ('./question1');

test('testCase1' , () => {
    expect(largestEvenNumber([14,16,25,0,13])).toBe(16);
});

test('testCase2' , () => {
    expect(largestEvenNumber([-25, -1, -14, -2])).toBe(-2);
});

test('testCase3' , () => {
    expect(largestEvenNumber([146, 273, 56, 981,100])).toBe(146);
});

test('testCase4' , () => {
    expect(largestEvenNumber([-2, 16, 0 ,-24])).toBe(16);
});

test('testCase5' , () => {
    expect(_largestEvenNumber([14,0, 14,2])).toBe(14);
});

test('testCase6' , () => {
    expect(_largestEvenNumber([-9 , -4 , -6 , -4])).toBe(-4);
});

test('testCase7' , () => {
    expect(_largestEvenNumber([17, 45, 17, 20 ])).toBe(20);
});

test('testCase8' , () => {
    expect(_largestEvenNumber([149, 0 , 156, 293])).toBe(156);
});