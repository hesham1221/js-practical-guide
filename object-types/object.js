let person = {
  name: "John",
  age: 30,
  job: "Developer",
};
console.log(Object.keys(person)); // ["name", "age", "job"]
console.log(Object.values(person)); // ["John", 30, "Developer"]
console.log(person.hasOwnProperty("age")); // true
console.log(Object.entries(person)); // [["name", "John"], ["age", 30], ["job", "Developer"]]
