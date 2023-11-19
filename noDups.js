const removeDuplicates = function(arr) {
  let uniqueMap = new Map();

  arr.forEach(element => {
      uniqueMap.set(element, 0);
  });
  
  let uniqueArray = Array.from(uniqueMap.keys());
  return uniqueArray;
};

console.log(
  removeDuplicates([1, 2, 2, 2, 3, 4, 5]),
  removeDuplicates(['a', 'b', 'b', 'c', 'd', 'e', 'e', 'a', 'f']),
);