# JavaScript Hands-On Practice (Browser-Based)

Welcome! This repository is designed to help you move beyond theory and gain real, practical skill in **browser-based JavaScript**. All topics and questions here are tailored for code that runs in the web browser (not Node.js). For each topic, you’ll find hands-on mini challenges—try them in your browser’s console, inside `<script>` tags in HTML, or with tools like [JSFiddle](https://jsfiddle.net/), [CodePen](https://codepen.io/), or [Chrome DevTools](https://developer.chrome.com/docs/devtools/).

---

## 1. Variables & Data Types

1. Create variables using `let`, `const`, and `var` for a user’s name (string), age (number), isAdmin (boolean), hobbies (array), and profile (object). Log each type with `typeof`.
2. Convert `"42"` to a number using `Number()`, `parseInt()`, and unary `+`. What happens if you convert `"42abc"`? Use `isNaN` and `Number.isNaN`.
3. Show how `==` and `===` differ with examples (`0 == false`, `"0" == 0`, `null == undefined`, `[] == false`). Explain with comments.
4. Use `Array.isArray()` to check if a value is an array. Try it on an array and an object.
5. Write a function `classify(value)` that returns `"array"`, `"null"`, `"object"`, `"date"`, `"function"`, or `"primitive"` using `Object.prototype.toString.call`.

---

## 2. Operators & Expressions

1. Demonstrate the difference between `++i` and `i++` in a loop. Log the intermediate values.
2. Use logical `&&` and `||` to implement a fallback value chain for a user's setting: `userSetting`, `appDefault`, `systemDefault`.
3. Show how `??` (nullish coalescing) differs from `||` with inputs: `0`, `""`, `null`, `undefined`.
4. Write a one-line conditional expression to categorize a temperature: `"cold"`, `"warm"`, or `"hot"`.

---

## 3. Control Flow (if / switch / loops)

1. Rewrite an if/else chain as a `switch` for grading: A, B, C, D, F based on a numeric score.
2. Use a `for` loop, `while` loop, and `for...of` loop to sum numbers in an array.
3. Build a function `fizzBuzz(n)` that logs (or returns as array) the fizz/buzz logic from 1 to n.

---

## 4. Functions & Scope

1. Write three versions of a function `add(a, b)`: a function declaration, a function expression, and an arrow function. Log `typeof` each.
2. Demonstrate hoisting differences between a function declaration and a function expression.
3. Create a function that returns another function (closure) to increment a private counter.
4. Write a function using rest parameters to sum any number of arguments.

---

## 5. Arrays & Array Methods

1. Re-implement `map` as `myMap(arr, callback)`. Compare to native `map`.
2. Given an array of mixed values, filter only numbers, then reduce to their average.
3. Flatten a nested array (one level) without using `flat()`.
4. Chain `filter`, `map`, and `reduce` to get the sum of squares of even numbers.

---

## 6. Objects

1. Create an object with properties and a method. Access and update properties using dot and bracket notation.
2. Add and delete properties dynamically. Loop over properties with `for...in`.
3. Use object destructuring to extract values from an object.

---

## 7. The DOM (Document Object Model)

1. Select an element by ID and change its text content.
2. Create a new `<li>` element and append it to a `<ul>`.
3. Change the style of an element using JavaScript.
4. Add a click event handler to a button that changes the background color of the page.

---

## 8. Events & User Interaction

1. Add a click event listener to a button that logs a message.
2. Add a `keyup` event to an input that logs the current value.
3. Prevent a form from submitting and log the entered values instead.
4. Show the difference between `onclick` attribute and `addEventListener`.

---

## 9. Working with Forms

1. Read the value from a text input when a button is clicked.
2. Validate that an email input contains "@" before allowing form submission.
3. Reset a form using JavaScript.

---

## 10. Timers & Asynchronous Code

1. Use `setTimeout` to log a message after 2 seconds.
2. Use `setInterval` to update a counter on the page every second.
3. Stop the interval after 5 seconds.

---

## 11. Error Handling

1. Use `try...catch` to handle a reference error and log a friendly message.
2. Create a function that throws an error if a required argument is missing.

---

## 12. ES6+ Features

1. Use destructuring to swap two variables without a temp variable.
2. Use a template literal to display user info in a sentence.
3. Use spread syntax to combine two arrays.
4. Use arrow functions and default parameters in a function.

---

## 13. Mini-Projects (Browser)

1. Build a simple counter with "+" and "-" buttons that updates a displayed number.
2. Make a to-do list: add, mark as done, and remove items (all in the browser).
3. Create a color picker: change the page background to the selected color.

---

## How to Use

- Try these in your browser’s JavaScript console or inside `<script>` tags in a basic HTML file.
- Use [JSFiddle](https://jsfiddle.net/), [CodePen](https://codepen.io/), or [Chrome DevTools](https://developer.chrome.com/docs/devtools/) for quick experimentation.
- Consider adding your solutions in a separate `Solutions.md` file.

Happy coding!
