//Normal function implementation
function largestEvenNumber(input){
    //store even numbers in evenArray
    const evenArray= input.filter(function (number) {return number%2==0});
    //sort evenArray in descending order
    evenArray.sort(function(a, b){return b - a});

    return evenArray.length>0? evenArray[0]: -1;
}

//arrow function implementation
let _largestEvenNumber = input => {
    //store even numbers in evenArray
    const evenArray= input.filter(number => number%2 == 0);
    //sort evenArray in descending order
    evenArray.sort((a, b)=> {return b - a});

    return evenArray.length>0? evenArray[0]: -1;
}
//Sample Case - 1 using normal function declaration 
arrayInput=[1, 2, 3, 4, 5];
console.log(largestEvenNumber(arrayInput));

//Sample Case - 2 using arrow function declaration 
arrayInput=[1, 3, 5, 7];
console.log(_largestEvenNumber(arrayInput));