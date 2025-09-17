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

let nestedArray = [
  ["Ebuka", 20],
  ["John", 45],
];

console.log(nestedArray);

let ourData = [50, 60, 70];
console.log(ourData[0]);

ourData[1] = 45; // Modifying arrays with index
console.log(ourData);

// Access Multi-Dimensional arrays with indexes
let multiArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
console.log(multiArray);
console.log(multiArray[2][1]);

// Manipulate array with .push() - adds to an array (from behind)
let randomArray = ["Stimpson", "J", "Cat"];
randomArray.push(["happy", "joy"]);

console.log(randomArray);

// Manipulate array with .pop() - removes the last element of an array
let numArray = [1, 2, 3];
let removeLastArray = numArray.pop();

console.log(removeLastArray);
console.log(numArray);

// Manipulate array with .shift() - removes the first element of an array
let removeFirstArray = numArray.shift();
console.log(removeFirstArray);
console.log(numArray);

// Manipulate array with .unshift() - adds to an array (from the beginning of an array)
let someArray = ["Ebuka", "Hello", 20];
someArray.shift();
someArray.unshift("Happy");

console.log(someArray);

// Example - Shopping List
let myList = [
  ["Cereals", 3],
  ["Milk", 2],
  ["Banana", 3],
  ["Juice", 2],
  ["Eggs", 12],
];

console.log(myList)
