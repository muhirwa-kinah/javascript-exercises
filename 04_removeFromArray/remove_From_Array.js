const removeFromArray = function (a, ...b) {
  const newArray = [];

  a.forEach((item) => {
    if (!b.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
