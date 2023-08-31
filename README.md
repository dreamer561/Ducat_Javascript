# Javascript 

## Table of Contents

1. Introduction
2. Getting Started
3. Variables and Data Types
4. Control Flow
5. Functions
6. Arrays
7. Objects
8. DOM Manipulation
9. Asynchronous Programming
10. Resources

## 1. Introduction

JavaScript is a versatile programming language primarily used for building interactive and dynamic web applications. It runs in web browsers and allows you to add behavior and interactivity to your web pages.

## 2. Getting Started

To include JavaScript in your HTML file, use the `<script>` tag within the `<head>` or `<body>` section:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My JavaScript Page</title>
    <script src="path-to-your-js-file.js"></script>
</head>
<body>
    <!-- Your HTML content here -->
</body>
</html>
```

## 3. Variables and Data Types

Declare variables using `var`, `let`, or `const`. JavaScript has various data types like strings, numbers, booleans, objects, and more.

```javascript
// Declare variables
var age = 25;
let name = "John";
const pi = 3.14159;

// Data types
var message = "Hello, world!";
var count = 10;
var isTrue = true;
```

## 4. Control Flow

Use `if`, `else if`, and `else` statements for conditional execution.

```javascript
var temperature = 28;

if (temperature > 30) {
    console.log("It's hot outside!");
} else if (temperature > 20) {
    console.log("It's warm.");
} else {
    console.log("It's cool.");
}
```

## 5. Functions

Create functions to encapsulate reusable code.

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

var greeting = greet("Alice");
console.log(greeting); // Output: Hello, Alice!
```

## 6. Arrays

Arrays store collections of items.

```javascript
var colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: red

colors.push("yellow");
console.log(colors); // Output: ["red", "green", "blue", "yellow"]
```

## 7. Objects

Objects group related data and functionality.

```javascript
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(person.firstName); // Output: John
```

## 8. DOM Manipulation

JavaScript can interact with the Document Object Model (DOM) to modify web page content.

```javascript
// HTML: <p id="myParagraph">Hello</p>
var paragraph = document.getElementById("myParagraph");
paragraph.textContent = "Hello, world!";
```

## 9. Asynchronous Programming

Handle asynchronous operations using callbacks, promises, or async/await.

```javascript
// Using Promises
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```


