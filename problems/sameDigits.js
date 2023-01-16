// normal function implementation
function getsameDigits(number) {
  if (!Number.isInteger(number)) {
    return false;
  }
  const unitDigit = number % 10;
  number = parseInt(number / 10);
  let flag = false;
  while (number > 0) {
    let currentDigit = number % 10;
    flag = unitDigit === currentDigit ? true : false;
    number = parseInt(number / 10);
    if (!flag) {
      break;
    }
  }
  return flag ? true : false;
}

//arrow function implementation
let _getsameDigits = number => {
  if (!Number.isInteger(number)) {
    return false;
  }
  const unitDigit = number % 10;
  number = parseInt(number / 10);
  let flag = false;
  while (number > 0) {
    let currentDigit = number % 10;
    flag = unitDigit === currentDigit ? true : false;
    number = parseInt(number / 10);
    if (!flag) {
      break;
    }
  }
  return flag ? true : false;
};


var number = 22;
console.log(getsameDigits(number));

//Sample Case - 2 using arrow function declaration 
number = 23;
console.log(_getsameDigits(number));

//jest testing
module.exports = { getsameDigits, _getsameDigits };