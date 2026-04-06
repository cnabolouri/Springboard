const creatures = [
  { name: "Dragon", type: "Fire", location: "Volcanic Mountains" },
  { name: "Mermaid", type: "Water", location: "Coral Reef" },
  { name: "Griffin", type: "Air", location: "High Cliffs" },
  { name: "Unicorn", type: "Earth", location: "Enchanted Forest" },
  { name: "Kraken", type: "Water", location: "Deep Ocean" },
];

// 1. Find first Water-type creature
const waterCreature = creatures.find((c) => c.type === "Water");
console.log(waterCreature.name);

// 2. Find index of Griffin
const griffinIndex = creatures.findIndex((c) => c.name === "Griffin");
console.log(griffinIndex);

// 3. Find first creature in Enchanted Forest
const forestCreature = creatures.find((c) => c.location === "Enchanted Forest");
console.log(forestCreature);
