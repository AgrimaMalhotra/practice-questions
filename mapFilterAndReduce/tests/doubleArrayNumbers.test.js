const { doubleNumbers } = require('./testFile.js'); //exporting object countaining function

describe('Array Utilities', () => {
  describe('Double Numbers', () => {
    it('Should double array elemnts if input is array', () => {
      const result = doubleNumbers([1, 2, 3]);
      expect(result).toEqual([2, 4, 6]);
    });
    //it ('Should return -1 if input not an array', () =>{
    //   const result = doubleNumbers("abcs");
    //    expect(result).toEqual(-1); 
    //});
    it('Should return TypeError if input not an array', () => {
      expect(() => {
        doubleNumbers("abcs");
      }).toThrow("TypeError");
    });

  });
});