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

console.log(myList);

// Functions

function ourReusableFunction() {
  console.log("Heyya, World!");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}

ourFunctionWithArgs(10, 5);
ourFunctionWithArgs(43, 99);

// Scope
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";

  if (typeof myGlobal != "undefined") {
    output += `myGlobal: ${myGlobal}`;
  }

  if (typeof oopsGlobal != "undefined") {
    output += `oopsGlobal: ${oopsGlobal}`;
  }

  console.log(output);
}

// fun1()
fun2();

// Local Scope

function myLocalScope() {
  let anExample = 5;
  console.log(anExample);
}

myLocalScope();
// console.log(anExample); // Throws an error

// Local vs Global scope

let outerWear = "T-Shirt";

function myOutfit() {
  let outerWear = "Sweater";

  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

// Returing a value from a function with return

function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));
console.log(minusSeven(34));

let sum = 0;
function addThree() {
  sum = sum + 3;
}

console.log(addThree());

let changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

console.log(changed);

function nextInLine(arr, item) {
  arr.push(item);

  return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];

console.log(`Before: ${JSON.stringify(testArr)}`)
console.log(nextInLine(testArr, 6));
console.log(`After: ${JSON.stringify(testArr)}`);

