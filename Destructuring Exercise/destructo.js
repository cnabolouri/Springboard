// 1. Unveiling the Coordinates
const coordinates = { x: 12, y: 34 };
const { x, y } = coordinates;
console.log("Coordinates:", x, y);

// 2. The Map of Secrets
const locations = {
  first: "Ancient Tree",
  second: "Crystal Lake",
  third: "Hidden Cave",
  fourth: "Forgotten Tower",
};

const { first, second, ...remaining } = locations;
console.log("Key locations:", first, second);

// 3. The Mysterious Door
const doorCode = {
  start: "Sun",
  end: "Moon",
};

// default middle to one value from remaining if not provided
const { start, middle = Object.values(remaining)[0], end } = doorCode;

console.log("Door code sequence:", start, middle, end);

// 4. The Guardian's Riddle
const riddle = { ancientWord: "Wisdom" };
const { ancientWord: translation } = riddle;
console.log("Translation:", translation);

// 5. The Array of Elements
const elements = ["Fire", "Water", "Earth", "Air"];
const [element1, element2] = elements;
console.log("Essential elements:", element1, element2);

// 6. Skipping Stones
const stones = ["Stone1", "Stone2", "Stone3", "Stone4", "Stone5", "Stone6"];
const [firstStone, , , , , sixthStone] = stones;
console.log("Extracted stones:", firstStone, sixthStone);

// 7. The Array of Shadows
const shadows = [
  "Visible Shadow",
  "Hidden Shadow 1",
  "Hidden Shadow 2",
  "Hidden Shadow 3",
];
const [visibleShadow, ...hiddenShadows] = shadows;
console.log("Visible shadow:", visibleShadow);
console.log("Hidden shadows:", hiddenShadows);

// 8. The Wise Function
function revealPath({ direction, distance }) {
  console.log(`Travel ${distance} units toward ${direction}.`);
}

revealPath({ direction: "North", distance: 50 });

// 9. Potion of Clarity
function mixPotion({ ingredient1 = "Water", ingredient2 = "Fireflower" } = {}) {
  console.log(`Mixing potion with ${ingredient1} and ${ingredient2}.`);
}

mixPotion({});
mixPotion({ ingredient1: "Moonleaf" });

// 10. The Array Spell
function castSpell([ingredientA, ingredientB]) {
  console.log(`Casting spell with ${ingredientA} and ${ingredientB}.`);
}

castSpell(["Stardust", "Dragon Herb", "Crystal"]);

// 11. The Nested Secret
const artifact = {
  chamber: {
    innerSanctum: {
      secret: "The Final Key",
    },
  },
};

const {
  chamber: {
    innerSanctum: { secret },
  },
} = artifact;

console.log("Unveiled secret:", secret);

// 12. The Swap of Fate
let stoneA = "Ruby";
let stoneB = "Sapphire";

[stoneA, stoneB] = [stoneB, stoneA];
console.log("After swap:", stoneA, stoneB);
