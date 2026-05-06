const fruits = ["Banana", "Orange"];

const result = [...fruits];
console.log(result);

result.push("Pineapple");
console.log(result);
console.log(fruits);

const obj = [
  {
    name: "Sumit",
  },
  {
    name: "Riyad",
  },
];

const result2 = [...obj];
console.log(result2);

const language = {
  name: "JavaScript",
  year: 1995,
  creator: "Brendan Eich",
};

const result3 = { ...language };
console.log(result3);

// Rest

function sum(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(sum(5, 6));

function sum2(...rest) {
  //   console.log(rest);
  return rest.reduce((sum, curr) => sum + curr, 0);
}

// sum2(15, 61);
console.log(sum2(35, 87));
console.log(sum2(5, 7));

function sum3(text, ...rest) {
  const result = rest.reduce((sum, curr) => sum + curr, 0);
  console.log(`${text} ${result}`);
}

sum3("The sum is:", 1, 2, 3, 4);
sum3("The sum is:", 5, 10, 15, 20);
