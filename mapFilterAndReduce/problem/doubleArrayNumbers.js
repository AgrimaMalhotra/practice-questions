const doubleNumbers = (numbers) => {
  let doubleNumber;
  if (!Array.isArray(numbers)) {
    throw new "TypeError";
  }
  else {
    doubleNumber = numbers.map(num => num * 2);
  }
  return doubleNumber;

};

console.log(doubleNumbers([1, 2, 3]));
module.exports = { doubleNumbers };