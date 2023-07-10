/* eslint-disable */
// Adding a JS file into an HTML file 

// the js file needs to be at the bottom of the body tag so changes can take effect
// because if you are not using window.onLoad = () => {document.queryselector(".element") = "new value" } it won't work
window.onload = () => {
  document.querySelector(".new").innerText = "sss";
}; // it will change the value even if the JS file was at the very beginning of the page while anychange outside the arrow function won't take place
// best practice is to put the JS file at the bottom so you don't have to wait for the whole document to load then make the changes



typeof ["2", 3, "4"] // object (while it's an array)
typeof null // object (while it's a null value)
typeof {
  name: "ahmad",
  age: 17,
  country: "eg"
} //  object 

// eccmascript6 regarding backticks
myVarName = `sheko's variable`;
let sheko = `i'm
a
variable!
${myVarName}`;
console.log(sheko)

// NaN means not a number
// typeof NaN is number (lmao)

console.log(2 ** 4) // 2^4 ES7
console.log(11 % 2) // division remainder 
console.log(100) // 100 in blue (number)
console.log("100") // 100 in black (string)
console.log(0xFFFF) // printing hexadecimals

// unary operator (+) (return a number if not a number)
console.log(+true) = 1
// unary negation
console.log(-true) = -1 // (return a number if not a number and negates it [makese it a -ve number instead])
// there's also Number("100") constructor
// type coercion === type casting

// /LESSON 24/
// number methods
(100).toString() // outputs 100 in a string with black color! also String(100) does the same thing
(100.5676).toFixed(3) // outputs 100.568
parseInt("100 osama") // outputs 100 in blue while Number("100 osmaa") will output NaN
parseInt("100.543") // outputs 100 as int

// unlike parseInt(), Number() will also return a float or (resolved) exponential notation like ["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]
//["1.1", "2.2e2", "3e300"].map((num) => parseInt(num)); // [1, 2, 3]

Number.isInteger(100) // true while "100" and 100.4 are false
number.isNaN(100) // false while "ahmad"/20 true 

//  /LESSON 25/
Math.round(99.5) = 100
Math.ceil(100.3) = 101
Math.floor(99.9) = 99
Math.min(10, 20, 30, 4, 50, 69) // return min number
Math.max(10, 20, 66, 88) = 88 // returns max number
Math.pow(2, 5) // 2^5  32 
Math.trunc(99.5) // returns the int value only introduced in eccmascript6

// /LESSON 27/
let myName = "ahmed";
myName[1] = h
myName.charAt(1) = h
myName[5] // undefined while myName.charAt(5) = ''
typeof myName.charAt(5) // String
theName.trim() // trims whitespaces at the beginning and at the end
theName.toUpperCase()
theName.toLowerCase()

// /LESSON 28/

let a = "sheko nella "
a.indexOf("e") // 2
let c = a.indexOf("nella") // 6
let b = ("nella").length // 5
a.lastIndexOf("e") // 4
a.repeat("4") // repeats a 4 times
a.slice(2, 6) // from 2 till 6 ( 6 isn't included)
a.slice(c, b + c) // 'nella'
a.split("", (LIMIT)) // outputs an array with all the characters in form of an array

// The substr() method extracts a part of a string.
// The substr() method begins at a specified position, and returns a specified number of characters.
// The substr() method does not change the original string.
// To extract characters from the end of the string, use a negative start position

// /LESSON 35/ Conditional Ternary Operator
// note: it can be nested like the next example
let name = "ahmad";

name == "ahmad" ?
  console.log("you can enter") :
  name == "reem" ?
  console.log("my sister can enter") :
  name == ("bodda" || "3amora") ?
  console.log("my brothers can enter") :
  console.log("no one else allowed")

// && and operator
// || or operator
// ! not operator

// /LESSON 36/ Nullish Coalescing Operator And Logical Or
let price = 100;
console.log('the price is ${price || 200 }') //backticks to be able to use variables inside string also what precedes the OR operator will be used as an output
// if price output is null or any false value
Boolean(-100) == true // capital B
// Boolean constructor used to output the boolean value of any value

// Nullish Coalescing ?? null or undefind but if it was a false value like 0 or ""
console.log(`the price is ${price ?? "an error has occured while retreiving the value" } }`);

// /LESSON 37/ switch case
let day = 0;
switch (day) {
  // two cases that leads to the same output you can cascade them
  case 0:
  case 7:
      // block of code
      console.log("saturday");
      break;
  case 0:
      // block of code
      console.log("sunday");
      break;
  default:
      // block of code
      console.log("unknown day");
}
// if there was no break at line 105 the output will be satuday and all the block of codes in all the other cases in conc: you have to put break;
// you can put the default case wherever you want doesn't have to be at the bottom

// /LESSON 40&41/ Arrays

Array.isArray(["myfriends", "sheko", "ahmadgho"]); // outputs true
let myArray = ["learn JS", "learn React", "learn NodeJS"];
myArray.length; // 3
myArray[8] = "i'm a new element now the new length is 9 & from index 3 to index 8 those are all EMPTY";
console.log(myArray.length); // 9 
console.log(myArray); // (9) ['learn JS', 'learn React', 'learn NodeJS', empty × 5, "i'm a new element now the new length is 9 & from index 3 to index 8 those are all EMPTY"]
myArray[myArray.length] = "new value at the end";
myArray.length = 3;
console.log(myArray); // overwrites the array to have the first it's first 3 elements only and outputs them

// hoisting
// IN JS and at the very first line of the code 
// Variable declarations are scanned and are made undefined
// Function declarations are scanned and are made available

// Example 

function boo() {
  return foo();
  var foo = function() {
      return "A";
  }

  function foo() {
      return "B";
  }
}
boo(); // returns "B" 
// at the very start second foo has been assigned to foo and now WHEREVER you retun foo it will retun with the value of second foo 
// var let you redeclare values while const and let doesn't let you

//LESSON 42 ADD AND REMOVE FROM ARRAY

// add to the beggining of the array with unshift() ex) array.unshift("i'm now the first element holding index 0");
// add the the end of the array with push() ex) array.push("i'm now the last element holding index {array.length-1}")
// remove from the beggining of the array with shift() ex) array.shift() and you can hold the value in a variable
// remove from the end of the array with pop() ex) array.pop() and you can hold the value in a variable as well  

// /LESSON 43/ Searching Array

let myFriends = ["ahmad", "donatello", "tarek", "ahmad", "marsh"];

myFriends.indexOf("ahmad") // 0 Left to right
myFriends.indexOf("ahmad", 3) // left to right start from index 3
myFriends.indexOf("Osama") // -1 (not found)

myFriends.lastIndexOf("marsh") // 4 (returns element's index) but searches from right to left
myFriends.lastIndexOf("ahmad", -2) // returns 4 as it starts with the element we are searching for

myFriends.includes("ahmad") // true
myFriends.includes("ahmad", 4) //false

// /LESSON 44/ sorting array

let myNumbers = ["10", "donatello", "90", 1, 2, 5, 3, 200, 3000, 1000];
let newArr = myNumbers.sort();
// ans 1,10,1000,2,200,3,3000,5,90,donatello //numbers ascending order (first number) then number of zeros ex(1,10,2,200,3000,6) then letters alphabetically 
// and it changes original array aswell! so newArr === myNumbers now!
myNumbers.reverse(); // reverses the order without sorting anything so now as our array is sorted because we called sort method on it reverse will change the reverse element order
// donatello,90,5,3000,3,200,2,1000,10,1

// you can chain them aswell so myNumbers.sort().reverse();

// /LESSON 45/ array slicing

// ["ahmad", "donatello", "tarek", "ahmad", "marsh"];

// slicing methods: array.slice( [opt] start, [opt] end ) doesn't include end position & doesn't change original array
myFriends.slice(2, 4) // tarek, ahmad you can also use element as a starting index "ahmed", 3 outputs dontallo, tarek, ahmad
// array.splice(start [Mand], Deletion count[Opt] def:0, Items to add [Opt]) changes original array!
myFriends.splice(2, 0, "ameer", "hossam") // adds amer and hossam starting from index 2 and returns deleted elements (in this case returns empty array)
myFriends.splice(2, 0, "ameer", "hossam") // adds amer and hossam starting from index 2 and removes elements in index 2 and 3 and returns them in an array same as pop and shift

// /LESSON 46/ array concatenation

// join two or more arrays together with concat method you can also add separate elements
allArrays = myNumbers.concat(myFriends, ["elem1,elem2"], "separateElement");
// join method array.join(separtor [OPT] default: ",") outputs a string with array elements and you get to specify the separator 

// /lesson 48&49/ LOOPS (For loops)
let myFs = [];
for (i = 0; i < myNumbers.length; i++) {
  // we use isInteger method from Number construct to validate wether it's a number or not 
  // and execluding string numbers and only add real string values
  if (!Number.isInteger(+myNumbers[i])) {
      myFs.push(myNumbers[i]); // push (ideal) is to add elements each iterations to the end of the array while unshift will add each element to the beggining of the array
  }
}

// /LESSON 50/ Nested Loops And Trainings
let productsColor = ["red", "green", "blue"];
let myProducts = ["mouse", "keyboard", "monitor", "laptop", "stickers", "camera", 2, "charger"];
let models = ["2021", "2022"];

for (i = 0; i < myProducts.length; i++) {
  console.log(`product is :${myProducts[i]} and it's color is ${productsColor}`);
}

mainLoop: for (i = 0; i < myProducts.length; i++) {
  if (myProducts[i] === "laptop") {
      continue; // (continue) skips working on that specific iteration and starts with the next one 
  } else if (typeof myProducts[i] == "number") {
      break; // (break) breaks the loop  
  }
  document.write(`<h1>product is :${myProducts[i]}</h1>`);

  nestedLoop: for (j = 0; j < productsColor.length; j++) {
      if (myProducts[i] == "keyboard") {
          continue mainLoop;
      } //skips working on the main loop within the nested loop
      // if certain conditions were met by using continue and using mainloop label
      document.write(
          `<h3>available in <span style="color:${productsColor[j]};">:${productsColor[j]} </span></h3>`
      );
  }
  document.write(`<h2>${"#".repeat("14")}</h2>`);
}

// /LESSON 52/ For Loop Advanced Example
let i = 0;
for (; i < 5;) { //whatever paramter you taking out of the () make sure to leave it's  ; inside 
  console.log(i);
  i++;
}
console.log(i);
// console logging i will throw an error as i variable isn't accessible outside the loop if you had it inside the parenthesis ()

// you can also take the condition inside of the loop 
for (;;) {
  //whatever paramter you taking out of the () make make sure to leave it's  ; inside  
  if (i == 5) break;
  i++;
}

// /LESSON 54/ Loop - While
// continue does not terminate the execution of the loop entirely, but instead:

// In a while loop, it jumps back to the condition and if the condition evaluates as true it will stay stuck there till it evaluates to false.
// In a for loop, it jumps to the update expression (i++) and starts with a new iteration.
let z = 0;
while (z < 8) {
  if (z == 3) {
      z = 4; // the reason why we are assigning the z to 4 before the continue so it can break out of the loop because anything after continue in the if condition won't be evaluated
      continue; // if z =4 doesn't exist code will cause infinite loop as the continue jumps back to the (if condition) and z will never be equal to something else other than 3
  }
  document.write(`<p>${z}</p>`);
  z++;
}

// /LESSON 55/ Loop - Do While
let x = 0;
do { // do this block of code while the condition between the while parenthesis evaluates as true, even if the condition is false it will do the block of code once then stops
  document.write(`<p>${x} is the value of x</p>`);
  x++;
} while (x <= 3);

// /LESSON 59/ FUNCTION RETURN AND USE CASES
//function myfunc(parameter) {console.log(parameter)}; myfunc(argument) // keep that in mind!

function myFunc(num1 = "0", num2 = "0") { // you can set a value for paramaters so if they were not provided to the function as argument 
  //you can have a value instead of the default value which is undefined 

  //return num1+num2; //no problem with that
  return;
  num1 + num2 // not allowed as single line terminator isn't allowed and return will automatically have a closing semi colon placed after it
}


// /LESSON 61/  Function Rest Parameters
// only one rest paramter is allowed & must be the last element
let result = 0;

function myFunction(a, b, ...numbers) { // we define a rest paramter with ... first then the name we want for rest parameter
  // the user will the supply the function with indefinite number of arguments so we will use rest Paramters
  for (i = 0; i < numbers.length; i++) {
      result += numbers[i];
  }
  return ` final result from extra arguments is ${result} while result from pre known arguments are ${a+b}`
}

// LOOPING THROUGH AN (Iterable objects such as Array, String, TypedArray, Map, Set, NodeList) using (of) operator 
let theArgs = ["10", "20", "30", "40"]; // an array 
let myString = "ahmadd";
let total = 0;
for (arg of theArgs) // or (letter of myString)
{
  total += +arg; // unary operator
}

// Iterating over a Map

const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const [key, value] of iterable) {
  console.log(`key:${key} holds the value:${value}`);
}

// /LESSON 66/ Arrow Function Syntax
let print = function() {
  return 10;
}

// simplify 1
let print1 = () => {
  return 10;
}

// simplify 2
let print2 = () => 10; // you don't need to use the return here also you can't have more than one line of code

// simplify 3
let print3 = _ => 10;

// /LESSON 67/ Scope - Global And Local
// myName = "ahmed"
var scopeCheck = "ahmed";

function scopeDebug() { // if you didn't redeclare scopeCheck inside the function it would have used the globaly available scopeCheck but now 
  // since there's a locally declared variable inside the function it will use that one if it was initialized with let then it will through an error 
  //Uncaught ReferenceError: Cannot access 'myName' before initialization but if var was used it will print undefined as we talked about hoisting before

  console.log(scopeCheck + "ff");
  let scopeCheck = "hossam"; // throws an error
  var scopeeCheck = "hossam"; // doesn't throw an error but scopeCheck would be equal undefined
}
scopeDebug();

// Difference between Let, var, const

/*
var
redeclare(yes) // you can type var a = 3; var a=4; a will equal 4 without throwing any errors 
access before redeclare(undefined)
variable scope drama[added to window obj or not](yes)
block or function scope(function scope)

let
redeclare(no)  // redeclaring will cause an Uncaught Syntax error:  identifier a has been already declared 
access before redeclare(throws an error)
variable scope drama[added to window obj or not](no)
block or function scope(block scope)

const
redeclare(no) 
access before redeclare(throws an error)
variable scope drama[added to window obj or not](no)
block or function scope(block scope)
*/

if (true) { // block scope such as if, while, switch, for
  var q = "ahmad";
  let w = "Ibrahim";
  const e = "amer";
  console.log(`my full name is: ${q} ${w} ${e}`); // my full name is: ahmad Ibrahim amer
}
console.log(`my full name is: ${q} ${w} ${e}`); // throws an error w isn't defined 

// /LESSON 69/ Scope - Lexical (Static)

// lexical scope is the place in which it was created
function parent() {
  let myName = "ahmad";

  function child() {

      function grandChild() {
          console.log(myName);
      }
      grandChild();
  }
  child();
}
parent(); // outputs "ahmad" 
// 
// every function has a reference to it's Lexical parent's Lexical environment so if the function doesn't find a variable in it's own local memory/environment
// it will look for the variable in it's lexical parent's lexical environment if it didn't find the variable it will look for it in the parent of it's lexical parent's
// lexical environmet if it's parent's doesn't have a lexical parent it will look for the variable in the global memory

// /LESSON 72/ Higher Order Functions map

//creates a new array using an old one
// a higher order function means that you pass a function as it's argument along with an optional thisarg? default value undefined.
// which is A value passed to the function to be used as its this value.
// myName = "ahmed"

let mappedArr = myName.split("").map((ele, index, arr) => {
  return `${ele.toUpperCase()}`;
});
console.log(mappedArr); // (5) ['A', 'H', 'M', 'E', 'D'] array object
console.log(mappedArr.join()) // "AHMED" string

["1", "2"].map((element, index, array) => {
  return element + this
}, 10) // this won't work as it will return (2) ['1[object Window]', '2[object Window]']
["1", "2"].map(function(element, index, array) {
  return element + this
}, 10) // this will work fine as it going to return (2) ['110', '210'] remember["1","2"] strings
["1", "2"].map(function(element, index, array) {
  return +element + this
}, 10) // this will work fine as it going to return (2) ['11', '12'] remember["1","2"] strings
// + unary operator 
// /LESSON 73/ Higher Order Functions filter()

let myNums = [11, 22, 15, 20, 23, 55]
evenNumsMapped = myNums.map((ele) => ele % 2 === 0 ? ele : null); // takes the element does what you want to do with it and returns it back 
evenNumsFiltered = myNums.filter((ele) => ele % 2 === 0) // you pass a condition incase the element succeded to pass that condition and evaluated as true it returns that value
evenNumsMapped.length; // 6 elements including the nulls
evenNumsFiltered.length; //2 elements and those are the filtered ones


let ignoreNumbers = "i love having multiple food options";
let arr = ignoreNumbers
  .split(" ")
  .filter((ele) => {
      return ele.length <= 4;
  })
  .join(" ");

let mix = "A3B8C3";
let mixN = [];
let mixS = mix
  .split("")
  .map(function(ele) {
      if (isNaN(ele)) return ele;
      else mixN.push(ele);
  })
  .filter((ele) => ele);

let result1 = 1;
for (nums of mixN) {
  result1 *= nums;
}
result1; // 72 (3*8*3)
mixS; // (3) ['A', 'B', 'C'] 

// /LESSON 75/ Higher Order Functions reduce()

// reduce(callBackFunc(acc,currentVal, currentIndex, array){}, initial value);
// accumulator: the accumulated value previously returned in the last invocation
//current val: the current value of the array being processed
//current index: the index of the current value of the element being processed 
//array: the current array
// initial value: if left empty the initial value the acc will have is going to the element with index 0 and (the element being processed is element w/ index 1)
// if was provided with a value it will assigned to the acc and the (element being processed will be of index 0)
let numbers = [10, 20, 30, 40, 50, 60];

let reducedNums = numbers.reduce(function(acc, ele, eleInd, arr) {
  console.log(`accumulator value: ${acc} 
element being processed ${ele}
index of current element being processed ${eleInd}`)
  return acc + ele;
}, 0);

reducedNums; // 210 if the 0 changed to be 10 value will be 220


let listOfNames = ["ahmad", "a7a", "sleepy", "Ashwaganda"];

let reducedNames = listOfNames.reduce(function(acc, ele, eleInd, arr) {
  return (ele.length > acc.length) ? ele : acc;
}, "initial");

reducedNames; // "Ashwaganda"

// Challenge Map Filter reduce 

let myString1 = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,0,z";
let filtered = myString1
  .split(",")
  .filter(function(ele) {
      return isNaN(ele);
  })
  .map(function(ele) {
      return ele === "_" ? (ele = " ") : ele;
  })
  .reduce(function(acc, ele) {
      return `${acc}${ele}`;
  })
  .slice(!false, -true);
console.log(filtered); // ELzero Web School

// /LESSON 76/ Higher Order Functions Foreach()

// Foreach executes a provided function once for each array element
// is not made to create another array or return modified array elements but it's made to use the array elements to execute function on it 
// Syntax Foreach (callBackFunc(ele,index,arr) {...}, thisArg) {}
// Note : Doesn't return anything [undefined]
// Break will not break the loop
/*
html snippet 
<ol>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ol>
*/

let elements = document.querySelectorAll("ol li");
elements.forEach(function(ele) {
  ele.onclick = function() {
      console.log(this);
  };

  ele.addEventListener("click", function() {
      this.innerText += ` clicked`;
  });
});

// /LESSON 79/ Object introduction & Dot Notation vs Bracket Notation
// exploring window object
//typeof window.location 'object' ; nested object
// typeof window.location.href 'string' ; property
// typeof window.location.assign 'function' ; method

// creating an object
let newObj = {}; // shorthand
let newObjUsingNewKeyword = new Object({}); // using the Object constructor to construct new object
let neoObject = {
  //properties
  name: "neo obj", // valid idenetifier 1 (Dot/bracker notation [yes][yes]) 
  age: "79 lessons old", // valid idenetifier 2 (Dot/bracker notation [yes][yes]) 
  nestedObj: {
      name: "nested obj inside neo obj",
      secondNestedObj: {
          name: "2nd nested obj inside nested obj inside neo obj"
      }
  },
  100: "i'm number 100", //unvalid identifier 1 (Dot/bracker notation [no][yes]) 
  "200 in a string": "self explanatory", //unvalid identifier 2 (Dot/bracker notation [no][yes]) 
  // methods
  numberOfProperties: function() {
      return Object.keys(neoObject).length - 1;
  }, // lat element in the obj is a method; there's a preceding comma in eccmascript styling incase you added something to the obj; [no need to add]
}
neoObject.numberOfProperties(); // 4
let prop1 = "name";
neoObject.name; // neo obj // Dot notation valid as it's a valid identifier name
//neoObject."name"; //  not valid way of accessing properties with dot notation better use bracket notation
neoObject.prop1; // even with using a variable holding the prop name still not valid way of accessing props with dot notation better use bracket notation 
neoObject[prop1]; // neo obj
//neoObject.100 // not valid and will throw an error as the dot notation is used with an invalid identifier
neoObject[100]; // bracket notation is used instead of dot notation
neoObject["200 in a string"]; // bracket notation is used instead of dot notation 
neoObject[name]; // you need to put the name property between double quotes to be able to use it with bracket notation
neoObject["name"]; // don't worry as in the object "name" will be turned into property
neoObject["nestedObj"].secondNestedObj["name"]; // you can use bracket notation and dot notation together

//create a new property or method
neoObject["newObjProp"] = "new here";
neoObject.Sayhello = function(name) {
  document.write(`hello ${name}!`);
}


// /LESSON 83/ This Keyword

console.log(this); // window object
// inside of a function the function owner is the window object 
function sayhello() {
  return this;
}
console.log(sayhello()); // window object

// The this keyword in functions behaves differently in strict mode.

// The this keyword refers to the object that called the function.

// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):

"use strict";

function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();


// this here refers to the function owner which is the li that got clicked amongst the li's
document.querySelectorAll("li").forEach((element) => {
  element.addEventListener("click", function() {
      console.log(this); // returns the li element that got clicked even though there are several it's going to get the li value that got triggered
  });
});


let Obj_z = {
  name: "my name is object gen z",
  sayTheObjName: function() {
      return this.name; // when a method is called as a method of an object this keyword refers to the object that the method is called from within
  }
}

// JavaScript Use Strict

// You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
// ex1
"use strict";
x = 3.14; // This will cause an error because x is not declared
// ex2
x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14; // This will cause an error
}
// ex3 
// Duplicating a parameter name is not allowed:

"use strict";

function x(p1, p1) {}; // This will cause an error
// ex4
// Writing to a read-only property is not allowed:

"use strict";
const obj = {};
Object.defineProperty(obj, "x", {
  value: 0,
  writable: false
});

obj.x = 3.14; // This will cause an error

// The Optional Chaining Operator (?.)
// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
// Create an object:
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;

// /LESSON 84/ Create Object With Create Method

let myObj = {
  myName: "ahmad",
  myAge: 23,
  myArr: ["learning C", "learning React"],
  myPassions: function() {
      return [...this.myArr, "programming with JS"]; // writing ...myObj.myArr will always reference to the myArr inside of the myObj so if you used myObj
      // as a prototype to another object using Object.Create (clonedObj) and tried to change the value it will get the prototyped object's value
      // if you wanted to use the value that's in the clonedObj you will need to use this keyword
      // by using this you ensure that the property value will be obtained from the object that called the function myPassion
  },
};

let obj = Object.create(myObj);
obj.myArr = [...obj.myArr, "learning Embedded"];

console.log(obj);
console.log(myObj.myPassions()); // (3) ['learning C', 'learning React', 'programming with JS']
console.log(obj.myPassions()); // (4) ['learning C', 'learning React', 'learning Embedded', 'programming with JS']

// /LESSON 85/ Create Object With assign Method

Object.assign(""); // takes 2 or more arguments the target object to copy to and the source object from which you copy properties from 
//source objects can be more than one

// you can also copy objects the same way as {...obj} like this 
let newObjz = Object.assign({}, obj);
// but both methods only goes one level deep 
// if there were any  nested objects they will be referenced to the original object
// and if you made any changes to the copied object
// it will be changed on the original object as well
// also doing something like let newObjz = obj; creates a reference to obj and doesn't take a copy any changes will reflect on both objs this only happens
// with objects and arrays


let obj2 = {
  prop1: "2",
};
let obj1 = {
  prop1: "1",
};

let obj3 = {
  prop3: "3",
};
let finalObj = Object.assign(obj1, obj2, obj3); // if the are any duplicate object properties it will take the last supplied argument object
let finalObj2 = {
  ...obj1,
  ...obj2,
  ...obj3
}; // you can do the same functionality by spreading the objects props into a new object
console.log(finalObj);
console.log(finalObj2);
console.log(obj1); // stays the same 


// /LESSON 86/ What Is DOM And Select Elements
document.getElementById("myID");
document.getElementsByClassName(".myClass"); // getElement(S) this returns an array of elements with the class name if myClass even if it's only one element
// still going to bring an array with one element so you need to put [0] infront of it
document.getElementsByName("span"); // might be usefull don't forget about it
document.querySelector(".className"); // returns the first element only
document.querySelectorAll(".className"); // returns the an array with all the elements that has the class name of className
document.title; // returns the title of the webpage
document.body; // returns the body element
document.forms[0].one.value; // returns the first form element and reaches out for the input named "one" and returns it's value

document.links[1].href; // returns(gets) the href (hypertext reference) 
document.links[1].href = "www.google.com"; // (sets) the href (hypertext reference) 

// /LESSON 87/ Get Set Elements Content And Attributes

// inside of the html in order to print < > and not get confused as if they were actual tags by the compiler 
// we use &lt;(less than) for <
// and we use &gt;(greater than) for >

document.getElementById("myID").textContent = "<span>hello</span>"; // puts the html tags as text and uses the same way we used to print < > 
document.getElementById("myID").innerHTML = "<span>hello</span>"; // puts the html tags as html tags 
// Alt attribute means alternate text
document.getElementById("myID").className = "addedClassName"; // when trying to set or get an element's class name we use className but in the actual html
// it's written as class="addedClassName"
document.querySelector(".addedClassName").getAttribute("href"); // returns the hypertext reference value
document.querySelector(".addedClassName").setAttribute("href", "https://www.google.com"); // sets the href attribute

// /LESSON 88/ Check Attributes And Examples

// DOM [Check Attributes]
let myElement = document.querySelector(".testLink");
myElement.hasAttribute("href"); // boolean returns true or false wether the attribute is there or not
myElement.hasAttributes(); // boolean returns true or false wether the element got (any) attributes or not
myElement.attributes; // returns all the attributes that the element has and it's not a function
myElement.removeAttribute("href"); // removes the attribute class completely (use class not className) 

// an alternate solution is to set the href to an empty string by using setAttribute()
myElement.setAttribute("href", "");

// /LESSON 89/  Create And Append Elements

let myElement1 = document.createElement("div");
let myAttr = document.createAttribute("data-custom"); // creates an attribute that isn't attached to any element yet
let myText = document.createTextNode("i'm a piece of text"); // creates a text that isn't attached/appended to any element yet
let myComment = document.createComment("this is a comment"); // creates a comment that isn't attached/appended to any element yet
myElement1.setAttributeNode(myAttr); // attach the attribute to the element but without a value to it
myElement1.setAttribute("data-custom", "custom data");

// appending the piece of text to the element
myElement1.appendChild(myText);

// appending a comment to the element
myElement1.appendChild(myComment);

// appending the element to the body
document.body.appendChild(myElement1);
console.log(myElement1); // <div data-custom="custom data">i'm a piece of text</div>

// /LESSON 91/  Deal With Children's
`<div id = "myDiv" > textNode <span> textInsideSpan </span> <p>textInsideParagraph</p > </div> `

let divEle = document.getElementById("myDiv");
console.log(divEle.children); // returns all the children elements! span and p
console.log(divEle.childNodes); // returns NodeList(3) [text, span, p]
console.log(divEle.firstChild); //returns the very first child wether it was an element or not in our case here it's a text
console.log(divEle.firstElementChild); //returns the very first element child 
// & same goes for lastChild and lastElementChild

// /LESSON 92/ DOM Events
let button = document.getElementById("btn");
//    <button id = "btn" onclick='console.log(hi);' >CLick ME</button> // acceptable
//    <button id = "btn" onclick='(e) => console.log(e.target);' >CLick ME</button> // acceptable
//    <button id = "btn" onclick='(function (e) { console.log(e.target);})' >CLick ME</button> // acceptable make sure to wrap it between parenthesis
button.onclick = console.log("hi"); // not acceptable you need to equate it to a function 

button.onclick = function(e) {
  e.target.style.color = "red";
  console.log("ho"); // acceptable
};
// you can get the input whose name is age and get it's value through e.target and it can be done using document.getElementById("myForm") as well
document.forms[0].onsubmit = function(e) {
  e.preventDefault();
  console.log(e.target.age.value);
}

// /LESSON 94/  Event Simulation 

// there's to ways to fire an event either you do it manually or you can simulate it using the element.(eventName) such as element.click();
// example) if we have a form consisting of an h1 and 6 inputs of type text and one last input of type submit

let myFormInputs = document.getElementById("myForm").children;
let ele = [...myFormInputs].slice(1, -1); // to make the form input iterable either by array.From or spreading the values into an array 
// to execlude the h1 and the submit button

ele.forEach(function(ele, index, arr) {
  arr[index].oninput = function() {
      if (arr[index].value !== "") {
          arr[index + 1]?.focus(); // focuses on the next element 
      }
      // The Optional Chaining Operator (?.)
      // The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
  }
});

// /LESSON 95/ Class List Object And Methods

// <p class="ahmad Ibrahim"></p>

let myele = document.querySelector(".ahmad");
// myele.classList[1], myele.classList.item(1), myele.classList.item("1"); // are all the same returning the 2nd element in the classlist array
console.log(myele.classList.length); // no of classes
console.log(myele.classList.contains("Ibrahim")); // returns true if it contains the class takes only one argument
myele.classList.add("amer", "Ibrahim"); // adds the classes you would like to add and you can also use remove(); to remove multiple classes 
myele.classList.toggle("ghoniem"); // if  the class ain't there it adds it and if it's there it will remove it (toggle)

// /LESSON 96/ CSS Styling And Stylesheets
// changing elements css style inline (element.style)
ele.style.color = "red"; // when the property has one word
ele.style.fontWidth = "bold"; // when the property has two words use camelcases
ele.style.cssText = "font-weight:bold; color:green; opacity:0.8;"; // no need for curly braces straight typing the css properties and the values 
ele.style.setProperty("font-size", "40px", "important");

// /LESSON 98/ DOM Traversing
/* 
nextSibling // might be a textNode or a comment 
previousSibling / might be a textNode or a comment 
nextElementSibling // makes sure to return the element that comes after it
previousElementSibling // makes sure to return the element that comes before it
parentElement // returns the parent element
*/
// /LESSON 099/ DOM Cloning
/*     
<p class="ahmad">hello niggas</p> <div id="myDiv"></div>
*/
let myelez = document.querySelector(".ahmad");
let myDiv = document.querySelector("#myDiv");
myelez.appendChild(myDiv);

// this shall relocate the span element inside the div element
// if you want to leave the element as it is and use a copy of it (bear in mind that it's id should be changed and if it's a form element name should be changed)
// cloneNode(boolean(Deep) default:false); // if set to true the element will be copied with it's children (deep node)
// and if set to false will be copied without it's children


// /LESSON 100/ AddEventListener
// 3 main differences with using element.onclick = function() {} and element.addEventListener("click",function () {});

// 1) you can attach multiple event listeners to the same element while element.onclick you can only attach one or else it will get overriden by the next one
element.onclick = func1();
element.onclick = func2(); // func 2 is the one that will be attached only
element.addEventListener("click", func1());
element.addEventListener("click", func2()); // both functions will be executed once the even is triggered

// 2) you won't be notified with an error if you attached a wrong value to the event handler
element.onclick = "string"; // no errors while it's clearly wrong
element.addEventListener("click", "string"); // there will be an error failed to execute addEventListener as the 2nd parameter isn't of type object typeof(arr) = object

// 3) you won't be able to attach a function to the event handler to an element that haven't been created yet
//  ((example) element that will be created on a click of a button)

myElement1.onclick(function() {
  let newele = this.cloneNode(true);
  newele.classList.add("sheko");
  document.body.appendChild(newele);
});
document.querySelector(".sheko").onclick(alert("clicked")); // this won't work as the element wasn't created yet  // and will throw an error
// Cannot read properties of null (reading 'onclick')

// those 2 will work as we are attaching the event handler to the document itself and if an element inside the document is clicked this function is triggered
// and we check if the element that triggered the event is the one we are looking for 
document.addEventListener("click", function(e) {
  if (Array.from(e.target.classList).includes("sheko")) {
      console.log("yay");
  }
});

// also this
document.onclick = function(e) {
  if ([...e.target.classList].includes("sheko")) { // using spread operator as a replacement for array from
      console.log("yay");
  }
}

// Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.

// bad
const baz = [...foo].map(bar);
// good
const boz = Array.from(foo, bar);

//To convert an iterable object to an array, use spreads ... instead of Array.from

const foo = document.querySelectorAll('.foo');
// good
const nodes = Array.from(foo);
// best
const nudes = [...foo];


// /LESSON 103/  Alert, Confirm, Prompt
//ALERT
// since we are in the global context you can use 
alert("text");
window.alert("text");
this.alert("text");
// problem with alert that it stops the execution of further code till you till you press ok

// confirm("message") and returns either true or false based on the user response
 response = confirm("are you sure you wanna do this?");
(response) ? alert("pressed Ok"): alert("Pressed Cancel");

// prompt("message","message that will be already written"); returns the text the user entered if the user clicked cancel returns null
let prompt1 = prompt("enter suitable day for you", "example format sat, sun, mon");
(prompt1 === "sat") ? alert("avaiable"): alert("not available");

// /LESSON 103/ setTimeout and clearTimeout  && setInterval and clearInterrval
//setTimeout (timeout) is one word
// setTimeout(function() {}, time in milliseconds, arguments to be passed to the function in the first parameter);
let timeoutHandler = setTimeout((name) => {
  console.log(`hello ! your name is ${name}`);
}, 1000, "sheko");
// 
function greet(name, age = 0) {
  console.log(`hello your name is ${name} and age is ${age}`)
};
setTimeout(greet, 3000, "sheko", 23); // age is set to 0 by default if not passed it will be 0

// clearTimeout (timeoutHandler); if called before the timeout is done it will prevent the function from executing
document.querySelector(".stopGreet").addEventListener("click", function() {
  clearTimeout(timeoutHandler); // prevents the function from executing
});

// setInterval and clearInterval
// they work exactly the same as setTimeout and clearTimeout
// except that setInterval calls the function after the delay then it calls it again and again.. indefinitely till clearInterval
// is called (like api calls for status)

// <div class="myCounter">10</div>
let myCounter = document.querySelector(".myCounter");
let myInterval = setInterval(decrement, 1000, myCounter);

function decrement(element) {
  element.innerText -= 1;
  if (element.innerText === "0") {}
}

// /LESSON 106 & 107/  Window.Location Object & window open and close
// you can use window.location.href or location.href since we are on the window global object scope 
// here's our url port 5000 is used to demonstrate something but it's actually not going to work if you used it with that url
// https://developer.mozilla.org:5000/en-US/docs/Learn/JavaScript#modules 

location.href //https://developer.mozilla.org:5000/en-US/docs/Learn/JavaScript#modules 
location.hash // '#modules'
location.host // 'developer.mozilla.org:5000'
location.hostname // 'developer.mozilla.org'
location.pathname // "/en-US/docs/Learn/JavaScript
location.protocol // "https:"
location.assign("https://twitter.com/"); // loads twitter website and whatever website was there before will be on our browsing history
location.assign("https://twitter.com/"); // loads twitter website and whatever website was there before will be replaced with twitter website on our browsing history
location.reload(); // reloads webpage

window.close(); // only closes windows that were opened using window.open() else err: Scripts may close only the windows that were opened by them.
window.open("https://twitter.com/ahmadghoniem_", "_blank", "width=4440, height=400");
// url, target(either _blank or _self default is _blank),feature(width=400, height=400) 
// there used to be a 4th paramater replace but it got Deprecated

// /LESSON 108/ Window History Object
history.length // returns the number of webpages that you have visited including the one you are currently one
history.backward(); // forward 
history.forward(); // backward
history.go(0) // 0 - current page, 1- forward 2- forward twice, -1 backward -2 backward twice and etc

// /LESSON 109/ Scroll, ScrollTo, ScrollBy, Focus, Print, Stop

// window.stop() stops the rest of the page from loading same way as pressing on the escape button
// window.print() print the webpage
let myNewWindow = window.open("https://gmail.com/", "_blank", "height=500, width=500");
myNewWindow.focus() // shifts focus from the currently opened window to our new window that has gmail on it
// scrollTo and scrollBy both takes 2 paramaters x-coord and y-coord or options
// A dictionary containing the following parameters:
// top
// left
// behavior
// Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).

window.scrollTo(300, 400); // takes x and y position and scroll to the exact posititon
window.scrollBy(300, 400); // takes x and y position and scroll BY a given value 
window.scrollTo({
  left: 400,
  top: 200,
  behavior: "smooth"
})
// another alternative that does the same job is window.scroll 

// scrollX and scrollY gets the current position of the webpage

let btn = this.document.querySelector(".scroll");

window.addEventListener("scroll", function() {
  let Yval = this.scrollY;
  if (Yval >= 600) {
      btn.classList.add("visible");
  } else {
      btn.classList.remove("visible");
  }
});
btn.onclick = function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
};

// /LESSON 111/ Local Storage

// doesn't expire 
// private browsing doesn't store localStorage
// difference between http and https

//setter methods for setting a key-value pair in the localStorage
window.localStorage.setItem("color", "white"); // sets and returns undefined
window.localStorage.color = "white"; // outputs white
window.localStorage["website-color"] = "white"; // outputs white  

// getter methods for the localStorage
window.localStorage.color; // white returns (undefined if it doesn't exist)
window.localStorage.getItem("color"); // white (returns NULL of it doesn't exist)

// a usecase for using getItem rather than .color to access color is when you use JSON.parse(NULL) returns null and you can || with something else
// instead of JSON.parse(undefined) which is going to break the code

window.localStorage["website-color"]; // white returns (undefined if it doesn't exist)

// remove item
window.localStorage.removeItem("color");

// remove all items (reset options)
window.localStorage.clear();

// get item name (key-name) depending on key index
window.localStorage.key(1); // "website-color"

// /LESSON #113/ Session Storage And Use Cases
// same functions as localStorage but key difference is whenever you open a new session all the data from the previous session is deleted
// old session preserves it's data while new one doesn't have what the old session have (blank)

// new tab = new session
// duplicate tap = same session (duplicate by right clicking the tap and choosing duplicate)
// new tab with the same url = new session
// reload = same session

// /LESSON 115 &116 &117/ destructring arrays

// with already declared variable
 a, b, c, d;
let myArr = ["1", "2", "3", "4", "5"];
[a, b, c, , d] = myArr;
console.log(a, b, c, d); // "1","2","3","5" as we skipped the 4th element by putting an empty value 

//check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

// nested array ( variables are undeclared)

let nestedArr = ["1", "2", ["3", "4", ["5", "6"]]];
let [, , [x, y, [l, m]]] = nestedArr;
console.log(x, y, l, m) // 3 4 5 6

// swapping variables using array destructuring

// old method would include a temp variable to hold the value of the 1st value and assign it later to the second variable while we assign
// the first variable with the second variable value

//using array destructuring
let a = "b",
  b = "a";
[a, b] = [b, a]; // [a,b] = ["a", "b"]; assigning the values into an array then destructring the array while swapping the variables
console.log(a, b); // a b; 


// /LESSON 115 &116 &117/ destructring objects
// if the variables are already declared you might encounter a problem that you need to wrap the assignment in parenthesis
let names, ages;
let myoBJ = {
  names: "ahmad",
  ages: 23,
  skills: {
      "1st": "html",
      "2nd": "css"
  },
  skillsArr: ["html", "css"]
};
({
  names,
  ages
} = myoBJ) // wrapping this with () to solve the issue
({
  names: devName,
  ages: devAge,
  hobbies = "code writing",
  hobbies: devHob = "code writing"
} = myoBJ)
// destructring a property that may or may not be included in the object best practice is to put a default value

// destructring nested arrays and nested objects

({
  skills: {
      "1st": first,
      "2nd": second
  },
  skillsArr: [one, two]
} = myoBJ)
first === one === "html"
second === two === "css"


function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swapping variables using array destructuring
          }
      }
  }
  return arr; // returns the array sorted
}

// /LESSON 123/   Set & WeakSet Data Types And Methods
// - Set (Data Type) takes one arugment as iterable  (an array with the values)
// since objects are not iterable without the method named Symbol. iterator ()

// -- Object To Store Unique Values (get rids of all repeated values)
// -- Cannot Access Elements By Index 

//   Properties:
// size
//   Methods:
// add(), delete(), clear(), has()

// you can get rid of duplicate and check if the set has a certain value
let myData = [1, 1, 1, 2, 3];
let myUniqueData = new Set(myData);
console.log(myData); // [1,1,1,2,3];
console.log(myUniqueData); // Set(3) {1, 2, 3}
myUniqueData.size; // 3 to get the size (length) of the set

////////////////////////////
myUniqueData[0]; // returns undefined as you can't access the elements by index
////////////////////////////

// creating an array out of a set
[...myUniqueData].length; // 3
myUniqueData.add(100);
myUniqueData.has(100); // true
myUniqueData.delete(100);
myUniqueData.size; // 2
myUniqueData.clear(); // empties the set and size is set to 0 automatically


let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
mySet; // [1,2,3,"A"]
// Values + Keys [Alias For Values]
let iterator = mySet.keys();
let iteration;
// looping with the iterator
while (!iteration?.done) // (!iteration?.done) 
{
  iteration = iterator.next();
  console.log(iteration);
}

///////////WeakSet///////////
// - WeakSet (Data Type) taks one arugment as iterable 
new WeakSet([{}, {}]); // WeakSet {{…}, {…}}

//   Methods:
// add(), delete(), has()

//  It adapts the same properties of that of a set i.e. does not store duplicates.
//  The major difference of a WeakSet with a set is that a WeakSet is a (collection of objects) and not values of some particular type. 
//  Also Set has size property whie WeakSet doesn't have one & you can't use forEach on WeakSet while you can with Set
//  last difference is that when using Set you are passing a copy of the object and if you were to remove the original object by setting it to null
// it won't remove it in the set you created however the object will get removed from WeakSet as they passed by reference (weakly referenced)

// regular also called strong reference example
//  the strong reference prevents removing the object from memory via garbage collection.

let OBJ = {
  name: "ahmad"
};
OBJ.name = "sheko";
let mySET = new Set([OBJ]);
OBJ = null;
console.log(mySET); // key:0  value: {name: 'sheko'}

// weak reference example

let OBJ = {
  name: "ahmad"
};
OBJ.name = "sheko";
let mySET = new WeakSet([OBJ]);
OBJ = null;
console.log(mySET); // null (no entries)

// another weak reference example

let pets = new WeakMap();
let dog = {
  name: "badger"
};

pets.set(dog, "okay");
console.log(pets); // WeakMap{ {...} -> "Okay" } <= dog set to the WeakMap

dog = null; // Overwrite the reference to the object
console.log(pets); // WeakMap(0) <= dog has been garbage collected.

// when we overwrite the reference to the original dog object by reassigning the variable to null,
//  the only reference to the original object in memory is the weak reference coming from the WeakMap we created.

// Because it’s a weak reference, it won’t prevent garbage collection from occurring.
//  This means when the JavaScript engine runs a garbage collection process again,
//   the dog object will be removed from memory and from the WeakMap we assigned it to.

// By default, JavaScript uses strong references for all of its references and the only way to use weak references is to use either a WeakMap or a WeakSet.
// https://blog.logrocket.com/weakmap-weakset-understanding-javascript-weak-references/



// /LESSON 123/   Map Data Type Vs Object

/*
- Map Data Type
Methods
--- set
--- get 
--- delete returns true or false wheither the element existed and got deleted 
--- clear remove all key-value pairs
--- has

Syntax: new Map(Iterable With Key/Value)
-- Map vs Object
--
------ Map => Does Not Contain Key By Default
------ Object => Has Default Keys
--

*/
let myObject = {
  "name": "sheko",
  "method": function() {}
}; // [[Prototype]] : Object already got methods that you can override if you weren't careful such as 
myObject.hasOwnProperty("name") // true
myObject.hasOwnProperty = 2; // '2'
myObject.hasOwnProperty // isn't a method that you can use anymore !

let myEmptyObject = Object.create(null); //  {} No properties

/*
------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
------ Object => String Or Symbol
--
------ Map => Ordered By Insertion
------ Object => Not 100% Till Now
--
------ Map => Get Items By Size
------ Object => Need To Do Manually
--
*/
myNewMap.size; // 5
Object.keys(myObject).length; // returns the number of properties and methods

/*
------ Map => Can Be Directly Iterated
------ Object => Not Directly And Need To Use Object.keys() And So On
--
------ Map => Better Performance When Add Or Remove Data
------ Object => Low Performance When Comparing To Map
*/

let myObject = {};

let myNewObject = {
  10: "Number",
  "10": "String",
};
console.log(myNewObject[10]); // string doesn't care about data type

let myNewMap = new Map([ // an iterable each element is an array with the key value pair
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);
myNewMap.set({
  a: 1,
  b: 2
}, "Object");
myNewMap.set(function doSomething() {}, "Function");
myNewMap.size; // 5

console.log(myNewMap.get(10)); // number
console.log(myNewMap.get("10")); // string

// WeakMap
// A WeakMap is a collection of key/value pairs whose keys must be objects,
//  with values of any arbitrary JavaScript type, and which does not create strong references to its keys
// arrays are objects too, so it can be stored as keys in a WeakMap

let obj = {
  name: "ahmad"
};
let myWeakMap = new WeakMap([
  [obj, "obj is used as key while the value type can be anything"]

]);
obj.name = "sheko";
console.log(myWeakMap); // key: {name: 'sheko'}
obj = null;
console.log(myWeakMap); // key: null value: null (removes them together with associated value)

// /LESSON 129 - Array Method/ .from  .copyWithin 
// Array.from(Iterable, MapFunc, This)
// important note regarding the map function 
// Array.from() does not create an intermediate array,
// and mapFn only receives two arguments (element, index) without the whole array, because the array is still under construction.|


let NUMarr = ["1", "2.656565", "3", "4", "5"];
let thisArg = 1;
let newNUMarr = Array.from(NUMarr, (e) => +e + this, thisArg); // using unary operator convert the strings to numbers with percision and adds 1 using the ThisArg

// Array from a Map
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];


// Use of arguments inside of a function
function af() {
  return Array.from(arguments); // ["Osama", "Ahmed", "sayed", 1, 2, 3]
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));

// also 
function af(a, b, c, ...d) {
  console.log(d); // [111, 5, 33]
}
console.log(af("Osama", "Ahmed", "sayed", 111, 5, 33));

// - Array.prototype.copyWithin() (Target(to be placed starting from), Start => Optional, End => Optional)
// "Copy Part Of An Array To Another Location in The Same Array" keeping the same length

arr = [1, 2, 3, 4, 5, 6, 7, 8, "9"];
arr.copyWithin(3); // target to be replaced starting from start default 0 end default last element [1,2,3,1,2,3,4,5,6]
// another example
arr.copyWithin(2, 3);
// (9) [1, 2, 4, 5, 6, 7, 8, '9', '9']
// another example
arr.copyWithin(2, -2, 8); // start element is 8 end element is '9' not inclusive
//(9) [1, 2, 8, 4, 5, 6, 7, 8, '9']

// another example
arr = [10, 20, 30, 40, 50, "A", "B"];
arr.copyWithin(1, -2); // [10,"A","B",40,50,"A","B"] 
// last example 
arr = [10, 20, 30, 40, 50, "A", "B"];
arr.copyWithin(1, -2, -1); // [10, 'A', 30, 40, 50, 'A', 'B']


// /LESSON 130&131 Array Method Array.prototype.some() & Array.prototype.every()

// arr.some(callBackFunc(Element, Index, Array), This Argument)
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true;
// otherwise it returns false. It doesn't modify the array.

///////////////////////////////////
// remember that the thisArg only work when the callback function is a regular function not an arrow function!
///////////////////////////////////

arr = [0, 1, 2, 3, 4, 5, 6];
let NUMBER = 3;
arr.some(function(e, i) {
  console.log(i); // function stops running after the first occurence of a number greater than 3 (index 4) doesn't log index 5 nor 6
  return e > this; // condition to check against 
  // if it's an arrow function this keyword will refer to the window object as the arrow function won't bound itself to supplied ThisArg  
}, NUMBER);
// this arguments can be of any data type try with an object!
let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = (arr, range) => arr.some(function(e) {

  return e >= this.min && e <= this.max;
}, range);

checkNumberInRange([0, 1, 2, 3, 4, 15], range); // true as only one element is needed to pass the test implemented by the provided function 


// array.prototype.every(); is very similar however every element in the array and not just one needs to pass the test implemented by the provided function
// same example but using .every to demonstrate the idea

checkNumberInRange = (arr, range) => arr.every(function(e) {

  return e >= this.min && e <= this.max;
}, range);

checkNumberInRange([0, 11, 12, 15], range); // false
checkNumberInRange([10, 11, 12, 15], range); // true


// some useful spread syntax use cases 

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums)); // 1000

console.log([..."ghogho"]); // an array of elements of the letters from the string ghogho

// /LESSON 130&131 Regular Expressions - Modifier

/*
Regular Expression

Syntax
/PATTERN/modifier(s);
new RegExp("pattern", "modifier(s)") // better not used

Modifiers => Flags
i => case-insensitive
g => global
m => Multilines

Search Methods
- match(Pattern)

Match
-- Matches A String Against a Regular Expression Pattern
-- Returns An Array With The Matches
-- Returns null If No Match Is Found.
*/

myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/ig; //regular expression pattern (is not put in a string quotes)

console.log(myString.match(regex)); // ['Elzero','elzero']

/*
Ranges
- Part 1
(X|Y) => X Or Y
[0-9] => 0 To 9
[^0-9] => Any Character Not 0 To 9
*/
let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig; // i-case insensitive, g-global 
console.log(tld.match(tldRe)); // if the global flag isn't provided returns the first incident since org exists first it going to be brought up first

let nums = "12345678910";
let numsRe = /[0-9]/;
console.log(nums.match(numsRe)); // returns the first match along with it's index 
// if the g-global flag is provided returns all the elements in an array without their indicies 

let specialNums = "1!2@3#4$5%6a78910";
let specialNumsRe = /[^0-7]/g;
console.log(specialNums.match(specialNumsRe)); //  ['!', '@', '#', '$', '%', 'a', '8', '9']
// returns all BUT the numbers that are between 0 and 7 inclusive

// if the global g flag wasn't provided only index of the first character would be returned 
console.log(specialNums.match(/[^0-7]/)); //['!', index: 1, input: '1!2@3#4$5%6a78910', groups: undefined]

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
console.log(practice.match(/Os[0-9]os/ig)); // ['Os1Os', 'Os8Os']


/*
Ranges
- Part 2
[a-z]
[^a-z]
[A-Z]
[^A-Z]
[abc]
[^abc]
*/

myString = "AaBbcdefG123!234%^&*";
myString.match(/[0-9A-Za-z]/g); // returns non special characters 
myString.match(/[^0-9A-Za-z]/g); // return special characters
myString.match(/[abc%]/g); // returns specific characters if they do exist
myString.match(/[1abc2edf3]/g); // returns specific characters if they do exist


/*
Character Classes
. => matches any character, except newline or other line terminators.
\w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
\W => matches Non word characters
\d => matches digits from 0 to 9.
\D => matches non-digit characters.
\s => matches whitespace character.
\S => matches non whitespace character.
*/

let email = `O@@@g...com O@g.com O@g.net_ A@Y.com O-g.com o@s.org 
1@1.com`;
let dotClass = /./g; // returns all characters except newwline or other line terminators
let dotCharacter = /[.]/g; // returns all dots 
let word = /\W/g; // matches Non word characters similar to /[^a-zA-Z0-9_]/g
let validEmail = /\w@\w.(com|net)/g; // valid emails that has only (one character) at the start and (one character) after the @ (check quantifiers section)
email.match(/\s/g); // [' ', ' ', ' ', ' ', ' ', ' ', '\n'] returns the newline character we put using template strings

email.match(validEmail);
['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com']

/*
Regular Expression
Character Classes
\b => matches at the beginning or end of a word.
\B => matches NOT at the beginning/end of a word.

Test Method
pattern.test(input)
*/
names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /spam/ig;
console.log(names.match(re)); // ['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'spam']
console.log(names.match(/[spam]/ig)); // returns all characters for s,p,a,m case insensitive


re = /\bspam/ig; // starts with the word spam 
re = /spam\b/ig; // ends with the word spam 
re = /(\bspam|spam\b)/ig; //  either starts or ends with the word spam 
console.log(/(\bspam|spam\b)/ig.test("Osama")); // false
console.log(/(\bspam|spam\b)/ig.test("1Spam")); // true
console.log(/(\bspam|spam\b)/ig.test("Spam1")); // true

/*
Regular Expression

Quantifiers
n+    => One Or More
n*    => zero or more
n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
let mailsRe = /\w+@\w+.\w+/ig; // one or more character @ one or more character . one or more characater
console.log(mails.match(mailsRe));

nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
numsRe = /0\d*0/ig; // returns 
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com chesters.com"; // http + https

re = /https?:\/\/(www.)?\w+.\w+/ig; // match websites that either has http or https : 
//escaping both // characters as they are also used to end the 
// regex pattern (www.)* either exists or not 

urls.match(re); // ['https://google.com', 'http://www.website.net']

re = /(https?:\/\/)?(www.)?\w+.\w+/ig; // to get websites that either has http://www or not at the beginning
urls.match(re); // ['https://google.com', 'http://www.website.net', 'web.com', 'chesters.com']



/*
Regular Expression

Quantifiers
n{x}   => Number of
n{x,y} => Range
n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

// egyptian phone numbers match

let egNums = "01277891627 01229176647 01112345678 01012345678 01512345678 01312345678 01312345678"
egNums.match(/(010|011|012|015)\d{8}/g); // only the first 5 numbers are valid

/*
Regular Expression

Quantifiers
$  => End With Something
^  => Start With Something
?= => Followed By Something
?! => Not Followed By Something
*/

myString = "We Love Programming";
names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString)); // the string ends with ing (true)
console.log(/^we/ig.test(myString)); //string begins with we (true)
console.log(/lz$/ig.test(names)); // string ends with lz (true)
console.log(/^2/ig.test(names)); // string starts with 2 (false)

console.log(names.match(/\d\w{5}(?=Z)/ig)); // starts with a number and 5 characters followed by Z  ['1Osama', '2Ahmed', '5Gamal']
console.log(names.match(/\d\w{8}(?!Z)/ig)); // starts with a number and 8 characters not followed by z ['3Mohammed']

/*
Regular Expression
The pattern can be a string or a RegExp
- replace
  - string.replace(pattern, "replacement")
- replaceAll
  - string.replaceAll(pattern, "replacement")
  also if you used regExp you can use the global flag with replace to mimic replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
// or by using regular expression
console.log(txt.replaceAll(/@/ig, "JavaScript"));

let phoneRe = /\(\d${4}\) \d{3}-\d${4}/; // (1234) 567-8910

// regular expression to match a url with a query string 
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

url5.match(/(https?:\/\/)?(www.)?\w+.\w+(:\d{4})?\??\/\w+.(php)\??(\w+=\w+&?)*/ig); // wrote it myself
// http or https (optional) + www. optional :8080 optional ? optional and rest of query string is optional
///////////////////
// excercises
///////////////////

// 1) Write a JavaScript program that work as a trim function (string) using regular expression
let testCase = "  ahmad    ";
testCase.replace(/(^\s+|\s+$)/ig, ""); // 'ahmad'
// 2) count number of vowels 
"www.w3resource.com".match(/[aeiou]/ig).length; // 5

// 3) count number of words 
str1 = "The quick brown fox jumps over the lazy dog.";
// trim the whole string 
str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
//convert 2 or more spaces to 1  
str1 = str1.replace(/[ ]{2,}/gi, " ");
// exclude newline with a start spacing  
str1 = str1.replace(/\n /, "\n").split(' ').length; // 9

// 4) Write a JavaScript function to check whether a given value is hexcolor value or not
str1 = "#de4321";
str1.match(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);

testCase = "100000.23";
testCase.match(/\B(?=(\d{3})+(?!\d))/g)


// You can use shorthand property notation to write the same object in a more concise way:


const x = 1;
const y = 2;
const obj = {
  x,
  y
  /*
  insteadof 
  x:x,
  y:y
   */
};

// This shorthand syntax allows you to define an object with properties that have the same name as the variables you are using to initialize their values.
//  It makes the code shorter and easier to read, especially when you have many properties to define.

// function types!

// anonymous function as it has no name

// usually assigned to a variable
let anonymousFunc = function() {
  return "hello";
}

// callback function is an anonymous function that's being passed to a function 
setTimeout(function() {

}, timeout);

// named function & this keyword

// 1) factory function 
function getName(name) {
  return `name is ${name}`;
}
// 2) constructor function
function Person(n) {
  this.name = n;
}
me = new Person("ghogho");
console.log(me); // Person {name: 'ghogho'} first letter doesn't have to be capital aswell
// arrow functions can't be a constructor functions because they don't have their own this keyword and therefore they don't have a prototype property
// to delegate to and if you try to instantiate an object using an arrow function as a  constructor function with the new keyword you will get
// error isn't a constructor function

// object methods 
const obj = {
  name: "ahmad",
  getName: function() {
      return `name is ${this.name}`;
  }
}

// arrow function don't get arguments by default...

let myFunc = function() {
  return [...arguments];
}
console.log(myFunc("ahmad", "hamada", "sheko")); // ['ahmad', 'hamada', 'sheko']
// while
myFunc = () => {
  return arguments;
}
console.log(myFunc("ahmad", "hamada", "sheko")); // Uncaught ReferenceError: arguments is not defined

// a function that accepts a callback function as an argument is a higher order function like setinterval, map, reduce ...

// arrow functions are always anonymous function that can't have a name

// benefits 1) shorter (aesthetics) 2)binding with this

let object = {
  name: "sheko",
  talk: function() {
      return this;
  },
  arrrowTalk: () => {
      return this;
  },
};
object = {
  name: "sheko",
  talk() { // shorthand for writing a method inside of an object
      return this;
  },
};

console.log(object.talk()); // {name: 'sheko', talk: ƒ, arrrowTalk: ƒ}
console.log(object.arrrowTalk()); //  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
/**
* a regular function when invoked by an object automatically makes a binding between the this keyword and the object that called it
* while an arrow function would use this as a reference for the window object 
* so that's why you shouldn't be using an arrow function inside of object as methods
* object isn't what create bindings with this keywords but functions just like the regular function talk binded the this keyword to the object that called it
*/

// an example of how you can use the arrow function and this into your advantage
object = {
  name: "sheko",
  talk() { // shorthand for writing a method inside of an object
      setTimeout(() => {
          console.log(this.name)
      }, 100); // "sheko" 
      // if you are using a higher order function inside of a method you should use this keyword
      //an arrow function's this would be the same as if you were to call it in the surrounding context
      // use this as an answer to what the value of this will be
      // as you can see it's not like a regular function as it doesn't bind itself to the object calling it 
  },
};

// another example where it can go wrong 

object = {
  name: "sheko",
  talk() { // shorthand for writing a method inside of an object
      setTimeout(function() {
          console.log(this.name)
      }, 100); // undefined as we are accessing the window object right now 
      //if you were to use this.crypto (property that lives inside window) you would get a value
  },
};
// some callback function should be arrow function and some shouldn't because of the way the higher order function choose to call the callback function
// if it doesn't bind it to an object this will refer to the window object but if it does bind it to an object with 
callBackFunc() {
  console.log(this);
}
higheOrderFunc(callBackFunc, obj) {
  callBackFunc.call(obj); // this line bind this keyword to the obj we are passing to our higher order function so whenever we invoke the callback func
  // the this value inside it refers to the obj we passed with the method .call
  callBackFunc(); // this line with invoke the function without binding it to anything thus this will refer to the window object
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**                                                          OOP introduction

* Classes were introduced in EcmaScript 2015 (ES6) to provide a cleaner way to follow object-oriented programming patterns.
* Before classes, we used constructor functions to follow OOP patern in JavaScript
* and before constructor function we used regular functions to construct objects and then return them.
* Have a look at the example below:
*/
// prototype is just a property every function you create has and it points to an object
// Object.create allows you to create an object which will delegate to another object on failed lookups
animalMethods = {
  eat: function() {},
  sleep: function() {}
};

function Animal(name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy

  animal.eat = function(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
  }

  animal.sleep = function(length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
  }

  // the problem with the approach above is that you create those 2 same methods for each object you create which is a waste of memory 
  // there's no reason to re-create those methods as we're currently doing whenever we create a new animal
  // what we can do is reference to an object that already has those methods  

  animal.eat = animalMethods.eat;
  animal.sleep = animalMethods.sleep;
  // we've now solved the problem of memory waste and overly large animal objects.
  return animal
}
/**                                                           Object.create
*  Object.create allows you to create an object which will delegate to another object on failed lookups.
* whenever there's a failed property lookup on that object, it can consult another object to see if that other object has the property. */

const animalMethods = {
  eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
  },
}

function Animal(name, energy) {
  //let animal = Object.create(animalMethods) 
  let animal = Object.create(Animal.prototype) // uppercase Animal
  //Without creating the object with Object.create, we wouldn't be able to delegate to the function's prototype on failed lookups.
  animal.name = name
  animal.energy = energy

  // shared across all instances instead of creating for each independent instance it's own methods wasting memory
  animal.prototype.sleep = function(length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
  }

  return animal // Without the return statement, we wouldn't ever get back the created object.
}
// prototype is just a property that every function in JavaScript has and it allows us to share methods across all instances of a function
function doThing() {}
console.log(doThing.prototype) // {constructor: ƒ}
//By default, the prototype object will have a constructor property which points to the original function or the class that the instance was created from

/** when calling leo.eat that lookup will fail and because of Object.create,
* it'll delegate to the animalMethods object which is where it'll find eat.
* now because we need this approach of creating an object in order to share methods across instances
* it seems like it should be implemented into the language itself hence comes the prototype 
* instead of creating a separate object to manage our methods we just put each of those methods on the Animal function's prototype */

// before the introduction of constructor function in order to create a new instance of the animal object you would need to call
let leo = Animal("leo", 10); // there's no need for the new keyword

/*  Here's the cool thing about new - when you invoke a function using the new keyword,
those two lines let animal = (Object.create()) and return animal; are done for you implicitlyand the object that is created is called this */

/* the reason this works and that the this object is created for us is because we called the constructor function
with the new keyword. If you leave off new when you invoke the function, that this object never gets created nor does it get implicitly returned.
We can see the issue with this in the example below.
*/
function Animal(name, energy) {
  this.name = name
  this.energy = energy
}
leo = Animal('Leo', 7)
console.log(leo) // undefined
leo = new Animal('Leo', 7)
console.log(leo) // Animal {name: 'Leo', energy: 7}
// by default as the methods that lives on the prototype object are enumerable
// so they will printed along with the object's own properties in that for loop however you can use the hasOwnProperty
// to print the ones that only exist on the object not the prototype it delegates to

for (let key in leo) {
  if (leo.hasOwnProperty(key)) {
      console.log(`Key: ${key}. Value: ${leo[key]}`)
  }
}

/** a good naming convention to follow is make sure that the first letter is uppercase although it's not necessary*/
function Pen(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}
const pen1 = new Pen("rotring", "blue", "$3");
console.log(pen1);
console.log(pen1 instanceof Pen);
console.log(pen1.constructor === Pen);


// Constructor Function's new Syntax introduced in (ES6)

class Pen {
  static count = 0;
  /*
    A static property is a property that is shared across all instances of a class, useful for keeping track of shared data
    or settings across all instances of a class. and is (accessed using the class name instead of an instance of the class)
    In other words, a static property belongs to the class itself,
    rather than any individual object created from the class.
  */
  #actualPrice; // private property declaration starts with #

  /*  one of the reason we use private properties is
   *  Encapsulation: Private properties can help enforce encapsulation,
   *  which is the principle of keeping data and functionality within a class hidden from the outside world.
   *  By making certain properties private, you can ensure that they are only accessed and modified within the class,
   *  which helps prevent unexpected side effects. */
  constructor(name, color, price) {
      // these are all instance properties even the employeeDisc
      // Every object created from the class will have its own copy of the instance properties
      // employeeDisc is An anonymous function used as a value for a property inside a class which is defined using a property-value pair syntax.
      // it's useful when you want to define a function that is only used within the class and does not need to be accessed outside of it.
      // cannot be inherited by subclasses.
      this.name = name;
      this.color = color;
      this.price = price;
      // private property
      this.#actualPrice = price * 0.4; // costs only 40% of the actual price to make

      this.employeeDisc = (discount) => {
          return (this.price *= (100 - discount) / 100);
      };
      Pen.count += 1;
      // this.count += 1; this won't work as you are trying to update the static property named count as if it's an (instance property)
      // but it's a static property that belongs to the class itself.
  }

  // Methods

  // a method in a class (lives on the prototype of the created object) is defined using a shorthand method definition syntax, which looks like this:
  MsgForEmployee1() {
      return `hello your employer gave you a discounted price of ${this.price}$`;
  }

  getActualPrice() {
      return `${parseInt(this.#actualPrice)}$`;
  }
  /*
   *  the original method definition syntax. that was introduced before the shorthand method definition
   *  involved defining a method as a (property) of the class prototype, with a name that corresponds to the method name.
   *  and a value that is a function expression that defines the method's behavior.
   *  This syntax is still valid and can be used in modern JavaScript.
   *  However, the shorthand method definition syntax is more concise and is generally preferred.
   *
   *  A method in a class can be inherited by subclasses, and can also be overridden by the subclass.
   *  associated with the class and can be accessed and called from outside of the class,
   */
  MsgForEmployee2 = function() {
      return `your employer was generous enough to offer you a discounted price of ${this.price} for the ${this.name} colored ${this.color}$`;
  };

  static PensCount() {
      return `no of pens created are ${this.count}`;
  }

}

const pen1 = new Pen("rotring", "blue", 100);
const pen2 = new Pen("rotring", "green", 100);
const pen3 = new Pen("rotring", "yellow", 100);

//console.log(pen1.#e); //  Error: Private field '#name' must be declared in an enclosing class
console.log(pen1.getActualPrice()); // you should use a method to be able to access a private property

pen1.employeeDisc(20); // 20% off
console.log(pen1.MsgForEmployee1());
/*
* To access a static property or method, you must use the class name followed by the property or method name
* like this: ClassName.propertyName or ClassName.methodName()
*/

// console.log(pen1.MsgForEmployee2()); // this won't work as it's a static method that's only accessed within the class itself
console.log(pen1.PensCount()); // this will result in an undefined (if the function wasn't static )because the obj pen1 can't access static property named count only via Pen.count
// but if the function was static you would need to call using the name of the constructor Pen.PensCount() and both Pen.count and this.count would work
console.log(Pen.PensCount()); // this will work as you are accessing a static method with the name of the constructor

/*
let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);
*/

/**
* Inheritance
* To create a subclass that inherits from a parent class in JavaScript, you can use the extends keyword followed by the name of the parent class.
*  The child class can then define its own properties and methods, or override or extend the ones inherited from the parent class.
*  When an instance of the child class is created, it has access to all of the properties and methods of both the child and parent classes.
*/
class User {
  #middleName = "Ibrahim";

  /*  private properties are not inherited by child classes.
   *  When a class inherits from another class, it only inherits the public and protected properties and methods,
   *  but not the private properties. Private properties are only accessible within the class where they are defined,
   *  and are not visible or accessible from outside the class or from child classes. */

  constructor(id, username, maidenName) {
      this.id = id;
      this.username = username;
      this.#middleName = maidenName;
      // this.#middleName = maidenName;
      // commenting this out or in otherwords not assigning middleName with a value even if it's(undefined/null)
      // will take the default value "Ibrahim"
  }
  sayHello() {
      return `Hello ${this.username}`;
  }
  sayHelloWMN() {
      //WMN with middle name
      return `Hello ${this.username} ${this.#middleName}`;
  }
}

// Derived Class
class Admin extends User {
  constructor(id, username, middleName, permissions) {
      super(id, username, middleName); // you can inherit a specific instance properties

      /** 
       * if you declare a constructor in a derived class, you'll need to call super() in it.
       * If you call super() without passing any arguments in a subclass constructor, it will call the constructor of the parent class with no arguments.
       * If the parent class constructor does not require any arguments, then calling super() without arguments in the subclass constructor is perfectly fine.
       * However, if the parent class constructor does require arguments, then calling super() without arguments will result in an error.
       */
      this.p = permissions;
  }
  saySuperHelloWMN() {
      //WMN with middle name
      return `Super hello  ${this.username} $_{this.#middleName} `;
      //Property '#middleName' is not accessible outside class 'User' because it has a private identifier.ts(18013)
  }
}

const newAdmin = new Admin(1, "ahmadgho", "sheko  ");
// console.log(newAdmin.#middleName); // Error: Private field '#middleName' must be declared in an enclosing class
console.log(newAdmin.sayHelloWMN()); // this will work as this method from the parent class can call the private property
console.log(newAdmin.saySuperHelloWMN()); // this won't work as this method from the child class is trying to access a private property from the parent class

// here's an example where calling super() without any arguments is okay
class Person {
  constructor() {
      this.name = "John Doe";
  }
}

class Student extends Person {
  constructor(major) {
      super(); // calling the Person constructor with no arguments
      this.major = major;
  }
}

const student = new Student("Computer Science");
console.log(student.name); // Output: "John Doe"
console.log(student.major); // Output: "Computer Science"


// getters and setters 
const obj = {
  log: ['a', 'b', 'c'],
  get latest() { // A getter must have exactly zero parameters.
      return this.log[this.log.length - 1];
  },
  set latest(value) { // A Setter must have (exactly) one formal parameter
      this.log[this.log.length] = value;
  }
}
obj.latest = "eee"
console.log(obj.latest); // "eee"

/* Using getters in classes
You can use the exact same syntax to define public instance getters that are available on class instances. In classes, you don't need the comma separator between methods. */

const obj = {
  log: ['a', 'b', 'c'],
  get latest() { // A getter must have exactly zero parameters.
      return this.log[this.log.length - 1];
  },
  set latest(value) { // A Setter must have (exactly) one formal parameter
      this.log[this.log.length] = value;
  }
}
obj.latest = "eee"
console.log(obj.latest); // "eee"

class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
      return this.#msg;
  }
  set msg(x) {
      this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"



// LESSON 157&158 Object Meta Data And Descriptor

/* When we create a JavaScript object, whether using object literal syntax or some other means
and add some properties to it, each property (key) gets a default property descriptor.
A property descriptor is a simple JavaScript object associated with each property of the object that contains information about that property
such as its value and other meta-data. */

/* To access the property descriptor of property, we need to use a static method provided by the Object.
The Object.getOwnPropertyDescriptor method returns the property descriptor of the prop which is the property name on the obj object.
*/

let myObject = {
  Prop1: "a",
  Prop2: "b"
};

Object.getOwnPropertyDescriptor(myObject, "Prop1"); // {value: 'a', writable: true, enumerable: true, configurable: true}

// writable is whether the user can assign a new value to the property,
// enumerable is whether this property will show up in enumerations like (for in) loop or (for of) loop or (Object.keys) etc.
// The configurable property tells whether the user has permission to change property descriptor such as to change the value of writable and enumerable settings.
// i.e if you went ahead and tried using Object.defineProperty() again to update the values of writeable and enumerable it will result in typeError

// the descriptor meta-data/settings are always set to true by default if you define the property while creating the object
// while you define a new property on an object using Object.defineProperty() and pass empty {} descriptor, the default descriptor looks like below.
obj = {
  value: undefined,
  writable: true,
  enumerable: false,
  configurable: false
}

// To create a new property on an object or update existing property with a custom descriptor, we use Object.defineProperty() static property
Object.defineProperty(myObject, "Prop3", {
  writable: true,
  enumerable: false,
  configurable: false,
  value: 15,
});

console.log(myObject); // (3) {Prop1: 'a', Prop2: 'b', Prop3: 15}
Object.keys(myObject); // (2) ['Prop1', 'Prop2']

console.log(Object.getOwnPropertyDescriptors(myObject));

/* 
Prop1 {value: 'a', writable: true, enumerable: true, configurable: true}
Prop2 {value: 'b', writable: true, enumerable: true, configurable: true}
Prop3 {value: 15, writable: true, enumerable: false, configurable: false}
*/

// you can also delete a key-value pair using the delete keyword along with updating the value if writeable is set to true
delete myObject.prop3; // true as it exists or false as it doesn't exist or not writeable!
console.log(myObject); // (2) {Prop1: 'a', Prop2: 'b'}

// creating an object using Object.create() static property

/* the easiest way to create an Object with no or a custom prototype. 
* It is also one of the easier ways to create objects from scratch with custom property descriptors.
* Object.create function has the following syntax.
let obj = Object.create( prototype, { property: {value:undefined,writeable:false,enumerable:false,configurable:false}, ... } ) */
/* 
Here prototype is an object which will be the prototype of the obj. If prototype is null, then obj won’t have any prototype.
When you define an empty or non-empty object with let obj= {} syntax, by default, obj.__proto__ points to Object.prototype
hence obj has the prototype of Object class.
This is similar to using Object.create with Object.prototype as the first argument (prototype of the object being created). 
*/

o = {};
// Is equivalent to:
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  // foo is a regular data property
  foo: {
      writable: true,
      // if set to false or not set at all it will be defaulted to false
      // and setting the value won't result in a change and it will be still equal to "hello" 
      configurable: true,
      value: "hello",
  },
  // bar is an accessor property
  bar: {
      configurable: true,
      // it can't have a value nor writable properties as Descriptor
      get() {
          return 10;
      },
      set(value) {
          console.log("Setting `o.bar` to", value);
      },
  },
});

// Create a new object whose prototype is null
//with a single property 'p', with value 42.
o = Object.create(null, {
  p: {
      value: 42
  }
});
// and you can't set the value directly if you are using Object.create static property as it's expecting an object

o = Object.create(null, {
  p: 42
}); // ​ Uncaught TypeError: Property description must be an object

// learn JavaScript In Arabic (Generator function)

// Essentially a generator is just a function that is used to iterate over a series of values
// Every generator function will use the function*
// When you call a generator function it doesn't actually run any of the code in the generator
// and instead returns a generator object which can be used to run the code in the generator function.
function* simpleGenerator() {
  yield 1
  yield 2
  yield 3
}
const generatorObject = simpleGenerator();
console.log(generatorObject.next())
// { value: 1, done: false }
console.log(generatorObject.next())
// { value: 2, done: false }
console.log(generatorObject.next())
// { value: 3, done: false }
console.log(generatorObject.next())
// { value: undefined, done: true }

// delegate generator 

function* generateNums() {
  yield 1;
  yield 2;
}

function* generateLetters() {
  yield "A";
  yield "B";
}

function* generateAll() {
  yield* generateNums();
  // without using the * next to yield it will return an object from generateNums generator function instead of delegating it
  yield* generateLetters();
  yield*[4, 5, 6];
}
let generator = generateAll();

console.log(generator.next());
// {value: 1, done: false}
console.log(generator.next());
// {value: 2, done: false}
console.log(generator.next());
// {value: 'A', done: false}

// End A Generator Early
// If you ever want to end a generator without actually going through all possible values you can use the return method on the generator object.
// you can end the generator function generating capabilty and return either undefined or anything else like return("Z")
console.log(generator.return());
// {value: undefined, done: true}
console.log(generator.next());
// {value: undefined, done: true}

// One of the most obvious use cases is for an ID generator

function* generateId() {
  let id = 1

  while (true) {
      yield id++
  }
}
const gen = generateId();
console.log(gen.next().value) // 1 
console.log(gen.next().value) // 2
console.log(gen.next().value) // 3


/* Pass A Value To Next
If you need to pass values into a generator you can do so with the next function.
The value you pass to next will be returned from the current yield statement. */

function* generateId() {
  let id = 1;
  while (true) {
      const increment = yield id;
      if (increment != null) id = id + increment;
      else id++;
  }
}


const genID = generateId();
console.log(gen.next().value)
// 1
console.log(gen.next(3).value)
// 4
console.log(gen.next().value)
// 5

// for...in loops over keys, while for...of loops over values
let arr = ['a', 'b', 'c', 'd'];
for (let x in arr)
  console.log(x); // 0 1 2 3
console.log(arr[x]); // a b c d
// you can also further optimize this approach with 
for (const [key, value] of arr.entries())
  console.log(key, value);
for (let x of arr)
  console.log(x); // a b c d

// exporting and importing
// there can be only one default export per a module/file
// buttons.jsx

// 1st approach for default exporting
export default function SmallButton() {
  return `< button> Small </button>`;
}
// 2nd approach for default exporting
const SmallButton = () => {
  return `< button> Small </button>`;
}
export default SmallButton;

// this approach is not correct and won't work!!
/* export default const SmallButton = ()=> {
return <button>Small</button>;
}
*/
// named exports
// for named exports 1st approach
export function BigButton() {
  return `< button style = {
      {
          padding: '20px 40px'
      }
  }> Big </button>`;
}
// for named exports 2nd approach
export const SmallButton = () => {
  return `<button style = {
      {
          padding: '10px 20px'
      }
  }> small </button>`;
}

// for named exports 3rd approach
function SmallButton() {
  return` < button> Small </button>`;
}

function ExtraBigButtons() {
  return `< button style = {
      {
          padding: '40px 60px'
      }
  }> Extra Big </button>`;
}
// 👇️ named exports 3rd approach
export {
  SmallButton,
  ExtraBigButtons
};


// measure code execution time 
const start = performance.now();
await functionToBeMeasured();
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);

// javascript Callbacks, promises, thenables Async&Await Fetch Api
/* 

/**
* How do we go about executing a long-running operation without blocking the thread of execution? Well, welcome to asynchronous programming.
* Rather than waiting for long-running operations to return, blocking the execution thread in the process,
* they are delegated to callbacks, which are functions that are called when these operations finally return.
* but this approach can result in callback hell or pyramid of doom so promises were created to solve that issue */

// we can manually convert a value into a promise, like below:

const value = 100;
const promisifiedValue = Promise.resolve(value);
console.log(promisifiedValue); // Promise {<fulfilled>: 100}

promisifiedValue
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

// console.log inside of call back function outputs 100
// then the whole block of code promisifiedValue.then(...) will output Promise {<fulfilled>: undefined}

// promises:
// A promise is an object representing the eventual completion or failure of an async call
// Standardized in the ES2015 spec, a promise is a wrapper function around a regular callback functions.
//  To construct a promise, we make use of the Promise() constructor

// 3 states: Pending, Fulfilled, Rejected
// first two states: Fulfilled, Rejected
const myPromise1 = new Promise((resolve, reject) => {
  const Error = false;
  if (!Error) resolve("your promise got resolved (myPromise)");
  else reject(Error("your promised got rejected (myPromise)"));
});

console.log(myPromise1); // this will output the state of a promise: object representing the eventual completion or failure of an async call
// Promise {<fulfilled>: 'your promise got resolved'}
myPromise1
  .then((res) => res + " cheer!") // if you would like to perform an operation on the resolved output you can do that and return the value then use it with another thenable
  .then((res) => console.log(res)) // "your promise got resolved (myPromise) cheer!
  .catch((err) => console.error(err)); // whenever it encounters an error it skips through the rest of the chain to the .catch block

// next example of a promise catching up to another promise

const myPromise2 = new Promise((resolve, reject) => {
  const Error = false;
  if (!Error) resolve("your promise got resolved (myPromise)");
  else reject(Error("your promised got rejected (myPromise)"));
});

const myNextPromise = new Promise((resolve, reject) => {
  let err = false;
  setTimeout(() => {
      if (!err) resolve("your promise got resolved (myNextPromise)");
      else reject(new Error("your promised got rejected (myNextPromise)"));
  }, 3000);
});
myNextPromise.then((res) => console.log(res));
myPromise2.then((res) => console.log(res));

// although the first one was called first
//the second will get executed before the first because of the delay
//and because they run asynchronously
// outputs
// main.js:123 your promise got resolved (myPromise)
// main.js:122 your promise got resolved (myNextPromise)

// pending state
// when we log our promise we get an object representing the eventual completion (fullfilled) or failure (rejected) of an async call right away because we already have the values
// however with a fetch request it's in pending till we resolve it
// okay promise finish up and then do this execute (the callback function)

const users1 = fetch("https://jsonplaceholder.typicode.com/users");
// write this then.... log the users because a time were given for the server to respond we were able to see it was fullfilled
console.log(users1);
// VM2482:1 Promise {<fulfilled>: Response}

// but trying to log the users right away with result in pending state
// the server didn't get enough time to respond
const users2 = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users2);
// VM2609:2 Promise {<pending>}

users1.then((res) => res.json()).then((ans) => console.log(ans));
// the first then block recieves a promise and it's a readable stream then we parse it into json
// which also returns a promise that we get to resolve it in the second then block
// res is a promise and res.json() is also a promise 

// Async / Await
// https://dev.to/masteringjs/using-then-vs-async-await-in-javascript-2pma
// Async/await helps you write synchronous-looking JavaScript code that works asynchronously.
// With async/await, there’s no use of callbacks. try and catch methods are also used to get rejection values of async functions.
// Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
/* It’s important to point out that working with multiple apis you often have to chain multiple promises 
resulting in callbacks nested inside callbacks nested inside callbacks nested inside callbacks…
This is what we call a CALLBACK HELL. So the primary reason async/ await exists is to avoid a callback hell */
// The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.
// top level of a module example 

// app.js module
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
export default data;

// main.js module
const data = await import("./app.js");
console.log(data.default);

// For example, consider the following code:
async function foo() {
  return 1;
}
// It is similar to:

function foo() {
  return Promise.resolve(1);
}

const TestFunc = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); // await the response from server

  const jsonUserData = await response.json(); // once we get the response fullfilled which is a readable stream
  // we call the json method on it returning a promise that we need to await to be fullfilled

  console.log(jsonUserData); // this console log is in the async function that is a synchronous-looking JavaScript code
  // it will delay it's execution till all the promises have been fullfilled and resolved
  alert(1); // notice that it ran synchronously after the data have been logged and before the 'finished!' is output
  console.log("finished!");
  return jsonUserData;
};

console.log(TestFunc());
// since this is outside the scope of our Async TestFunc it will not await the promises to be fullfilled and will return a pending promise

// if you would like to log the data outside the scope of our testFunc
let resultFunc = async () => console.log(await TestFunc());
resultFunc();

// real life example 1 (minuplating our data from inside the async func)

const postToWebPage = (jsonUserData) => {
  jsonUserData.forEach(({
      name: n,
      username: un,
      email: em
  }) => {
      const div = document.createElement("h3");
      const textNode = document.createTextNode(
          `hello ${n}, username:${un} email:${em}`
      );
      div.appendChild(textNode);
      document.body.appendChild(div);
  });
};
const fetchUserData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  postToWebPage(jsonUserData); //  this function is called within the Async function it will get executed after the data have been resolved (awaited)
  // thus there's no need to await the return of the jsonUserData on postToWebPage
};
fetchUserData();

// real life example 2 (minuplating our data from outside the async func)

const fetchUserData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const postToWebPage = async () => {
  const jsonUserData = await fetchUserData();
  jsonUserData.forEach(({
      name: n,
      username: un,
      email: em
  }) => {
      const div = document.createElement("h3");
      const textNode = document.createTextNode(
          `hello ${n}, username:${un} email:${em}`
      );
      div.appendChild(textNode);
      document.body.appendChild(div);
  });
};
postToWebPage();

// real life example 3 (minuplating our data from outside the async func)

const fetchUserData = async () => {
  await new Promise((resolve) => setTimeout(() => resolve("hey"), 3000)); // await a promise that will resolve after 3 seconds
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};
const postToWebPage = async (jsonUserData) => {
  jsonUserData.forEach(({
      name: n,
      username: un,
      email: em
  }) => {
      const div = document.createElement("h3");
      const textNode = document.createTextNode(
          `hello ${n}, username:${un} email:${em}`
      );
      div.appendChild(textNode);
      document.body.appendChild(div);
  });
};
postToWebPage(await fetchUserData());

// Promises are asynchronous, but they shouldn’t block synchronous code that doesn’t depend on them,
// so the asynchronous code has to be isolated.
//https://www.learnwithjason.dev/blog/keep-async-await-from-blocking-execution#async-operations-with-dependencies

// optimizing asyc/await function using promise.all()

/**  The Promise.all() static method accepts a single argument, which is an array of Promises and returns a single Promise.
* This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed),
* and It rejects when any of the input's promises rejects, with the first rejection reason.
* in short: Promise.all waits for all fulfillments (or the first rejection).
*/

// if you have two promises that are not dependant on each other and can run in parallel inside of an async function
// you should use Promise.all() static function to increase efficiency

// in this example we can get both beef and buns and the same time as they can run in parallel to improve efficiency 
// assume every promise takes 100 m second to resolve

// example 1 without optimizing our code

const operation = (OpName, depends = null, timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout, `${depends} => ${OpName}`));
}

const makeBurger = async () => {
  const beef = await operation("getBeef", null, 100);
  const cookedBeef = await operation("cookBeef", "beef", 100);
  const buns = await operation("getBuns", null, 100);
  const burger = await operation("putBeefBetweenBuns", "cookedBeef and buns", 100);
  return [cookedBeef, beef, buns, burger];
};

// Make and serve burger
const start = performance.now();
console.log(...(await makeBurger())); // takes 400 ~ 430 msec
const end = performance.now();
console.log(`Execution time makeBurger: ${end - start} ms`);

//example 2 optimizing our code to let the operations that doesn't depend on other operations to run in parallel

const operation = (OpName, depends = null, timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout, `${depends} => ${OpName} \n`));
}

const makeBurgerEfficently = async () => {
  const [beef, buns] = await Promise.all([operation("getBeef", null, 100), operation("getBuns", null, 100)]);
  const cookedBeef = await operation("cookBeef", "beef", 100);
  const burger = await operation("putBeefBetweenBuns", "cookedBeef and buns", 100);
  return [beef, buns, cookedBeef, burger];
};

// Make and serve burger Efficently
const start = performance.now();
console.log(...(await makeBurgerEfficently())); // takes 300 ~ 330 msec
const end = performance.now();
console.log(`Execution time makeBurgerEfficently: ${end - start} ms`);


// Quick tip if you would like to use the 2nd parameter
// of a callback function only 
// you can put _ in it's place _ is a valid parameter and you can use the resolve but _ is the simplest way you can name a param

new Promise((_, reject) => {
  throw new Error("better catch that error");
});

// 2nd parameter of fetch is an object 
// the default method for that object is GET and accept can be an application/json or plain/text

// we can also use POST as a method

const JokesOject = {
  id: "345fdksosf",
  joke: "why was it called the dark ages? because of all the knights."
}

const postData = async (jokesObj) => {
  const res = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(jokesObj),
  });
  const jsonResponse = await res.json();
  console.log(jsonResponse.headers);
}
postData()

// iterations with await
// https://stackoverflow.com/questions/69620879/top-level-bodies-of-modules-syntax-error-with-async-await

// in a an async function
// The forEach() method is not compatible with async functions.
//  Even if you declare an async function inside the forEach() block, it won't behave as expected.
//  There is no way to make async/await work with the forEach() method.

const asyncFunc = async () => {
  let arr = ["a", "b", "c", "d"];

  arr.forEach(async function(ele) {
      console.log("letter", ele)
      await new Promise(resolve => setTimeout(resolve));
      console.log("after await");
  })
}
asyncFunc();

console.log("after foreach");
/*  outputs
letter a
letter b
letter c
letter d
after foreach
after await x4 */

////////////////////////////////////////////////////////
const asyncFunc = async () => {
  let arr = ["a", "b", "c", "d"];

  for (let i = 0; i < 4; i++) {
      console.log("letter", arr[i]);
      await new Promise(resolve => setTimeout(resolve));
      console.log("after await");
  }
  console.log("after for");
}

asyncFunc()

/*  outputs
letter a
after await
letter b
after await
letter c
after await
letter d
after await
after for */

///////////////////////////////////////////////////////////////////////////////////////////
  // NOTE: any async function returns a promise at the end and it needs to be awaited so it can be resolved

  // await is only valid in async functions and the top level bodies of modules 
  // nodejs  running env -> (.mjs files) / {type:module} in package.json
  // browser running env -> <srcipt type="module" src="test.js"><script/>
  // Top-level await operators in the Console of the browser as of chrome62 2017
  // use nodemon to automatically run nodejs file and watch for file change or nodejs19 (add --watch flag)


// alternative ways of looping with async/await

// for await is supposed to be used with asynchronous iterators, not with arrays of pre-existing promises.
// calls are happening immediately, all at once, before anything is awaited.
// Then, they are awaited one after another, which is definitely a problem if any one of them gets rejected:
// it will cause an unhandled promise rejection error


const postIds = [...Array(5)].map((_,i)=>i+1); //  one liner of N number of elements starting with 1 (n+1)
const delayIds = [...Array(5)].map((_,i)=>i); //  one liner of N number of elements starting with 0 (n)

const getPost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
};

const delay = async (id) => {
  const arr = [100,200,300,500,400];
  const response = await new Promise((res)=> setTimeout(res, arr[id],id));
  return response;
};

const arrayOfPromises = postIds.map(id  =>  getPost(id));
const arrayOfDelayPromises = delayIds.map(id  =>  delay(id));


// 1.1 promise calls are all made at once then they are awaited when it's already too late.
// which can cause a problem if any one of them gets rejected: it will cause an unhandled promise rejection error.
// and the total execution time will depend on the promise with the longest execution time

for (const promise of arrayOfPromises) {
  console.log(await promise); // top level await (goes with the [with the await comparison])

  await (async () => console.log(await promise))() // IIFE (Immediately Invoked Function Expression)
  
  // without the await 
  // delay: 0,1,2,4,3 from the shortest execution time to longest
  // posts: from the shortest execution time to longest (Network tap -> sort by time logged posts are aligned with the time taken by the req to resolve/reject)
  
  // with the await
  // delay: 0,1,2,3,4 according to the order they were passed in 
  // posts: according to the order they were passed in. always 1,2,3,4,5
}

// another neat alternative 
// however check for await..of VS Promise.all https://stackoverflow.com/a/59695815/2828694 

for await (const promise of arrayOfPromises) {
  console.log(promise);
}

// 1.2 concurrently returning an array of ordered promises (the order that they were passed in)
// takes the time of the longest promise to resolve

// however check this when it comes to running it on server side rather than client side
//https://stackoverflow.com/questions/28066429/promise-all-order-of-resolved-values


// The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises fulfill, with an array of the fulfillment values.
// It rejects when any of the input's promises rejects, with this first rejection reason.

const getPostsConcurrently = async (arrayOfPromises) => {
  const posts = await Promise.all(arrayOfPromises);
  return posts;
}

// 2. using reduce, promise calls are all made at once then they are awaited when it's already too late 
// and the total execution time will depend on the promise that takes the longest time
// they are displayed based on their order of execution time (less time to longest time)


const getPostsSerializied = async (ids) => {
  await ids.reduce(async (acc, id) => {
    console.log(acc);

      // no waiting for prev item to complete 
      /*await acc;*/ // awaiting pesuedo promise of a number (id)

      //get the next item
      const post = await getPost(id);
      console.log(post);

  }, Promise.resolve())
}

// 3. requests are all made synchronously each promise is awaited before handling the other creating a waterfall
// (bad less preferred)
const getPostsSerializied = async (ids) => {
  await ids.reduce(async (acc, id) => {
    console.log(acc);
      // waits for the previous item to complete 
      await acc;
      //get the next item
      const post = await getPost(id);
      console.log(post);

  }, Promise.resolve())
}

// OTHER PROMISE STATIC METHODS

// >>Promise.allSettled()<< static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises settle, with an array of objects that describe the outcome of each promise.
// it doesn't return with first rejection reason like Promise.all()

// >>Promise.race()<< static method takes an iterable of promises as input and returns a single Promise.
// This returned promise settles with the eventual state of the first promise that settles.

/* await Promise.race([ (new Promise((res,rej)=>setTimeout(res,100,"resolved 100"))),
 (new Promise((res,rej)=>setTimeout(rej,20,"rejected promise state 20"))),
  (new Promise((res,rej)=>setTimeout(res,30,"resolved 30"))) ]) */

// without await -> Uncaught (in promise) rejected promise state 20
// with await -> Uncaught rejected promise state 20

// >>Promise.any()<< static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.

/* await Promise.any([ (new Promise((res,rej)=>setTimeout(res,100,"resolved 100"))),
 (new Promise((res,rej)=>setTimeout(rej,20,"rejected promise state 20"))),
  (new Promise((res,rej)=>setTimeout(res,30,"resolved 30"))) ]) */

  // 'resolved 30'
// NOTE: It rejects when all of the input's promises reject,
// with an AggregateError containing an array of rejection reasons.
// Uncaught AggregateError: All promises were rejected

/////////////////////////////////////////////////////////////////////////
// notice the diff between those 2 code snippets

console.log("before func");
const myFunc = async () => {
  console.log("in function");
  await new Promise((resolve) => resolve("hey"));
  console.log("in function after await");
}
myFunc();
console.log("after func");
/**
 * because the asynchronous code inside myFunc() is not blocking the execution of the code outside of the function.
 * This statement logs "after func" to the console before the asynchronous code inside myFunc() has had a chance to complete.
 * So the order of execution is "before func", "in function", "after func", and "in function after await",

before func
in function
after func
in function after await
 */
///////////////////////////////////////////////////////////

console.log("before func");
const myFunc = async () => {
  console.log("in function");
  await new Promise((resolve) => resolve("hey"));
  console.log("in function after await");
}
await myFunc();
console.log("after func");

/* before func
in function
in function after await
after func */


// this code executes in 304 after awaiting both promisses synchronously

let start = performance.now();
await new Promise((resolve) => setTimeout(resolve, 100, "1st"));
await new Promise((resolve) => setTimeout(resolve, 200, "2nd"));
let end = performance.now();
console.log(end - start); // 304ms


// while this code executes after 200 ms which is the time taken by the longest promise to resolve
// interesting way to do things in parallel with async/await (though not one I’d recommend)

let start2 = performance.now();
let first  = new Promise((resolve) => setTimeout(resolve, 100, "1st"));
let second = new Promise((resolve) => setTimeout(resolve, 200, "2nd"));

// await  new Promise((resolve) => setTimeout(resolve, 200, "3nd")); if you added this line of code the execution time
// will still be 200ms that further emphasizes the explanation below

await first;
await second;

let end2 = performance.now();
console.log(end2 - start2); // 200~205

// In this case we’ve dispatched both async actions (setTimeOut is running concurrently like Promise.all() )
// before we await anything, so they’re both run concurrently.
// By the time we start awaiting, it’s too late to delay either of them.
//the Promises are created before any await statements, so they start running concurrently.

/* The await keyword “waits” for the promise to resolve (or reject),
so in the first case all 100 of the ms have to pass before the second promise is even seen.
In the second case the first promise and second promise are initialized at approximately the same millisecond.
Basically you can image line 1,2,3,4 all executing at the same time (in order).
At millisecond 100, line 5 will also start executing and since the second promise was already initialized 
it’s setTimeout will be at its 100th ms already. At the 200th ms,
the 5th line finishes waiting on the second promise and the 6th line executes (the performance.now) */

// element height, top position
const element = document.querySelector("#hero")
const rect = element.getBoundingClientRect();
// {
//   "x": 192,
//   "y": 92,
//   "width": 1152,
//   "height": 665.6000366210938,
//   "top": 92,
//   "right": 1344,
//   "bottom": 757.6000366210938,
//   "left": 192
// }
// relative to the viewport and not the document

const element = document.querySelector("#hero")
console.log(element.offsetTop, element, offsetHeight);
// 92 ===top, 666 === height+top (approx) relative to thedocument and not the viewport

// creating useScrollSpy
// how array.prototype.find() works
let arr = [{
      name: "ahmad",
      id: 1
  },
  {
      name: "mohamed",
      id: 2
  },
  {
      name: "huessin",
      id: 3
  },
];
arr.find(({
  name
}) => name === "ahmad");
// returns the whole element that returned true first 

// Passing Arrays as Function Arguments

/* If you want to pass an array into a variadic function.
You can use ES6 spread to turn that array into a list of arguments. */

function sandwich(a, b, c) {
  console.log(a); // '🍞'
  console.log(b); // '🥬'
  console.log(c); // '🥓'
}

const food = ['🍞', '🥬', '🥓'];

// Old way
sandwich.apply(null, food);

// ✅ ES6 way
sandwich(...food);

// what is javascript
// single threaded non-blocking asynchronous concurrent language

let callback = ([{
  intersectionRatio,
  isIntersecting,
  target
}], observer) => {

  isIntersecting && console.log(target.id);

};

//intersection observer

let sections = document.querySelectorAll("[data-section]");

for (section of sections) {
  let options = {
      rootMargin: "0px",
      threshold: 0.02,
  };
}
  let observer = new IntersectionObserver(callback, options);
  observer.observe(section)

  /**
   * Note
   * Variables created without a declaration keyword (var, let, or const) are always global,
   * even if they are created inside a function.
   * Local variables have short lives.
   * They are created when the function is invoked, and deleted when the function is finished.
   */
  let a = 10

  function myFunction() {
      a = 5; // global scope variable overrides a = 10
  }
  myFunction();
  document.getElementById("demo").innerHTML = a; // 5


  //[...array] shallow copies an object while structuredClone() makes a deep copy of an object

  // Closures
  // https://www.swyx.io/hooks
  // https://dev.to/mattdclarke/what-is-a-closure-example-use-cases-in-javascript-and-react-2e6j read this!!!!
  // According to MDN, closure gives you access to an outer function’s scope from an inner function. In JavaScript,
  //  closures are created every time a function is created, at function creation time.

  // Once the function has been invoked, references to any variables declared within its scope are removed
  // A closure is a reference to a variable declared in the scope of another function that is kept alive
  // by returning a function from the invocation of the existing function.

  // basic counter dilemma
  let counter = 0;

  function incCounter() {
      counter++;
  }
  incCounter(); // inc counter by 1
  incCounter(); // inc counter by 2
  incCounter(); // inc counter by 3

  // the counter's values can be altered from outside the incCounter function which is a problem that needs to be solved
  counter = 0 // back to 0 

  // also what if you wanted to create 3 counters 
  // if you followed the same approach you would need to create 3 different variables and 3 different functions 
  // and you would still need to solve the problem with the counter values easily being altered from outside the incCounter function

  let createCounter = () => {
      let counter = 0; // private variable inclosed inside of this function
      const incCounter = () => {
          counter++
      };
      const getCounter = () => counter; // getter function
      const setCount = (value) => {
          counter = value
      } // setter function
      const staleMessage = () => message;
      return [counter, getCounter, setCount, incCounter];
  }
  let [counter, getCounter, setCount, incCounter] = createCounter();
  // let [readCounter2,updateCounter2, incCounter2] = createCounter();
  // let [readCounter3,updateCounter3, incCounter3] = createCounter();

  // stale closures
  // The stale closure captures variables that have outdated values.

  // example with a stale closure
  let createStaleCounter = () => {
      let counter = 0;
      const incCounter = () => {
          counter++
      };
      const message = `counter value is ${counter}`;
      const staleLog = () => message;
      const log = () => `counter value is ${counter}`;
      return [log, staleLog, incCounter];
  }
  const [log, staleLog, incCounter] = createStaleCounter();
  // after using incCounter to inc for n number of times
  // `log` logs the correct counter value however `staleLog` doesn't
/**
 * JavaScript automatically allocates memory when variables are initially declared.
 * After a function returns, its local variables may be marked for garbage collection and removed from memory. 
 * Garbage collection is a type of automatic memory management used by JavaScript to free memory 
 * when an allocated block of memory, such as a variable and its value, is not needed anymore.
 */

  // setState in react functional components and react class components

  //  in react functional components each state you create is independant from the others
  // i.e they are not properties living in a single state object like in class components
  // and each property is a state by itself
  const App = () => {
      [count, setCount] = React.useState(0);
      const incCount = () => setCount(prevCount => prevCount + 1);
  }

  // in class components there is a state object and the states you wanted to have would be properties defined in that object
  class App extends React.Component {
      state = {
          count: 0,
      };
      incCount = () => {
          // prevState here is the previous state object rather than the previous count state we would have in react hooks that we want to increment 
          this.setState((prevState) => ({
              count: prevState.count + 1,
          }));
      }
  }
  /*
   * the new object is concatenated with the state object and count property is overriden
   * the reason why react went with the concatenation and it was a favorable approach than spreading the previous state object {...prevState, count:newCount}
   * because it was the default as you would need to spread the previous state object every single time 
   * i.e it's was going be the default return for every callback function being passed to every state setter function unless you want to delete other states
   * while updating a single one
   * 
   * also in react functional components using the useState hook you could be saving a primitive data type as a state setCount(prevCount => prevCount+1)
   * so there's no reason to assume that it's an object and use the same concatenation methodolgy  giving you more freedom
   */


  /** useState hook with JS */
  // if you need hooks in nodeJS this how you would implement it

  function useState(initVal) {
      let state = initVal || undefined;
      const setState = (newVal) => {
          state = newVal
      }
      const getState = () => state;
      return [getState, setState]
  }

  const [state, setState] = useState(8);
  console.log(state()); // 8
  setState(4);
  console.log(state()); //4

  /////////////////////////////////////////
  // couldn't get it to work

// void 0 and undefined property 

// undefined isn't a reserved keyword in javascript but it's a global property in the window object
// using the undefined identifier is not a foolproof way to obtain the undefined value.
// Instead, can use the void operator, e.g. void 0

/* Before ECMAScript 5, that property was writable, so undefined = "A value";
replaced the value of window.undefined, assuming it was not shadowed by a local variable (there wasn't another variable named undefined in the same scope).
Then if you used "A value" === undefined, you would get true. And void 0 === undefined would produce false.
ECMAScript 5 changed this behavior, and now the property is not writable nor configurable.
Therefore, assignments to undefined will be IGNORED in non-strict mode, and will throw an exception is strict mode. Under the hood,
 */

"use strict"
undefined=3;
console.log(undefined); //Uncaught TypeError: Cannot assign to read only property 'undefined' of object '#<Window>'

// while without use strict
undefined=3;
console.log(undefined); //undefined (assignment is ignored)


// However, you are still able to declare local undefined variables:
(function() {
  var undefined = "A value";
  alert(undefined); // "A value";
})();

// or block-level undefined variable
{
    let emptyVar;
    // console.log(emptyVar === undefined); // Cannot access 'undefined' before initialization
    const undefined = "sheko";
    console.log(undefined);
    console.log(void 0); // primative undefined
}

let obj = {prop1:"", method(){}}

// If you want to List All Prototype Properties of an Object.
  console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)));
// (12) ['constructor', '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__', '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'toString', 'valueOf', '__proto__', 'toLocaleString']

// and if you want all properties including the object's own properties.
  [...Object.getOwnPropertyNames( Object.getPrototypeOf(obj)), ...Object.getOwnPropertyNames(obj)]
// (14) ['constructor', '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__', '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'toString', 'valueOf', '__proto__', 'toLocaleString', 'prop1', 'method']

// object's own properties only.
  Object.getOwnPropertyNames(obj)
// (2) ['prop1', 'method']

