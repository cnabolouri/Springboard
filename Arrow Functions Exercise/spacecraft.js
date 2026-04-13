// 1. No Parameters: Activate Hyperdrive
const activateHyperdrive = () => {
  console.log("Hyperdrive activated!");
};

activateHyperdrive();

// 2. Implicit Return: Scan for Lifeforms
const scanForLife = () => "No lifeforms detected";

console.log(scanForLife());

// 3. Implicit Return with Objects: Log Coordinates
const currentCoordinates = () => ({
  x: 100,
  y: 250,
  z: 400,
});

console.log(currentCoordinates());

// 4. Understanding `this`: Message from Home Base
const spacecraft = {
  name: "Explorer I",

  // Arrow function method
  receiveMessage: (message) => {
    console.log("Message received:", message);
    console.log("this:", this);
  },
};

// Call the method
spacecraft.receiveMessage("Return to base immediately!");
