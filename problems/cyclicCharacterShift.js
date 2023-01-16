//Normal function implementation
function getNextCharacter(string) {
  if (typeof string !== 'string') {
    throw new 'Type Error';
  }
  let replaceString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] == 'z') replaceString += 'a';
    else if (string[idx] == 'Z') replaceString += 'A';
    else {
      let newUnicode = stringInput.charCodeAt(idx) + 1;
      replaceString += String.fromCharCode(newUnicode);
    }
  }
  return replaceString;
}

//Arrow function implementation
let _getNextCharacter = string => {
  if (typeof string !== 'string') {
    throw new 'Type Error';
  }
  let replaceString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] == 'z') replaceString += 'a';
    else if (string[idx] == 'Z') replaceString += 'A';
    else {
      let newUnicode = stringInput.charCodeAt(idx) + 1;
      replaceString += String.fromCharCode(newUnicode);
    }
  }
  return replaceString;
};

var stringInput = 'codeacademy';
console.log(getNextCharacter(stringInput));

//stringInput = 'lazyinterns';
stringInput = "kbwb tdsjqu";
console.log(_getNextCharacter(stringInput));

module.exports = { getNextCharacter, _getNextCharacter };