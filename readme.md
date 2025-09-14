# 📘 Comprehensive JavaScript Question Suite

A curated list of **JavaScript questions** to test your knowledge, ranging from **beginner to expert**.  
Perfect for **interview preparation** or **self-assessment**.

---

## 🔰 Beginner Level: The Basics (Done)
These questions cover the absolute fundamentals of the language.

### Variables and Data Types (Done)
- Declare variables using `var`, `let`, and `const`. Explain the differences in scope and re-assignability.
- Create a variable for each primitive data type: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
- Use the `typeof` operator to check the data type of each variable. Why does `typeof null` return `"object"`?
- Explain the difference between `==` (loose equality) and `===` (strict equality). Provide an example where they produce different results.
- What is **type coercion**? Give an example of implicit and explicit coercion.

### Operators and Expressions (Done)
- Perform a series of arithmetic operations (`+`, `-`, `*`, `/`, `%`, `**`) and store the results.
- Explain the difference between `i++` and `++i`.
- Write an expression using logical operators (`&&`, `||`, `!`) to check if a number is between 10 and 20.
- Use the ternary operator as a shorthand for a simple if/else statement.

### Control Flow (Done)
- Write an if/else statement to check if a number is positive, negative, or zero.
- Use a `switch` statement to handle different user roles (e.g., `'admin'`, `'editor'`, `'guest'`). Include a default case.
- Write a `for` loop that prints numbers from 1 to 10.
- Write a `while` loop that doubles a number until it is greater than 100.
- Use a `do/while` loop to prompt a user for input until they enter `'quit'`.

---

## 🔷 Intermediate Level: Core Concepts (Yet to do)
This section covers concepts essential for building applications.

### Functions
- Write a function declaration, a function expression, and an arrow function that all achieve the same result.
- Explain the concept of **hoisting** in the context of function declarations vs. function expressions.
- Write a function that accepts a variable number of arguments using **rest parameters** (`...`).
- What is the scope of a variable? Explain **global scope**, **function scope**, and **block scope**.

### Arrays
- Declare an array of your favorite foods. Access the first and last elements.
- Use `push()` and `pop()` to modify the end of the array.
- Use `shift()` and `unshift()` to modify the beginning of the array.
- Use a `for...of` loop to iterate over the array and print each element.
- How do you find the index of a specific element in an array? What if the element isn't found?

### Objects
- Create an object to represent a **car** with properties like `make`, `model`, and `year`.
- Access properties using both **dot notation** and **bracket notation**. When would you need to use bracket notation?
- Add a method (a function as a property) to the car object called `displayInfo` that logs its details.
- Use `Object.keys()`, `Object.values()`, and `Object.entries()` to get the keys, values, and key-value pairs of the object.

### DOM Manipulation & Events
- How do you select an HTML element by its **ID**? By its **class**? By its **tag name**?
- Select an element and change its text content using `textContent` and its HTML content using `innerHTML`. What is the security risk of `innerHTML`?
- Create a new `<div>` element using JavaScript, add a class to it, and append it to the `<body>`.
- What is an event listener? Attach a `'click'` event listener to a button that logs a message to the console.
- Explain **event bubbling**. How can you stop it?

---

## 🔥 Advanced Level: Modern & Asynchronous JS
These questions cover modern features and asynchronous programming patterns.

### Higher-Order Functions & Callbacks
- What is a **higher-order function**? Write one that takes a function as an argument.
- Use `map()` to create a new array containing the lengths of strings from an existing array.
- Use `filter()` to create a new array containing only numbers greater than 50 from an existing array.
- Use `reduce()` to calculate the product of all numbers in an array.
- What is a **callback function**? Provide a simple, practical example.

### Asynchronous JavaScript
- Explain the difference between **synchronous** and **asynchronous** code execution in JavaScript.
- What is a **Promise**? Create a promise that resolves after 2 seconds with a success message.
- Use `.then()` to handle the successful resolution and `.catch()` to handle an error from your promise.
- Explain the purpose of **async/await**. Rewrite your promise example from above using async/await.
- What is the **fetch API**? Write a basic fetch request to a public API (e.g., `https://api.quotable.io/random`).

### Modern JavaScript (ES6+)
- What is **destructuring**? Provide an example for both array and object destructuring.
- Use the **spread operator** (`...`) to combine two arrays and to add properties to an object immutably.
- What are **template literals**? Show how they can be used for multi-line strings and embedded expressions.
- Explain the difference between **Set** and **Array**. When would you use a `Set`?
- What are **ES6 Modules**? Explain the difference between a **default export** and a **named export**.

### Error Handling & Debugging
- What is the purpose of the `try...catch...finally` block? Write an example.
- How do you create and throw a custom error using the `Error` constructor and the `throw` keyword?
- What are some common methods you use to debug JavaScript code in the browser?

---

## 🚀 Expert Level: Deep Dive
These questions test your deep understanding of JavaScript's inner workings.

### Closures & Advanced Scope
- What is a **closure**? Write a function that demonstrates a closure.
- What is a practical use case for a closure (e.g., private variables, function factories)?

### The `this` Keyword
- Explain what the `this` keyword refers to in the following contexts: 
  - a method within an object  
  - a standalone function  
  - an arrow function  
  - an event listener
- What are `call()`, `apply()`, and `bind()`? How do they help you control the value of `this`?

### OOP & Prototypal Inheritance
- Explain **prototypal inheritance**. How do objects inherit properties and methods from other objects in JavaScript?
- Use **class syntax** to create a `Person` blueprint and a `Student` class that inherits from `Person`.
- What is the **constructor** method in a class?

### The Event Loop
- Briefly explain the roles of the **Call Stack**, the **Callback Queue (Task Queue)**, and the **Event Loop** in JavaScript's concurrency model.
- What is the difference between a **microtask** and a **macrotask**?

---

## 🧠 Problem-Solving & Logic
Classic algorithm challenges to test your problem-solving abilities.

- **FizzBuzz**: Print numbers from 1 to 100. For multiples of 3, print `"Fizz"`; for 5, `"Buzz"`; for both, `"FizzBuzz"`.
- **Palindrome Check**: Write a function that checks if a string is a palindrome.
- **Factorial**: Write a recursive function to calculate the factorial of a number.
- **Find Unique Values**: Write a function that returns an array with only the unique values from an input array.
- **Anagram Check**: Write a function to check if two strings are anagrams.
- **Find the Largest Number**: Write a function that finds the largest number in an array without using `Math.max()`.
- **Reverse a String**: Write a function that reverses a string without using the built-in `.reverse()` method.
- **Count Vowels**: Write a function that counts the number of vowels in a string.

---

✨ Use this guide as a **study checklist** or **practice resource** to level up your JavaScript skills.
