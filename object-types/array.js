numbers.push(5); // [1, 2, 3, 4, 5]
numbers.pop(); // [1, 2, 3, 4]
numbers.shift(); // [2, 3, 4]
numbers.unshift(0); // [0, 2, 3, 4]
let doubled = numbers.map(num => num * 2); // [0, 4, 6, 8]
let evenNumbers = numbers.filter(num => num % 2 === 0); // [0, 2, 4]
let sum = numbers.reduce((total, num) => total + num, 0); // 9


let numbers = [1, 2, 3, 4 , 5 , 6];
function arrMethod(arr){    
    if(!Array.isArray(arr)) return null
    if(!arr.every(num => typeof num === 'number')) return null
    const even = arr.filter(num => num % 2 === 0);
    const doubled = even.map(num => num * 2);
    const sum = doubled.reduce((acc, num) => acc + num, 0);
    return sum
}
console.log(arrMethod(numbers))

const date = new Date()