const { getLargestEvenNumber, _getlargestEvenNumber } = require('practice-questions/problems/largestEvenNumber.js');

describe('Array Utilities', () => {
  describe('Largest Even Number in input array', () => {
    it('should return largest even number if input is array', () => {
      expect(getLargestEvenNumber([2, 5, 6, 8])).toBe(8);
    });
    it('should raise TypeError if input not an array', () => {
      expect(() => getLargestEvenNumber("teststring")).toThrow("Type Error");
    });
    it('should raise TypeError if array elements are not number', () => {
      expect(() => getLargestEvenNumber([1, 2, 3, 'str'])).toThrow("Type Error");
    });
    it('should return -1 if no array element is even', () => {
      expect(getLargestEvenNumber([1, 5, 3, 9])).toBe(-1);
    });
  });
});
