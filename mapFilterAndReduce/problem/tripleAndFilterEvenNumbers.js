let getTripledEvenArray = arrayInput => {
  if (!Array.isArray(arrayInput) || !arrayInput.every(num => Number.isInteger(num))) {
    throw new 'Type Error';
  }
  arrayInput = arrayInput.filter(num => num % 2 === 0);
  return arrayInput.map(num => num * 3);
}

let arrayInput = [1, 2, 4, 6];
console.log(getTripledEvenArray(arrayInput));

module.exports = { getTripledEvenArray };