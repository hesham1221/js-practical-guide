// for

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do while

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// for in

let person = { firstName: "John", lastName: "Doe" };
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

// for of

let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}

// for each  -> will be discussed in the array methods