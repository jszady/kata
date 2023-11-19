const numberOfVowels = function(data) {
  const vowels = ["a","e","i","o","u"];
  let count = 0;
  let arr = data.split("");
  arr.forEach(letter => {

    if(vowels.includes(letter))
      count++;
  });
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
