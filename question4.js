//Normal function implementation
function longestString(input){
    //sort strings in array based on their length
    return input.sort(function(a,b){ return b.length - a.length})[0];
}

//Arrow function implementation
function _longestString(input){
    //sort strings in array based on their length
    return input.sort((a,b) => { return b.length - a.length})[0];
}

// Sample Input - 1 using Normal function declaration
arrayInput=["we", "love", "code", "academy"];
console.log(longestString(arrayInput));

// Sample Input - 1 using Arrow function declaration
arrayInput=["we", "love", "code", "academy"];
console.log(_longestString(arrayInput));