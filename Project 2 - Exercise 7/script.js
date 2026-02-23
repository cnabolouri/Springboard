/* Technical Skills Survey Project Part 2
   Exercise 7 — Meeting Again with Caesar's Best Friend    */

// Given code
const friend = "BRUTUS";
const shiftValue = 3;

/* Step 1 */
const alphabet = "abcdefghijklmnopqrstuvwxyz";

/* Step 2 
   Use a loop to shift each letter and build encrypted name. */
let encryptedName = "";

// Iterate through each letter of "BRUTUS"
for (let i = 0; i < friend.length; i++) {
  // Convert current letter to lowercase for lookup
  const letter = friend[i].toLowerCase();

  // Find position in alphabet
  const originalIndex = alphabet.indexOf(letter);

  // Shift index and wrap
  const newIndex = (originalIndex + shiftValue) % alphabet.length;

  // Get encrypted letter and convert back to uppercase
  const encryptedLetter = alphabet[newIndex].toUpperCase();

  // Append to result
  encryptedName += encryptedLetter;
}

console.log("Encrypted name:", encryptedName);
// Expected: "EUWXWV"

/* 
   Question 1
   What advantage does using a loop provide over manually
   encrypting each letter?
    */

/*
Answer:

A loop automates the process, allowing the same logic to be
applied to every letter without repetition.

Benefits:
- Works for names of ANY length
- Reduces code duplication
- Less error-prone
- More efficient and scalable
- Enables dynamic input (user-provided strings)
*/

/* 
   Question 2
   Explain the role of alphabet.length in the loop.
   How does it aid encryption?
    */

/*
Answer:

alphabet.length (26) ensures the shifted index stays within
valid bounds of the alphabet.

Using modulus (%) with alphabet.length:

(newIndex) = (originalIndex + shift) % alphabet.length

This wraps values that exceed 'z' back to the beginning.

Without alphabet.length, we would go out of bounds.
*/

alert("Check out the console for output!");
