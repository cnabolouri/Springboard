// Double Values
function doubleValues(arr) {
  const result = [];
  arr.forEach((val) => {
    result.push(val * 2);
  });
  return result;
}

// Only Even Values
function onlyEvenValues(arr) {
  const result = [];
  arr.forEach((val) => {
    if (val % 2 === 0) {
      result.push(val);
    }
  });
  return result;
}

// Show First And Last
function showFirstAndLast(arr) {
  const result = [];
  arr.forEach((str) => {
    result.push(str[0] + str[str.length - 1]);
  });
  return result;
}

// Add Key And Value
function showFirstAndLast(arr) {
  const result = [];
  arr.forEach((str) => {
    result.push(str[0] + str[str.length - 1]);
  });
  return result;
}

// Vowel Count
function vowelCount(str) {
  const result = {};
  const vowels = "aeiou";

  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (vowels.includes(char)) {
        result[char] = (result[char] || 0) + 1;
      }
    });

  return result;
}

// Double Values With Map
function doubleValuesWithMap(arr) {
  return arr.map((val) => val * 2);
}

// Exact Key
function extractKey(arr, key) {
  return arr.map((obj) => obj[key]);
}

// Filter By Value
function filterByValue(arr, key) {
  return arr.filter((obj) => obj[key] !== undefined);
}
