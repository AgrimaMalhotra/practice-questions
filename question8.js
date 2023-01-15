//Normal funciton implementation
function countVowels(input){
    const vowels=[ 'a', 'e','i','o','u'];
    let count=0;
    for (let idx=0; idx < input.length ; idx++){
        vowels.includes(input[idx])? count ++ : count;
    }
    return count;
}

//Arrow funciton implementation
let _countVowels = input => {
    const vowels=[ 'a', 'e','i','o','u'];
    let count=0;
    for (let idx=0; idx < input.length ; idx++){
        vowels.includes(input[idx])? count ++ : count;
    }
    return count;
}

 //Sample Case for Normal Function declaration
stringInput="codeacademy";
console.log(countVowels(stringInput));

 //Sample Case for Arrow Function declaration
 stringInput="codeacademy";
 console.log(_countVowels(stringInput));