//Normal function implementation

function check(strInput) {
  return strInput.endsWith('Script') ? true : false;
}

function checkEndsWith(input) {

  return input.length >= 6 ? check(input) : false;
}

//Arrow function implementation

let _check = strInput => strInput.endsWith('Script') ? true : false;

let _checkEndsWith = input =>
  input.length >= 6 ? _check(input) : false;

var stringInput = 'javaScript';
console.log(checkEndsWith(stringInput));

stringInput = 'javaScript';
console.log(_checkEndsWith(stringInput));

module.exports = { checkEndsWith, _checkEndsWith };