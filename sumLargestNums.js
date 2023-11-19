const sumLargestNumbers = function(data) {
  //sorts the data from smallest to largest;
  data.sort((a,b) => a-b);
  const lastElement = data.length - 1;

  return data[lastElement] + data[lastElement - 1];

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
