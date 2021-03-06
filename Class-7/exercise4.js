// ## Exercise #4: Intermediate
// **Aim**: Create the function that takes an array with objects and returns the sum of people's budgets.
// _Examples_
// ```js
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])    ➞    65700
// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])    ➞    62600
// ```
// ---
// ---
var myArray = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
];
var sum = myArray.map(function (element) { return element.budget; }).reduce(function (a, b) { return a + b; }, 0);
console.log(sum);
