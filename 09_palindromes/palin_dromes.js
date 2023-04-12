const palindromes = function (s) {
  const String = s.toLowerCase().replace(/[^a-z]/g, "");
  return String.split("").reverse().join("") == String;
};

// Do not edit below this line
module.exports = palindromes;
