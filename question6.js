//Normal function implementation

//helper function to check if ends with 'Script'
function check(strInput){
    return strInput.endsWith('Script') ? true : false;}

// main function to perform the check
function checkEndsWith(input){
    //ternary condition to check for length of input to be greater than equal 6
    return input.length >= 6 ? check(input) : false ;
}

//Arrow function implementation

//helper function to check if ends with 'Script'
let _check = strInput => strInput.endsWith('Script') ? true : false;

// main function to perform the check
let _checkEndsWith = input => 
    //ternary condition to check for length of input to be greater than equal 6
    input.length >= 6 ? _check(input) : false ;

//Sample Input for Normal function implementation
stringInput='javaScript';
console.log(checkEndsWith(stringInput));

//Sample Input for Arrow function implementation
stringInput='javaScript';
console.log(_checkEndsWith(stringInput));