const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let originalMessage = "GARDEN";       // could change if user inputs another word
let shiftValue = 3;                  // could change based on cipher setting
let encryptedMessage = "";           // will be built up
let decryptedMessage = "";           // will be built up
let unauthorizedGuestsDetected = false; // could change to true
