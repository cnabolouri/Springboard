/* 
   Technical Skills Survey Project Part 2
   Exercise 5 — Caesar's Party Guest List
*/

// Initial array of guests:
const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

/* 
   Step 1
   Add "BRUTUS" to the beginning of the list.
*/
guests.unshift("BRUTUS");

/*
Question 1 
How can you verify that "BRUTUS" was added to the beginning of the array?

Answer:
Check the first element (index 0) or log the array.
Example:
- guests[0] should be "BRUTUS"
- console.log(guests) should show "BRUTUS" first
*/

/* 
   Step 2 
   Add "AUGUSTUS" and "LUCIA" to the end of the guest list.
*/
guests.push("AUGUSTUS", "LUCIA");

/* 
   Step 3
   Check if "SPARTACUS" is invited and find what position.
*/
const spartacusIndex = guests.indexOf("SPARTACUS"); // -1 if not found

/*
Question 2 
What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?

Answer:
It would be -1 because indexOf() returns -1 when the item is not found.
*/

/* 
   Step 4
   Remove "CASSIUS" from the list.
*/
const cassiusIndex = guests.indexOf("CASSIUS");
if (cassiusIndex !== -1) {
  guests.splice(cassiusIndex, 1); // remove 1 element at cassiusIndex
}

/* 
   Step 5 
   Extract the first three guests into a new array.
*/
const firstThreeGuests = guests.slice(0, 3);

/* 
   Step 6 
   Sort the guest list alphabetically BUT keep the honored guest (first added)
   at the top of the list.

   Approach:
   1) Save the honored guest (current first element)
   2) Sort the remaining guests
   3) Put honored guest back at the front
*/
const honoredGuest = guests[0]; // "BRUTUS"
const remainingGuests = guests.slice(1); // everything except honored guest

remainingGuests.sort(); // alphabetical
const sortedGuestsWithHonoredFirst = [honoredGuest, ...remainingGuests];

/* 
   Verification logs 
*/
console.log("Current guests:", guests);
console.log("Spartacus index:", spartacusIndex);
console.log("First 3 guests:", firstThreeGuests);

alert("Check out the console for output!");
