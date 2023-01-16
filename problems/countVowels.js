//Normal funciton implementation
function getCountVowels(string) {
  if (typeof string !== 'string') {
    throw new 'Type Error';
  }
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let idx = 0; idx < string.length; idx++) {
    vowels.includes(string[idx]) ? count++ : count;
  }
  return count;
}

//Arrow funciton implementation
let _getCountVowels = string => {
  if (typeof string !== 'string') {
    throw new 'Type Error';
  }
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let idx = 0; idx < string.length; idx++) {
    vowels.includes(string[idx]) ? count++ : count;
  }
  return count;
};

//Sample Case for Normal Function declaration
var stringInput = 'codeacademy';
console.log(getCountVowels(stringInput));

//Sample Case for Arrow Function declaration
stringInput = 'codeacademy';
console.log(_getCountVowels(stringInput));

//jest testing
module.exports = { getCountVowels, _getCountVowels };