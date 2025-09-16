console.log("Hello World!");

let ourString = "I come first. ";
ourString += "I come second.";

console.log(ourString);

let someAdjective = "worthwhile";
let myString = "Learning to code is ";
const result = (myString += someAdjective);

console.log(result);

let firstNameLength = 0;
let firstName = "Ebuka";

firstNameLength = firstName.length;

console.log(firstNameLength);

let firstLetterOfFirstName = "";
firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName);

let wrongString = "Jello World";
wrongString[0] = "H"; // Wrong because of string immutability
wrongString = "Hello World"; // Correct

console.log(wrongString);

// Bracket Notation to find last character in a string
let lastLetterofFirstName = firstName[firstName.length - 1];
console.log(lastLetterofFirstName);

// Word Blank

function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  let result = "";

  result += `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}.`;

  return result;
}

console.log(worldBlanks("dog", "big", "ran", "quickly"));
console.log(worldBlanks("bike", "slow", "flew", "slowly"));

// Array

let ourArray = ["Ebuka", 20];
console.log(ourArray);
