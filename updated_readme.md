# JavaScript Hands-On Practice

Welcome! This repository is designed to help you move beyond theory and gain real, practical skill in JavaScript. For each topic, you’ll find not just questions, but hands-on mini challenges. Try to solve them in the browser console or Node REPL for best results.

---

## 1. Variables & Data Types

1. Create variables using `let`, `const`, and `var` that store: a user’s name (string), age (number), isAdmin (boolean), hobbies (array), and profile (object). Log the type of each. What happens if you try to reassign the const?
2. Convert the string `"42"` to a number in three different ways. What happens if you convert `"42abc"`? Check `Number.isNaN` vs `isNaN`.
3. Given `let a = 0.1` and `let b = 0.2`, show why `a + b !== 0.3` exactly. Write a function `fixFloat(a, b)` that returns an accurate decimal sum.
4. Show the difference between `==` and `===` using at least four comparisons (e.g., `0 == false`, `"0" == 0`, `null == undefined`, `[] == false`). Explain results in comments.
5. Create a Symbol and use it as a hidden property key on an object. Log the object keys—why doesn’t the Symbol key appear in a normal `for...in`?
6. Build a tiny snippet that checks if a value is truly an array without using `typeof`.
7. Write a function `classify(value)` that returns `"array" | "null" | "object" | "date" | "function" | "primitive"` using `Object.prototype.toString`.

---

## 2. Operators & Expressions

1. Demonstrate difference between `++i` and `i++` inside a loop and log the intermediate values.
2. Use the logical AND (`&&`) and OR (`||`) operators to implement a fallback value chain for a setting: `userSetting`, `appDefault`, `systemDefault`.
3. Show how `??` (nullish coalescing) differs from `||` with inputs: `0`, `""`, `null`, `undefined`.
4. Write a concise conditional expression that categorizes a temperature number into `"cold"`, `"warm"`, or `"hot"`.
5. Use destructuring with default values in a single line to extract `a`, `b`, and `c` from an object that might be missing some keys.
6. Use the spread operator to: (a) clone an object, (b) merge two objects with overlapping keys while keeping both original objects unchanged.
7. Implement a simple exponentiation function using only repeated multiplication and a loop (don’t use `**` or `Math.pow`).

---

## 3. Control Flow (if / switch / loops)

1. Rewrite an if/else chain as a `switch` for grading: A, B, C, D, F based on a numeric score.
2. Use a `for` loop, `while` loop, and `for...of` loop to sum numbers in an array. Compare readability.
3. Break out of a nested loop once a target value is found in a 2D matrix. Show two approaches: labeled break vs using a helper function that returns early.
4. Build a function `fizzBuzz(n)` returning an array of results; then optimize to avoid multiple modulo operations per iteration.
5. Given an array with possible nulls, continue over null entries and only process defined numbers.
6. Convert a recursive factorial into an iterative version and compare call stack behavior.

---

## 4. Functions & Scope

1. Write three versions of a function `add(a, b)`: function declaration, function expression, arrow function—log `typeof` each.
2. Demonstrate hoisting differences between a function declaration and a function expression assigned to var/let.
3. Create a function that returns another function (closure) to increment a private counter. Show that external code can’t directly modify the counter.
4. Implement a `once(fn)` utility that ensures the wrapped function only runs the first time it’s called.
5. Write a function that uses rest parameters to sum any number of arguments; then modify it to accept either an array or multiple numeric args.
6. Show why using `this` inside an arrow function inside an object method may not behave as expected. Fix it with a normal function or `bind`.
7. Create an IIFE that initializes a config object and exposes only a `get(key)` method globally.

---

## 5. Arrays & Array Methods

1. Re-implement `map` manually: `myMap(arr, callback)`. Compare results to native `map`.
2. Given an array of mixed values (numbers, strings, nulls), filter only numbers and then reduce to their average (handle empty case).
3. Flatten a nested array up to a given depth parameter without using `flat()`.
4. Deduplicate an array of objects by an id key using both: (a) an object Map, (b) `Array.prototype.reduce`.
5. Partition an array of numbers into two arrays: even and odd, in a single pass.
6. Chain `filter` → `map` → `reduce` to convert an array of user objects into the total age of users with `active: true`.
7. Sort an array of strings case-insensitively, then stable-sort by length while preserving relative order for same-length strings.
8. Rotate an array k steps to the right in-place.

---

## 6. Objects & Prototypes

1. Create an object with a method, then create a second object that delegates to it via `Object.create`. Demonstrate method lookup.
2. Add a method dynamically after object creation; show how all prototype-linked objects can use it.
3. Implement a shallow clone and a deep clone (handle arrays, objects, dates). Explain a limitation of `JSON.parse(JSON.stringify())`.
4. Create a custom constructor function `Person(name)` and add a shared method `greet` on its prototype.
5. Contrast `Object.freeze`, `Object.seal`, and `Object.preventExtensions` with examples.
6. Implement a simple polyfill for `Object.assign` (call it `myAssign`).
7. Show how to use a `WeakMap` to store private data for objects.

---

## 7. DOM Manipulation (if applicable for browser context)

1. Create a list (`ul`) dynamically from an array of strings and append it to `document.body`.
2. Add an event listener to each list item that logs which item was clicked using event delegation on the parent.
3. Toggle a CSS class on a div every second for 5 seconds, then stop.
4. Build a simple counter UI with "+" and "-" buttons that updates text content without global variables.
5. Fetch JSON from a public API and render the first five items into a table (handle loading and error states).
6. Implement a function that sanitizes user input before inserting it as innerHTML (show a naive unsafe version vs safe version using textContent).
7. Lazy-load images: replace `data-src` with `src` when they enter the viewport (`IntersectionObserver`).

---

## 8. Events & Interaction

1. Create a custom event (e.g., `"profile:loaded"`) and dispatch it after simulating data fetch with `setTimeout`.
2. Debounce an input event so a search function triggers only after the user stops typing for 400ms.
3. Throttle a scroll event handler to fire at most once every 200ms.
4. Implement a pub/sub system with subscribe, unsubscribe, and publish methods.
5. Show difference between `e.stopPropagation()` and `e.preventDefault()` in nested clickable elements.
6. Convert a callback-based `addEventListener` that relies on external state into a closure that encapsulates state.

---

## 9. Asynchronous JavaScript (Callbacks, Promises, async/await)

1. Wrap `setTimeout` in a function `delay(ms)` that returns a Promise resolved after ms.
2. Convert a callback-style function `loadData(url, cb)` into a Promise-based version.
3. Use `Promise.all` to fetch three endpoints in parallel; handle the first failure gracefully without aborting the others (show `Promise.allSettled`).
4. Implement a `retry(fn, attempts)` that re-invokes a promise-returning function on rejection until attempts exhausted.
5. Demonstrate race conditions by incrementing a shared counter asynchronously; then fix using sequential awaits.
6. Use async/await plus try/catch to fetch data, with a finally block that logs "done".
7. Implement a timeout wrapper that rejects if a promise doesn’t resolve within a given milliseconds.

---

## 10. Error Handling & Debugging

1. Intentionally cause a TypeError and catch it; log name, message, and stack separately.
2. Create a custom Error subclass `ValidationError` with an extra field `invalidFields`.
3. Wrap `JSON.parse` in a `safeParse` function that returns `{ ok: true, value }` or `{ ok: false, error }`.
4. Show how an error thrown inside a Promise executor differs from one inside a `then` callback.
5. Use `console.group` / `console.time` to profile a loop vs an array method approach.
6. Implement a global `window.onerror` (browser) or `process.on('uncaughtException')` (Node) handler that formats errors.
7. Create a function `assert(condition, msg)` that throws if condition is false—use it in a sample validation pipeline.

---

## 11. ES6+ Features

1. Use destructuring to swap two variables without a temp variable.
2. Create a function with default parameters; call it with `undefined` vs `null` to show differences.
3. Use a tagged template literal to implement a simple HTML escaping function.
4. Demonstrate spreading an array into a function expecting multiple args, then rest to gather them back.
5. Create a class with a private `#counter` field and a method `increment()`—show that external code cannot access `#counter`.
6. Use optional chaining and nullish coalescing to safely access `nested.user.profile?.email ?? 'N/A'`.
7. Build a generator function that yields Fibonacci numbers up to a limit; iterate it with `for...of`.
8. Use import/export (ES modules) to split a utility function into a separate file (if environment supports).

---

## 12. Higher-Order Functions & Functional Patterns

1. Write a function `compose(f, g)` that returns a function applying `f(g(x))`. Test with simple transforms.
2. Implement a `curry(fn)` that transforms a multi-arg function into chained single-arg calls until all args supplied.
3. Write a higher-order function `memoize(fn)` and test with a recursive Fibonacci.
4. Build a `pipeline(arrayOfFns, initialValue)` executor that passes the result through each function in order.
5. Implement a `negate(predicate)` function that inverts the boolean result of any predicate.
6. Create a `onceAsync(asyncFn)` that prevents concurrent executions and queues additional calls.
7. Show how map/filter/reduce can replace an imperative loop for aggregating stats (e.g., total, min, max, count of numbers > threshold).

---

## 13. Modules & Build (Optional if you reach bundlers later)

1. Split a math utility (`add`, `subtract`) into one module and import it in another; run in Node with `"type": "module"`.
2. Show difference between default export and named exports; import both styles.
3. Create an `index.js` barrel file that re-exports from multiple modules.
4. Dynamically import a module only when a button is clicked (if browser supports).
5. Simulate tree shaking: export multiple functions but only import one—inspect bundle (if using a bundler later).

---

## 14. Practical Mini-Projects (Integrative)

(Use these as capstone exercises after basics.)

1. Build a todo list: add, toggle, delete tasks; persist in localStorage.
2. Implement a simple stopwatch with start, pause, reset.
3. Create a form validator that checks required fields, email format, and password rules before allowing submit.
4. Fetch and display GitHub user data (avatar, repos count) given a username input.
5. Build a small event emitter class and use it to coordinate two modules (e.g., data loader and UI renderer).
6. Implement a dark mode toggle that remembers state across reloads.

---

## How to Use

- Try these in Node.js REPL or your browser console.
- Star questions you want to revisit often.
- Consider adding your solutions in a separate `Solutions.md` file or under each heading using collapsible `<details>` tags.

Happy coding!
