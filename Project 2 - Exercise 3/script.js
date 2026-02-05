/* =========================================================
   Technical Skills Survey Project Part 2
   Exercise 3 — Creating a Secret Shift Value for Caesar
   Goal: random integer shiftValue between 3 and 33 (inclusive)
   Place answers as comments where they appear.
   ========================================================= */

/* =========================================================
   Step 1 
   Generate a decimal number between 0 (inclusive) and 1 (exclusive)
   using JavaScript's Math functions.
   ========================================================= */
const randomDecimal = Math.random(); // 0 <= randomDecimal < 1

/* =========================================================
   Step 2 
   Determine the desired range of numbers for our secret shift value,
   which is between 3 and 33 (inclusive).
   ========================================================= */
const minShift = 3;
const maxShift = 33;
const range = maxShift - minShift + 1; // 31 possible integer values

/* Question 1 
   Why did we add 1 to the difference between 33 and 3?
*/
/*
Answer 🔑:
Because the range is inclusive of both endpoints.
Count of integers from 3 to 33 inclusive is:
(maxShift - minShift + 1) = (33 - 3 + 1) = 31
Without +1, you'd only get 30 possible outcomes and would miss one endpoint.
*/

/* =========================================================
   Step 3 
   Using randomDecimal, adjust its value to fit within the desired range.
   ========================================================= */
const randomInRangeDecimal = randomDecimal * range; // 0 <= value < 31

/* Question 2 
   How does multiplying randomDecimal by range help us get a number
   within our desired range?
*/
/*
Answer:
Math.random() gives a number in [0, 1).
Multiplying by 'range' scales that interval to [0, range).
So now we have a number that covers the size of our target range (31 values),
just not shifted to start at 3 yet.
*/

/* =========================================================
   Step 4 
   Round down the decimal number obtained in Step 3 to get a whole integer.
   ========================================================= */
const randomInt = Math.floor(randomInRangeDecimal); // integer from 0 to 30

/* Question 3
   Why do we use Math.floor() instead of Math.round()?
*/
/*
Answer:
Math.floor() always rounds down, producing integers 0..(range-1) uniformly.
Math.round() would overweight the endpoints because values near 0 and near range
round differently, and it can also produce 'range' itself in some cases, which
would break the intended bounds.
Floor is the standard way to map [0, range) -> {0,1,...,range-1}.
*/

/* =========================================================
   Step 5 
   Adjust the integer to fit the range 3 to 33 inclusive.
   ========================================================= */
const shiftValue = randomInt + minShift; // 3..33 inclusive

/* Question 4 
   How does adding 3 to randomInt ensure our final shiftValue is between 3 and 33?
*/
/*
Answer:
randomInt is between 0 and 30.
Adding 3 shifts the whole interval up by 3:
0+3=3 (minimum), 30+3=33 (maximum).
So shiftValue is guaranteed to be in [3, 33].
*/

console.log({ randomDecimal, range, randomInt, shiftValue });
alert("Check out the console for output!");