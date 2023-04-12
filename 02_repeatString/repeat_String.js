const repeatString = function (a, b) {
  if (b < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < b; i++) {
    string += a;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
