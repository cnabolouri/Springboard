/* 
   Exercise 6 — Caesar's VIP Guest Directory
   Goal: practice objects (add, update, access, delete, references)
*/

/* Initial guest */
const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"],
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"],
  },
};

/* 
   Step 1 
   Add "BRUTUS" to the guest directory with given details.
*/
guests.BRUTUS = {
  title: "Senator",
  region: "Rome",
  dietaryPreference: "Vegan",
  pastGifts: ["Silver Dagger", "Marble Bust"],
};

/* 
   Step 2 
   Update CICERO's past gifts to include "Golden Lyre".
*/
guests.CICERO.pastGifts.push("Golden Lyre");

/* 
   Step 3 
   Retrieve the region of ANTONY.
*/
const antonyRegion = guests.ANTONY.region; // "Rome"

/* 
   Step 4 
   Remove CICERO from the guest list using delete.
*/
delete guests.CICERO;

/* 
   Step 5 
   Assign ANTONY's profile to a variable, then change region to "Egypt".
*/
const generalProfile = guests.ANTONY; // reference to same object
generalProfile.region = "Egypt"; // modifies original object too

/* 
   Question 1 
   After executing Step 5, what will be the region of ANTONY
   in the original guests object?
*/

/*
Answer:

It will be "Egypt".

Why?
Objects in JavaScript are assigned by reference, not by value.
generalProfile and guests.ANTONY both point to the SAME object
in memory. Changing one changes the other.
*/

/* Verification */
console.log("ANTONY region:", guests.ANTONY.region); // "Egypt"
console.log("Retrieved region earlier:", antonyRegion); // still "Rome"

alert("Check out the console for output!");
