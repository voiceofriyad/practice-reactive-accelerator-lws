const a = 6;
let result;
if (a % 2 === 0) {
  result = "Even";
} else {
  result = "Odd";
}

console.log(result);

const b = 3;
const result2 = b % 2 === 0 ? "Even" : "Odd";
console.log(result2);

const c = 17;
const result3 =
  c % 2 === 0 ? "Even" : c % 3 === 0 ? "Divisible by 3" : "Simple Odd";
console.log(result3);
