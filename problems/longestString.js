//Normal function implementation
function getLongestString(arrayInput) {
  if (!Array.isArray(arrayInput)) {
    throw new 'Type Error';
  }
  return arrayInput.sort(function (a, b) { return b.length - a.length; })[0];
}

//Arrow function implementation
function _getLongestString(arrayInput) {
  if (!Array.isArray(arrayInput)) {
    throw new 'Type Error';
  }
  return arrayInput.sort((a, b) => { return b.length - a.length; })[0];
}

var arrayInput = ['we', 'love', 'code', 'academy'];
console.log(getLongestString(arrayInput));

arrayInput = ['we', 'love', 'code', 'academy'];
console.log(_getLongestString(arrayInput));

module.exports = { getLongestString, _getLongestString };//exporting object with two functions
//in case of multiple functions
//module.exports= getlongestString; just passing a function --can access using normal brackets
