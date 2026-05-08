const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const result = fruits.find((f) => f === "Orange" || f === "Mango");
console.log(result);

const result2 = fruits.findIndex((f) => f === "Mango");
console.log(result2);

const result3 = fruits.filter((f) => f === "Mango" || f === "Apple");
console.log(result3);
console.log(fruits);

const result4 = fruits.slice(2, 4);
console.log(result4);
console.log(fruits);

const result5 = fruits.splice(2, 2);
console.log(result5);
console.log(fruits);

const result6 = fruits.splice(2, 2, "Pineapple", "fruit", "fruit2");
console.log(result6);
console.log(fruits);

const result7 = fruits.concat(["fruit3", "fruit4"]);
console.log(result7);
console.log(fruits);

const result8 = fruits.push(["fruit5", "fruit6"]);
console.log(result8); // 6 (Array Length)
console.log(fruits);

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Apple"];

const result9 = fruits2.map((f) => f === "Apple");
console.log(result9);
console.log(fruits2);

const result10 = fruits2.map((f) => {
  if (f === "Apple") {
    return "Apple";
  } else {
    return "N/A";
  }
});
console.log(result10);
console.log(fruits2);

const res = [];
for (let i = 0; i <= fruits2.length; i++) {
  if (fruits2[i] === "Apple") {
    res.push("Apple");
  } else {
    res.push("N/A");
  }
}

console.log(res);

const result11 = fruits2.map((f) => `${f} - `);
console.log(result11);
console.log(fruits2);

const numbers = [1, 2, 3, 4, 5];
const result12 = numbers.reduce((total, currValue) => {
  return total + currValue;
}, 0);

console.log(result12);

const result13 = numbers.forEach((value, index, arr) => {
  return (arr[index] = value * 5);
});

console.log(result13); // undefined
console.log(numbers); // [ 5, 10, 15, 20, 25 ]

const numbers2 = [65, 44, 12, 4];
function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
const result14 = numbers2.forEach(myFunction);

console.log(result14); // undefined
console.log(numbers2); // [ 650, 440, 120, 40 ]

// forEach() is designed for performing actions (side effects), not for transforming arrays.

// forEach() mutated the original array. It ignores return values and always returns undefined.

const numbers3 = [2, 4, 8, 10];

for (num of numbers3) {
  console.log(num);
}

const name = "Riyad";
for (letter of name) {
  console.log(letter);
}

const language = {
  name: "JavaScript",
  year: 1995,
  creator: "Brendan Eich",
};

for (key in language) {
  console.log(key);
  console.log(language[key]);
}

const numbers4 = [1, 2, 3, 4, 5];
const result15 = numbers4.splice(2, 2, 6, 12, 18);
console.log(result15);
console.log(numbers4);
