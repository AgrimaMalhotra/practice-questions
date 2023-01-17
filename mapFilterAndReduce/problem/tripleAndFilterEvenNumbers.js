//using map
let getTripledEvenArray = arrayInput => {
  if (!Array.isArray(arrayInput) || !arrayInput.every(num => Number.isInteger(num))) {
    throw new 'Type Error';
  }
  arrayInput = arrayInput.filter(num => num % 2 === 0);
  return arrayInput.map(num => num * 3);
}

//using reduce
let _getTripledEvenArray = arrayInput => {
  if (!Array.isArray(arrayInput) || !arrayInput.every(num => Number.isInteger(num))) {
    throw new 'Type Error';
  }
  const tripledEvenArray = arrayInput.reduce((acc, num) => {
    if (num % 2 == 0) {
      acc.push(num * 3);
    }
    return acc;
  }, []);
  return tripledEvenArray;
}

let arrayInput = [1, 2, 4, 6];
console.log(getTripledEvenArray(arrayInput));
console.log(_getTripledEvenArray(arrayInput));

module.exports = { getTripledEvenArray, _getTripledEvenArray };