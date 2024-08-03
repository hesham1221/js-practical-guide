
/**
 * Adds two numbers together and returns the result.
 *
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 * @return {number} The sum of the two input numbers.
 */
function add(a, b) { // Atomic Function - Pure Function
    return a + b;
}
console.log(add(5, 3)); // 8


// Arrow Function
let add = (a, b) => a + b;


/**
 * Executes a higher-order function by passing in two arguments and returning the result of the function call.
 *
 * @param {function} fn - The function to be executed.
 * @param {any} a - The first argument to be passed to the function.
 * @param {any} b - The second argument to be passed to the function.
 * @return {any} The result of the function call with the provided arguments.
 */
function higherOrder(fn, a, b) {  // Higher Order Function tasks a function as an argument
    return fn(a, b);
}
higherOrder(add, 5, 3); // 8


/**
 * Executes a callback function after a delay of 1 second.
 *
 * @param {function} callback - The function to be executed after the delay.
 * @return {void} This function does not return a value.
 */
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((message) => {
    console.log(message);
});



/**
 * Multiplies two numbers together and returns the result.
 *
 * @param {number} a - The first number to be multiplied.
 * @param {number} b - The second number to be multiplied.
 * @return {number} The product of the two input numbers.
 */
function multiply(a, b) { // Pure Function
    return a * b;
}


let counter = 0;
/**
 * Increments the value of the counter by 1 and returns the new value.
 *
 * @return {number} The updated value of the counter.
 */
function increment() { // Impure Function
    counter++;
    return counter;
}


/**
 * Fetches data from the specified URL and returns the parsed JSON response.
 *
 * @return {Promise<Object>} A Promise that resolves to the parsed JSON response.
 */
async function getData() { // Async Function
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}


