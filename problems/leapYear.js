//Normal function implementation
function checkLeapYear(year) {
  if (!Number.isInteger(year)) {
    throw new 'TypeError';
  }
  return year % 4 === 0 && year % 100 != 0 || year % 400 == 0 ? true : false;
}

//Arrow function implementation
let _checkLeapYear = year => {
  if (!Number.isInteger(year)) {
    throw new 'TypeError';
  }
  return year % 4 === 0 && year % 100 != 0 || year % 400 == 0 ? true : false;
}

var yearInput = 2000;
console.log(checkLeapYear(yearInput));

yearInput = 2000;
console.log(_checkLeapYear(yearInput));

module.exports = { checkLeapYear, _checkLeapYear };