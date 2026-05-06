// regular function

function hello() {
  console.log("hello world");
  //   return undefined;
}

let msg = hello();
console.log(msg);

//function expression

const hello2 = function () {
  console.log("Hello Riyad");
};

console.log(hello2);
console.log(hello2());

//named function expression
const hello3 = function hello3() {
  console.log("Hello Faysal");
};

console.log(hello3);
console.log(hello3());

//arrow function

const hello4 = () => {
  console.log("Hello Sumit");
};

console.log(hello4);
console.log(hello4());

const hello5 = () => console.log("Hello Sumit");

const hello6 = (a, b) => a + b;

console.log(hello6(2, 6));

const obj = (a, b) => {
  return {
    a: 5,
    b,
  };
};

console.log(obj(7, 8)); // { a: 5, b: 8 }

const obj2 = (a, b) => ({
  a,
  b,
});

console.log(obj2(7, 8)); // { a: 5, b: 8 }

//anonymous function

function hi() {
  return () => {
    console.log("hello world");
  };
}

console.log(hi()());
