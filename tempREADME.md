## Simple Exercises

### Exercise 1: Array Creation

Description: Create an array and add three elements to it using the `push()`
method.

**Starter Code:**

```javascript
// Create an empty array
const instruments = [];

// Add items with push
instruments.push("guitar");
instruments.push("piano");
instruments.push("flute");

// Output array
console.log(instruments);

// Create another empty array

// Add items with push

// Output array
console.log();
```

### Exercise 2: Array Item Access

Description: Access and output the 0th, 3rd, and 4th elements from an array.

**Code:**

```javascript
const fruits = ["apple", "banana", "orange", "grapefruit", "strawberry"];

// 0th
console.log();

// 1st
console.log(fruits[1]);

// 3rd
console.log();

//4th
console.log();
```

### Exercise 3: Array Length

Description: Get the length of an array.

**Code:**

```javascript
// Declare an array
const numbers = [1, 2, 3, 4, 5];

// Get the length of the array
let length = numbers.length;

// Output the length of the array
console.log(length);

// Declare an array
const sports = ["football", "basketball", "tennis", "baseball", "soccer"];

// Get the length of the array

// Output the length of the array
console.log();
```

### Exercise 4: String Length

Description: Output the length of a string.

**Code:**

```javascript
// Create string
let str = "This sentence has 31 characters";

// Output the length of the string
console.log(str.length);

// Create antoher string

// Output the length of the string
console.log();
```

### Exercise 5: Object Creation

Description: Create an object with properties.

**Code:**

```javascript
// Creating an object with 3 properties
const person = {
  name: "dylan",
  age: 26,
  occupation: "instructor",
};

// Output object
console.log(person);

// Create another object with 3 properties

// Output object
console.log();
```

### Exercise 6: Object Property Access

Description: Access and output the values of object properties.

**Code:**

```javascript
// Creating an object with 3 properties
const person = {
  name: "dylan",
  age: 26,
  occupation: "instructor",
};

// Access with dot notation
console.log(person.name);
// Access with bracket natation
console.log(person["age"]);
// Access with variable
let prop = "occupation";
console.log(person[prop]);

const taco = {
  size: "small",
  tasty: true,
  weight: 16,
};

// Access with dot notation
console.log();
// Access with bracket notation
console.log();
// Access with variable
console.log();
```

### Exercise 7: For Loop

Description: Use a `for` loop to output the numbers 0-9

**Code**

```javascript
// for loop that outputs the numbers 0-3
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// for loop that outputs the numbers 0-9
for () {
    console.log();
}
```

### Exercise 8: For Loop Iteration

Description: Use a `for` loop to iterate over an array and output its elements.

**Code:**

```javascript
// Create array
const movies = ["The Shawshank Redemption", "Pulp Fiction", "The Dark Knight", "Fight Club", "Inception"];

// Iterate over movies array
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// Create array
const animals = ["dog", "cat", "elephant", "lion", "monkey"];

// Iterate over animals array
for () {
  console.log;
}
```

### Exercise 9: For...of Loop Iteration

Description: Use a `for...of` loop to iterate over an array and output its
elements.

**Code:**

```javascript
// Create array
const tvShows = ["Breaking Bad", "Game of Thrones", "Friends", "Stranger Things", "The Office"];

// Iterate over tvShows array
for (const show of tvShows) {
  console.log(show);
}

// Create array
const musicGenres = ["pop", "rock", "hip hop", "jazz", "country"];

// Iterate over musicGenres array
for () {
    console.log();
}
```

### Exercise 10: For...in Loop Iteration

Description: Use a `for...in` loop to iterate over the properties of an object
and output its keys and values.

**Code:**

```javascript
// Create object
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
};

// Iterate over the properties of the car object
for (const property in car) {
    console.log(propertery + ": " + car[property]);
}

// Create object
const student = {
    name: "Alice",
    age: 20,
    major: "Computer Science",
    enrolled: true
};

// Iterate over the properties of the student object
for () {
    console.log();
}
```

Certainly, here is a simplified version of the if/else statement exercise:

Got it! Here's the exercise with a complete example followed by a skeleton for
the students to fill in:

### Exercise 11: If/Else Statements

Description: Use an `if/else` statement to output a message based on the value
of a variable.

**Code:**

```javascript
// Declare a variable with a number
const age = 22;

// Use an if/else statement to check the value of the age
// If the age is 18 or over, output "You are an adult."
// Otherwise, output "You are not an adult."
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

// Declare a variable with a number
const score = 85;

// Use an if/else statement to check the value of the score
// If the score is 90 or above, output "You got an A."
// If the score is 80 or above, output "You got a B."
// Otherwise, output "Keep trying."
if () {
    console.log();
} else if () {
    console.log();
} else {
    console.log();
}
```

### Exercise 12: Using Array.filter()

Description: Use `Array.filter()` method to create a new array with all the
elements that pass a test.

**Code:**

```javascript
// Declare an array with numbers
const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

// Use Array.filter() with traditional function syntax to create a new array with only the even numbers
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Output the new array
console.log(evenNumbers);

// Use Array.filter() with arrow function syntax to create a new array with only the even numbers
const evenNumbersArrow = numbers.filter((number) => number % 2 === 0);

// Output the new array using arrow function
console.log(evenNumbersArrow);

// Declare an array with words
const words = ["apple", "banana", "cherry", "orange", "grape"];

// Use Array.filter() to create a new array with words that have 5 or more characters
const longWords = words.filter();

// Output the new array
console.log();
```

### Exercise 13: Using Array.map()

Description: Use `Array.map()` method to create a new array with the results of
calling a function for every array element.

**Code:**

```javascript
// Declare an array with numbers
const numbers = [1, 2, 3, 4, 5];

// Use Array.map() with traditional function syntax to create a new array with each number multiplied by 2
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

// Output the new array
console.log(doubledNumbers);

// Use Array.map() with arrow function syntax to create a new array with each number multiplied by 2
const doubledNumbersArrow = numbers.map((number) => number * 2);

// Output the new array using arrow function
console.log(doubledNumbersArrow);

// Declare an array with names
const names = ["Alice", "Bob", "Charlie", "Diana"];

// Use Array.map() to create a new array with each name converted to uppercase
const uppercasedNames = names.map();

// Output the new array
console.log();
```
