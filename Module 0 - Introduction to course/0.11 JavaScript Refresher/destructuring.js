const user = {
  id: 339,
  name: "Sumit",
  age: 42,
  //   education: {
  //     degree: "Graduate",
  //   },
  school: {
    name: "Dhaka City School",
    address: {
      district: "Dhaka",
    },
  },
};

const { name, age } = user;
console.log(name, age);

const { education } = user;
console.log(education);

const { education: { degree } = {} } = user;
console.log(degree);

const {
  school: {
    address: { district },
  },
} = user;

console.log(district);
