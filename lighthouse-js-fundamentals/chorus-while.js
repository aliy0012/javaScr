const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 85) {
  if (repeat === 5 || repeat == 82) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");