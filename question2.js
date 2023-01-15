// normal function implementation
function sameDigits(input){
    //extract digit at units place
    const unitDigit = input % 10;
    //flag used to indicate in case of different digits
    let flag=false;
    while(input>0){
        let currentDigit = input % 10;
        //check if any digit different from unit digit
        unitDigit === currentDigit? flag = true : flag = false;
        input = parseInt(input / 10);

    }
    //return value based on flag set
    return flag? true : false;
}

//arrow function implementation
let _sameDigits = input => {
    //extract digit at units place
    const unitDigit = input % 10;
    //flag used to indicate in case of different digits
    let flag=false;
    while(input>0){
        let currentDigit = input % 10;
        //check if any digit different from unit digit
        unitDigit === currentDigit? flag = true : flag = false;
        input = parseInt(input / 10);

    }
    //return value based on flag set
    return flag? true : false;
}

//Sample Case - 1 using normal function declaration 
number= 22;
console.log(sameDigits(number));

//Sample Case - 2 using arrow function declaration 
number= 23;
console.log(_sameDigits(number));