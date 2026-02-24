/* 
   Technical Skills Survey Project Part 2
   Helping Caesar's Traditional Secret Party
 */

const alphabet = "abcdefghijklmnopqrstuvwxyz";

/*
  Normalize any integer shift into the 0..25 range.
  This also ensures negative shifts work correctly.
 */
function normalizeShift(shiftValue) {
  if (!Number.isInteger(shiftValue)) {
    throw new Error("shiftValue must be an integer");
  }
  // JS % can be negative, so we normalize twice.
  return ((shiftValue % 26) + 26) % 26;
}

/*
  Shift a single letter by shift (0..25).
  Preserves case. Leaves non-letters unchanged.
 */
function shiftChar(char, shift) {
  const code = char.charCodeAt(0);

  // Uppercase A-Z
  if (code >= 65 && code <= 90) {
    const base = 65;
    const moved = (code - base + shift) % 26;
    return String.fromCharCode(base + moved);
  }

  // Lowercase a-z
  if (code >= 97 && code <= 122) {
    const base = 97;
    const moved = (code - base + shift) % 26;
    return String.fromCharCode(base + moved);
  }

  // Non-letter unchanged
  return char;
}

/*
  Returns a random lowercase letter (a-z).
 */
function randomLowercaseLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

/*
  encrypt(message, shiftValue)
  - Shifts ONLY letters by shiftValue
  - Leaves non-letters unchanged
  - After every 3 encrypted LETTERS, inserts one random lowercase letter
 */
function encrypt(message, shiftValue) {
  try {
    const shift = normalizeShift(shiftValue);

    let encryptedMessage = "";
    let letterCounter = 0; // counts ONLY letters we processed (not spaces/punct)

    for (let i = 0; i < message.length; i++) {
      const ch = message[i];
      const enc = shiftChar(ch, shift);
      encryptedMessage += enc;

      // Count only letters (A-Z or a-z) to match the spec "every 3 letters"
      const code = ch.charCodeAt(0);
      const isLetter =
        (code >= 65 && code <= 90) || (code >= 97 && code <= 122);

      if (isLetter) {
        letterCounter++;

        // After every 3 letters, insert a random lowercase letter
        if (letterCounter % 2 === 0) {
          encryptedMessage += randomLowercaseLetter();
        }
      }
    }

    return encryptedMessage;
  } catch (err) {
    console.log("Error");
    return "Error";
  }
}

/*
  decrypt(encryptedMessage, shiftValue)
  Steps:
  1) Remove every 4th character that was inserted after each 3 letters.
     Why 4th? Because pattern is: (3 shifted letters) + (1 random) => blocks of 4
     BUT spaces/punctuation do NOT contribute to the 3-letter counter, so we cannot
     simply remove every 4th character globally.
 
     Correct approach:
     - Walk through encryptedMessage
     - Count ONLY letters that belong to the original message (letters that were shifted)
     - Every time we’ve collected 3 letters, the next character is the random insert → skip it.
 
  2) Shift letters backward by shiftValue (i.e., shift by 26 - shift)
 */
function decrypt(encryptedMessage, shiftValue) {
  try {
    const shift = normalizeShift(shiftValue);
    const reverseShift = (26 - shift) % 26;

    // Step 1: remove inserted random letters reliably (based on letter counting)
    let filtered = "";
    let letterCounter = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const ch = encryptedMessage[i];
      const code = ch.charCodeAt(0);
      const isLetter =
        (code >= 65 && code <= 90) || (code >= 97 && code <= 122);

      // If we have just completed 3 original letters,
      // the NEXT character in encryptedMessage is the inserted random lowercase letter.
      // So skip it and reset the counter flow.
      if (isLetter) {
        letterCounter++;
      }
      if (letterCounter % 3 === 0 && isLetter) {
        // Skip this character when random letter is expected
        continue;
      }

      filtered += ch;
    }

    // Step 2: decrypt by shifting backward
    let decryptedMessage = "";
    for (let i = 0; i < filtered.length; i++) {
      decryptedMessage += shiftChar(filtered[i], reverseShift);
    }

    return decryptedMessage;
  } catch (err) {
    console.log("Error");
    return "Error";
  }
}

/* 
   TESTS (from the prompt examples — you can keep or remove)
   Note: because encryption inserts random letters, your output
   will differ each run. Decrypt should still restore the original.
    */

// Example: shift 3
const ex1 = encrypt("HELLO", 3);
console.log("encrypt('HELLO',3) =", ex1); // ex: "KHOxORy" (random letters vary)
console.log("decrypt(ex1,3) =", decrypt(ex1, 3)); // "HELLO"

// Example with punctuation/spaces (should remain unchanged)
const ex2 = encrypt("Meet me at 7:30 PM!", 3);
console.log("encrypt(...) =", ex2);
console.log("decrypt(...) =", decrypt(ex2, 3)); // "Meet me at 7:30 PM!"

/* 
   QUEST: decrypt the secret message using shiftValue = 42
   If your assignment provides a specific encrypted secret message,
   paste it below and run decrypt(secretMessage, 42).
   */

// Paste your provided secret message (the one shown in your assignment) here:
const secretMessage = ""; // <-- put the encrypted secret message string here

if (secretMessage) {
  console.log("Decrypted secret message:", decrypt(secretMessage, 42));
} else {
  console.log(
    "Add the provided encrypted secret message to `secretMessage` to complete the quest.",
  );
}
alert("Check out the console for output!");
