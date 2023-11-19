const checkAir = function(samples, threshold) {
  let total = samples.length;
  let dirty = 0;

  samples.forEach(element => {
    if (element === "dirty") {
      dirty++;
    }
  });
  const precentDirty = dirty / total;

  if (precentDirty > threshold) {
    return "polluted";
  }
  return "clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));
