const a = "love";
const b = "country";

const language = {
  name: "JavaScript",
  year: 1995,
  creator: "Brendan Eich",
  //   b: b,
  b,
};

console.log(Object.keys(language));
console.log(Object.values(language));
console.log(Object.entries(language));

language.popularity = "100%";
console.log(language);

language[a] = "90%";
console.log(language);

language["use"] = "70%";
console.log(language);
