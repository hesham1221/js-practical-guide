let greeting = "Hello, World!";
console.log(greeting.length); // 13
console.log(greeting.toUpperCase()); // "HELLO, WORLD!"
console.log(greeting.includes("World")); // true
console.log(greeting.slice(0, 5)); // "Hello"


// new String() vs String()

let str = new String("Hello, World!"); // String object
console.log(str.length); // 13
console.log(typeof str); // object

let str2 = "Hello, World!"; // String
console.log(str2.length); // 13
console.log(typeof str2); // string