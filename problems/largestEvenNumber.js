//Normal function implementation
function getLargestEvenNumber(arrayInput) {
  if (!Array.isArray(arrayInput) || (!arrayInput.every(num => Number.isInteger(num)))) {
    throw new 'Type Error';
  }
  const evenArray = arrayInput.filter(function (number) { return number % 2 == 0; });
  evenArray.sort(function (a, b) { return b - a; });
  return evenArray.length > 0 ? evenArray[0] : -1;

}

//arrow function implementation
let _getLargestEvenNumber = arrayInput => {
  const evenArray = arrayInput.filter(number => number % 2 == 0);
  evenArray.sort((a, b) => { return b - a; });
  return evenArray.length > 0 ? evenArray[0] : -1;
};

var arrayInput = [1, 2, 3, 4, 5];
console.log(getLargestEvenNumber(arrayInput));

arrayInput = [1, 3, 5, 7];
console.log(_getLargestEvenNumber(arrayInput));

module.exports = { getLargestEvenNumber, _getLargestEvenNumber };