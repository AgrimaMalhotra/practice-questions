//Normal Function Implementation
//helper function to Capitalize or Decapitalize characters
function capitaliseLetter(char){
    return (char >= 'a' && char <= 'z')? char.toUpperCase() : char.toLowerCase();
}

//function to change capitalization of characters in the given input string
function capitalise(input){
    let capitalizedString='';
    //loop through each character of string
    for (let idx =0; idx<input.length; idx ++){
        // ternary condition to check if current character is space or not
        capitalizedString = input[idx] ===' '? capitalizedString.concat(' ') : capitalizedString.concat(capitaliseLetter(input[idx]));
    }
    return capitalizedString;
}

//Arrow Function Implementation
//helper function to Capitalize or Decapitalize characters
let _capitaliseLetter = char =>{
    return (char >= 'a' && char <= 'z')? char.toUpperCase() : char.toLowerCase();
}

//function to change capitalization of characters in the given input string
let _capitalise = input => {
    let capitalizedString='';
    //loop through each character of string
    for (let idx =0; idx<input.length; idx ++){
        // ternary condition to check if current character is space or not
        capitalizedString = input[idx] ===' '? capitalizedString.concat(' ') : capitalizedString.concat(_capitaliseLetter(input[idx]));
    }
    return capitalizedString;
}

//Sample Input - 1 using normal function declaration 
var stringInput='MeRRy hAD a LITTle lAMp';
console.log(capitalise(stringInput));

//Sample Input - 1 using arrow function declaration 
var stringInput='MeRRy hAD a LITTle lAMp';
console.log(_capitalise(stringInput));