let promise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

promise
  .then((result) => console.log(result)) // "Operation Successful"
  .catch((error) => console.log(error)) // "Operation Failed"
  .finally(() => console.log("Operation Complete"));

let promise1 = Promise.resolve("First Promise");
let promise2 = Promise.resolve("Second Promise");
let promise3 = Promise.resolve("Third Promise");

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results)) // ["First Promise", "Second Promise", "Third Promise"]
  .catch((error) => console.log(error));

Promise.race([promise1, promise2, promise3])
  .then((result) => console.log(result)) // "First Promise"
  .catch((error) => console.log(error));
