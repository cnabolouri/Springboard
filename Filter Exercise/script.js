const planets = [
  { name: "Mercury", temperature: 440, distance: 0.39 },
  { name: "Venus", temperature: 737, distance: 0.72 },
  { name: "Earth", temperature: 288, distance: 1.0 },
  { name: "Mars", temperature: 210, distance: 1.52 },
  { name: "Kepler-442b", temperature: 290, distance: 1.2 },
];

const habitablePlanets = planets
  .filter(
    (planet) =>
      planet.temperature >= 253 &&
      planet.temperature <= 323 &&
      planet.distance >= 0.75 &&
      planet.distance <= 1.5,
  )
  .map((planet) => planet.name);

console.log(habitablePlanets);
