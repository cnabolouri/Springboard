// Double Values
function doubleValues(arr) {
  const result = [];
  arr.forEach((val) => {
    result.push(val * 2);
  });
  return result;
}
console.log(doubleValues([1, 2, 3])); // [2, 4, 6]

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
console.log(onlyEvenValues([1, 2, 3, 4])); // [2, 4]

// Show First And Last
function showFirstAndLast(arr) {
  const result = [];
  arr.forEach((str) => {
    result.push(str[0] + str[str.length - 1]);
  });
  return result;
}
console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"])); // ["ct", "mt", "tm", "uy"]

// Add Key And Value
function addKeyAndValue(arr, key, value) {
  arr.forEach((obj) => {
    obj[key] = value;
  });
  return arr;
}
console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "Instructor",
  ),
);

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
console.log(vowelCount("Elie")); // {e: 2, i: 1}

// Double Values With Map
function doubleValuesWithMap(arr) {
  return arr.map((val) => val * 2);
}
console.log(doubleValuesWithMap([1, 2, 3])); // [2, 4, 6]

// Exact Key
function extractKey(arr, key) {
  return arr.map((obj) => obj[key]);
}
console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name",
  ),
); // ["Elie", "Tim", "Matt", "Colt"]

// Filter By Value
function filterByValue(arr, key) {
  return arr.filter((obj) => obj[key] !== undefined);
}
console.log(
  filterByValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name",
  ),
); // [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
