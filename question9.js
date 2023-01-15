//Normal function implementation
function nextCharacter(input){
    let replaceString='';
    for (let idx=0; idx < input.length ; idx ++){
        //find unicode of next character for current index position
        let newUnicode= input.charCodeAt(idx) + 1 ;
        replaceString += String.fromCharCode(newUnicode);
    }
    return replaceString;
}

//Arrow function implementation
let _nextCharacter = input => {
    let replaceString='';
    for (let idx=0; idx < input.length ; idx ++){
        // for 'z' and 'Z'
        if (input[idx] == 'z') replaceString += 'a';
        else if (input[idx] == 'Z') replaceString +='A';
        //find unicode of next character for current index position
        else {
            let newUnicode = input.charCodeAt(idx) + 1 ; 
            replaceString += String.fromCharCode(newUnicode) ;
        }
    }
    return replaceString;
}

//Sample Case - 1 using Normal function implementation
stringInput='codeacademy';
console.log(nextCharacter(stringInput));

//Sample Case - 2 using Arrow function implementation
stringInput='lazyinterns';
console.log(_nextCharacter(stringInput));