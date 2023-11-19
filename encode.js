const urlEncode = function(text) {
  const noSpaces = text.trim();
  
  let arr = noSpaces.split("");

  let encodeing = arr.map( space =>{
    if(space === " ")
    {
      space = "%20";
    }
    return space;
  })
  let encoded = encodeing.join("");
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
