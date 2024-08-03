let c = true;
let d = false;
console.log(c && d); // false
console.log(c || d); // true
console.log(!c); // false
console.log(!d); // true


// sugar js
let data = 0;
console.log(data || 20); //
console.log(data && 10); //
console.log(data ?? 10); //
data ??= 10; //
data &&= 10; //
console.log(data); //
data ||= 10; //
console.log(data); //


let response;
console.log(response ?? "No response"); //
console.log(response && "No response"); //
console.log(response || "No response"); //
response ??= "No response"; //
response &&= "AND response"; //
console.log(response); //
response ||= "No response"; //
console.log(response); //