/* Task 1: Compile Participant Details with Shorthand Property Names */

const name = "Alice";
const age = 28;
const studyField = "Neuroscience";

// Shorthand property names
const participant = {
  name,
  age,
  studyField,
};

console.log(participant);

/* Task 2: Implement a Shorthand Function for Participant Info */

const participantWithMethod = {
  ...participant,

  // Shorthand method
  displayInfo() {
    console.log(
      `Participant: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`,
    );
  },
};

participantWithMethod.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */

const participantWithArrow = {
  ...participant,

  // Arrow function method
  displayInfo: () => {
    console.log(
      `Participant: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`,
    );
  },
};

participantWithArrow.displayInfo();

/*
 * Observations:
 * Arrow functions do NOT have their own `this`.
 * Instead, they inherit `this` from the surrounding (global) scope.
 * Therefore, `this.name`, `this.age`, etc. will likely be undefined.
 * This is why arrow functions should NOT be used as object methods.
 */

/* Task 4: Using Computed Property Names */

function updateParticipantInfo(obj, key, value) {
  return {
    ...obj,
    [key]: value, // computed property name
  };
}

// Example usage
const updatedParticipant = updateParticipantInfo(participant, "age", 30);
console.log(updatedParticipant);
