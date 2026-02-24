/* 
   Technical Skills Survey Project Part 2
   Exercise 8 — Caesar's Cipher Reloaded
   */

// Given code
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

/* 
   Step 1
   Create encryptLetter(letter, shiftValue)
   - Find index in alphabet
   - Add shift
   - Wrap with modulus
   - Return encrypted letter
   */
function encryptLetter(letter, shiftValue) {
  const lower = letter.toLowerCase();
  const index = alphabet.indexOf(lower);

  // Basic safety: if it's not in alphabet, return it unchanged
  if (index === -1) return letter;

  const newIndex = (index + shiftValue) % alphabet.length;
  return alphabet[newIndex];
}

/* 
   Step 2
   Create encryptMessage(word, shiftValue)
   - Loop through each letter
   - Call encryptLetter
   - Build encrypted message
    */
function encryptMessage(word, shiftValue) {
  let encrypted = "";

  for (let i = 0; i < word.length; i++) {
    encrypted += encryptLetter(word[i], shiftValue);
  }

  return encrypted;
}

/* 
   Step 3
   Create decryptLetter(letter, shiftValue)
   - Find index in alphabet
   - Subtract shift
   - Wrap correctly for negative values
   - Return decrypted letter
    */
function decryptLetter(letter, shiftValue) {
  const lower = letter.toLowerCase();
  const index = alphabet.indexOf(lower);

  // Basic safety: if it's not in alphabet, return it unchanged (optional)
  if (index === -1) return letter;

  // Handle negative wrapping safely:
  // (index - shift) might be negative, so add alphabet.length before mod.
  const newIndex = (index - shiftValue + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}

/* 
   Step 4
   Create decryptMessage(word, shiftValue)
   - Loop through each letter
   - Call decryptLetter
   - Build decrypted message
    */
function decryptMessage(word, shiftValue) {
  let decrypted = "";

  for (let i = 0; i < word.length; i++) {
    decrypted += decryptLetter(word[i], shiftValue);
  }

  return decrypted;
}

/* 
   Question
   If Caesar encrypts "BRUTUS" with encryptMessage and then decrypts
   the result with decryptMessage, will he get "BRUTUS" back?
   Why or why not?
    */

/*
Answer:

He will get the same LETTERS back (brutus), because Caesar Cipher
encryption is reversible when you use the same shift value:
- encrypt shifts forward by shiftValue
- decrypt shifts backward by shiftValue

However, with the current functions, the output is lowercase because
alphabet is lowercase and we return letters from alphabet as-is.
So:
encryptMessage("BRUTUS", 3) -> "euxwvw"
decryptMessage("euxwvw", 3) -> "brutus"

To get "BRUTUS" exactly (uppercase), we would need to preserve the
original case (uppercase/lowercase) when encrypting/decrypting.
*/

/* Demonstration */
const encryptedFriend = encryptMessage(friend, shiftValue);
const decryptedFriend = decryptMessage(encryptedFriend, shiftValue);

console.log("Encrypted:", encryptedFriend); // "euxwvw"
console.log("Decrypted:", decryptedFriend); // "brutus"

alert("Check out the console for output!");
