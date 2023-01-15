//Normal function implementation
function checkLeapYear(input){
    return input%4 === 0 && input%100!=0 || input%400 == 0 ? true : false;
}

//Arrow function implementation
let _checkLeapYear = input => input%4 === 0 && input%100!=0 || input%400 == 0 ? true : false;

//Sample Input with normal function implementation
yearInput=2000;
console.log(checkLeapYear(yearInput));

//Sample Input with arrow function implementation
yearInput=100;
console.log(_checkLeapYear(yearInput));