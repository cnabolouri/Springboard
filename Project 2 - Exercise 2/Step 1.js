// Provided code 
const friend = "BRUTUS";
const shiftValue = 3;

/* =========================================================
   Step 1 
   Store the Latin alphabet in a variable with all letters in lowercase.
   ========================================================= */
const alphabet = "abcdefghijklmnopqrstuvwxyz"; // lowercase alphabet

/* =========================================================
   Step 2 
   Find the index of the first letter of Caesar’s friend. Store it in a variable.
   ========================================================= */
const firstLetter = friend[0].toLowerCase();        // "b"
const firstIndex = alphabet.indexOf(firstLetter);   // 1

// Question 1 
// "Oh, I know B is the 2nd letter of the alphabet. Then, why the result is 1 instead of 22?"
/*
Answer:
Because JavaScript string indexing is ZERO-based.
So: a -> 0, b -> 1, c -> 2, ... z -> 25
That’s why "b" returns 1 (not 2).
*/

/* =========================================================
   Step 3 
   Shift the first letter of Caesar’s friend by the given shift value (3 positions).
   Find and store the encrypted letter in a variable.
   ========================================================= */
const shiftedIndexNoWrap = firstIndex + shiftValue;              // "b" => 1 + 3 = 4
const encryptedLetterNoWrap = alphabet[shiftedIndexNoWrap];      // "e"

/* =========================================================
   Question 2 
   If we continue shifting and go beyond the last letter, which operator helps wrap around?
   ========================================================= */
/*
Answer :
Use the modulus operator: %
It “wraps” an index back into the range 0..(length-1).
*/

/* =========================================================
   Step 4
   Determine the length of the alphabet.
   ========================================================= */
const alphabetLength = alphabet.length; // 26

/* =========================================================
   Step 5 
   Shift the first letter again, but ensure wrapping with modulus.
   ========================================================= */
const wrappedIndex = (firstIndex + shiftValue) % alphabetLength; // "b" => (1+3)%26 = 4
const encryptedLetter = alphabet[wrappedIndex];                 // "e"

/* =========================================================
   Step 6 
   Extract the first 3 characters from the encrypted message using slice().
   Assume encrypted message is "EUXXWV".
   ========================================================= */
const encryptedMessage = "EUXXWV";
const teaser = encryptedMessage.slice(0, 3); // "EUX"

// For verification
console.log({ alphabet, firstLetter, firstIndex, encryptedLetterNoWrap, encryptedLetter, alphabetLength, teaser });
