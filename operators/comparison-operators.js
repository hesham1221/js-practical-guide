// examples:

let b = 10;
console.log(b == 10); // true
console.log(b === "10"); // false
console.log(b != 10); // false
console.log(b !== "10"); // true


// === vs == vs Object.is

let a = 10;
console.log(a == 10); // 
console.log(a === 10); // 
console.log(a == '10'); // 
console.log(a === '10'); // 
console.log(Object.is(a, 10)); // 

let c = {};
let d = {};
console.log(c == d); // 
console.log(c === d); // 
console.log(Object.is(c, d)); // 

let e = NaN; 
let f = NaN;
console.log(e == f); // 
console.log(e === f); // 
console.log(Object.is(e, f)); //

let g = +0;
let h = -0;
console.log(g == h); // 
console.log(g === h); // 
console.log(Object.is(g, h)); //