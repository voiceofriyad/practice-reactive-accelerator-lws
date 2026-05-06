const user = {
  id: 339,
  name: "Sumit",
  age: 42,
  education: {
    degree: "Graduate",
    school: {
      //   name: "Dhaka City School",
    },
  },
};

console.log(user.education.school.name);
console.log(user?.education?.school?.name);
