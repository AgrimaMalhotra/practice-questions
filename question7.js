//Normal function implementation
function concatStrings(input){
    return input.join('').slice(1);
}

//Arrow function implementation
let _concatStrings = input =>{
    return input.join('').slice(1);
}

//Sample Case using Normal function implementation
stringInput=["code", "academy"];
console.log(concatStrings(stringInput));

//Sample Case using Arrow function implementation
stringInput=["code", "academy"];
console.log(_concatStrings(stringInput));

//jest testing
module.exports = {concatStrings, _concatStrings};