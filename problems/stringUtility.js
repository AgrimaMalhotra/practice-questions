//Normal Function Implementation
function getCapitaliseLetter(char) {
  return (char >= 'a' && char <= 'z') ? char.toUpperCase() : char.toLowerCase();
}

function getCapitalise(stringInput) {
  let capitalizedString = '';
  for (let idx = 0; idx < stringInput.length; idx++) {
    capitalizedString = stringInput[idx] === ' ' ? capitalizedString.concat(' ') : capitalizedString.concat(getCapitaliseLetter(stringInput[idx]));
  }
  return capitalizedString;
}

//Arrow Function Implementation
let _getCapitaliseLetter = char => {
  return (char >= 'a' && char <= 'z') ? char.toUpperCase() : char.toLowerCase();
};

let _getCapitalise = stringInput => {
  let capitalizedString = '';
  for (let idx = 0; idx < stringInput.length; idx++) {
    capitalizedString = stringInput[idx] === ' ' ? capitalizedString.concat(' ') : capitalizedString.concat(_getCapitaliseLetter(stringInput[idx]));
  }
  return capitalizedString;
};

var stringInput = 'MeRRy hAD a LITTle lAMp';
console.log(getCapitalise(stringInput));

stringInput = 'MeRRy hAD a LITTle lAMp';
console.log(_getCapitalise(stringInput));

module.exports = { getCapitalise, _getCapitalise };