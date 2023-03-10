const { getTripledEvenArray, _getTripledEvenArray } = require('practice-questions/mapFilterAndReduce/problem/tripleAndFilterEvenNumbers.js');

describe('Array Utility', () => {
  describe('Triple every array element and filter out even numbers', () => {
    it('should return an array of tripled even numbers', () => {
      expect(getTripledEvenArray([1, 2, 3, 4, 5, 6])).toEqual([6, 12, 18]);
    });
    it('should throw Type Error if input not array', () => {
      expect(() => getTripledEvenArray('str')).toThrow('Type Error');
    });
    it('should throw Type Error if all array elements not int', () => {
      expect(() => getTripledEvenArray([1, 2, 3, 4, 'str', 6])).toThrow('Type Error');
    });
  });
  describe('Triple every array element and filter out even numbers using reduce', () => {
    it('should return an array of tripled even numbers', () => {
      expect(_getTripledEvenArray([1, 2, 3, 4, 5, 6])).toEqual([6, 12, 18]);
    });
    it('should throw Type Error if input not array', () => {
      expect(() => _getTripledEvenArray('str')).toThrow('Type Error');
    });
    it('should throw Type Error if all array elements not int', () => {
      expect(() => _getTripledEvenArray([1, 2, 3, 4, 'str', 6])).toThrow('Type Error');
    });
  });
});