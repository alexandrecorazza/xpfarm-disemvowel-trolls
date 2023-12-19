const disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';

  for(let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr = newStr + str[i];
    }
  }

  return newStr;
};
  
module.exports = {
  disemvowel,
};