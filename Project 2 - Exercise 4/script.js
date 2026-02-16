/* 
   Technical Skills Survey Project Part 2
   Exercise 4 — The Secret Emblem of Caesar's Invitation
*/

// Given code
const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

let partyLocation = "";

/* 
   Step 1 
   Use if / else if / else to decipher the first clue.
*/

if (emblemClue1 === "Eagle") {
  partyLocation = "Forum";
} else if (emblemClue1 === "Lion") {
  partyLocation = "Colosseum";
} else {
  partyLocation = "Villa";
}

/* 
   Step 2 
   Use boolean logic to decipher the second clue.
*/

if (emblemClue2 === "Laurel" && partyLocation === "Forum") {
  partyLocation += " of Augustus";
} else if (emblemClue2 === "Grapes" || partyLocation === "Villa") {
  partyLocation += " of Pompey";
}

/* 
   Step 3 
   Use switch to decipher the third clue (direction).
*/

let direction = "";

switch (emblemClue3) {
  case 7:
    direction = "North";
    break;
  case 3:
    direction = "South";
    break;
  case 9:
    direction = "East";
    break;
  case 4:
    direction = "West";
    break;
  default:
    direction = "Unknown";
}

partyLocation += " - " + direction;

/* Final result */
console.log("Secret party location:", partyLocation);

/*
Expected result with given clues:
"Forum of Augustus - North"
*/

/* 
   Question 
   Why be careful using == instead of === ?
*/

/*
Answer 🔑:

== performs type coercion (automatic type conversion),
which can lead to unexpected results.

Example:
7 == "7"   // true  (string converted to number)
7 === "7"  // false (different types)

=== checks BOTH value and type,
making it safer and more predictable in conditionals.
*/

alert("Check out the console for output!");
