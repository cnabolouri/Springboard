/*
    FUNCTION fizzBuzz(n)

    IF n is not a positive integer OR n >= 100
        PRINT "Error"
        STOP

    FOR i from 1 to n (inclusive)
        IF i divisible by 3 AND 5
            PRINT "FizzBuzz"
        ELSE IF i divisible by 3
            PRINT "Fizz"
        ELSE IF i divisible by 5
            PRINT "Buzz"
        ELSE
            PRINT i
    END FOR
*/
function fizzBuzz(n) {
  // Validate input
  if (!Number.isInteger(n) || n <= 0 || n >= 100) {
    console.log("Error");
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

/*
    FUNCTION letterOccurrence(word)

    IF word is not a string OR contains non-letters
        PRINT "Error"
        STOP

    Convert word to lowercase

    Create empty dictionary counts

    FOR each character in word
        IF character already in counts
            increment count
        ELSE
            set count to 1

    FOR each letter in counts
        PRINT letter + count
    END
*/

function letterOccurrence(word) {
  // Validate input (letters only)
  if (typeof word !== "string" || !/^[a-zA-Z]+$/.test(word)) {
    console.log("Error");
    return;
  }

  const lower = word.toLowerCase();
  const counts = {};

  // Count letters
  for (const char of lower) {
    counts[char] = (counts[char] || 0) + 1;
  }

  // Print results
  for (const letter in counts) {
    console.log(letter + " : " + counts[letter]);
  }
}
