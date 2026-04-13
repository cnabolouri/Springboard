// Task 4: Hoisting example (before declaration)
console.log(timeMachineModel);
// Output: undefined
// Explanation:
// Variables declared with "var" are hoisted (moved to the top),
// but only the declaration is hoisted, NOT the value assignment.
// So JS knows the variable exists, but it hasn't been assigned yet.

var timeMachineModel = "T-800";

// Task 1: Declare destination using let
let destination = "Ancient Egypt";
console.log(destination); // Ancient Egypt

// Task 2: Change destination
destination = "Medieval Europe";
console.log(destination); // Medieval Europe

// Task 3: Declare constant travelDate
const travelDate = "2024-03-15";
console.log(travelDate);

// Attempt to change it
// travelDate = "2025-01-01";
//  This will throw an error: "Assignment to constant variable."
// Explanation:
// Variables declared with "const" cannot be reassigned after initialization.
