//Normal function implementation
function concatStrings(arrayInput) {
  return arrayInput.join('').slice(1);
}

//Arrow function implementation
let _concatStrings = arrayInput => {
  return arrayInput.join('').slice(1);
};

var arrayInput = ['code', 'academy'];
console.log(concatStrings(arrayInput));

arrayInput = ['code', 'academy'];
console.log(_concatStrings(arrayInput));

module.exports = { concatStrings, _concatStrings };