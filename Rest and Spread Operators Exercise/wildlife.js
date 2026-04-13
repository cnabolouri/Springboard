// 1. Track Animal Sightings
function trackAnimalSightings(...animals) {
  console.log("Animal sightings:");
  animals.forEach((animal) => console.log(animal));
}

trackAnimalSightings("Tiger", "Elephant", "Panda", "Rhino");

// 2. Merge Habitat Areas
const forestHabitats = ["Rainforest", "Mangrove", "Bamboo Grove"];
const grasslandHabitats = ["Savanna", "Prairie", "Wetland"];

const protectedAreas = [...forestHabitats, ...grasslandHabitats];
console.log("Protected Areas:", protectedAreas);

// 3. Update Conservation Status
const animalStatus = {
  name: "Amur Leopard",
  population: 120,
  habitat: "Temperate Forest",
  status: "Critically Endangered",
};

const updatedAnimalStatus = {
  ...animalStatus,
  population: 135,
  habitat: "Protected Forest Reserve",
};

console.log("Original Status:", animalStatus);
console.log("Updated Status:", updatedAnimalStatus);

// 4. Catalog Genetic Diversity
const animalProfile = {
  name: "Black Rhino",
  status: "Critically Endangered",
  details: {
    region: "Africa",
    age: 12,
  },
};

const copiedAnimalProfile = {
  ...animalProfile,
  genetics: {
    diversityLevel: "Moderate",
    variationScore: 78,
  },
};

copiedAnimalProfile.details.age = 13;

console.log("Original Animal Profile:", animalProfile);
console.log("Copied Animal Profile:", copiedAnimalProfile);

/*
Explanation:
This is a shallow copy. The top-level properties are copied,
but nested objects are still shared by reference.
So changing copiedAnimalProfile.details.age also changes
animalProfile.details.age.
The new genetics property is separate because it was newly added.
*/

// 5. Analyze Ecosystem Health
const ecosystemHealth = {
  zone: "Northern Sanctuary",
  metrics: {
    waterQuality: "Good",
    foodSupply: "Stable",
  },
};

const copiedEcosystemHealth = {
  ...ecosystemHealth,
};

copiedEcosystemHealth.metrics.waterQuality = "Poor";

console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Copied Ecosystem Health:", copiedEcosystemHealth);

/*
Explanation:
This is also a shallow copy.
The nested object metrics is shared between both objects.
So changing copiedEcosystemHealth.metrics.waterQuality
also changes ecosystemHealth.metrics.waterQuality.
*/
