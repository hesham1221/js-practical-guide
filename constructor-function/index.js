// Constructor Function for a Person
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
  return { name };
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

// Creating an instance of Person with `new`
let person1 = new Person("Alice", 25);
console.log(person1.name); // "Alice"
person1.greet(); // "Hello, my name is Alice"

// Calling the constructor without `new`
let person2 = Person("Bob", 30); // No `new` keyword
console.log(person2); // undefined, because no object was returned as Person is treated as a regular function (must return something to have a value)
