// if

let score = 85;
if (score > 90) {
  console.log("A grade");
} else if (score > 80) {
  console.log("B grade");
} else {
  console.log("C grade");
}

// switch

let grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Invalid grade");
}


// expressions


score > 90 ? console.log('A') : score > 80 ? console.log("B") : console.log("C");

