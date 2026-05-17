let a = 5;
let b = "";

if (a === 5) {
  b = "h1";
} else {
  b = "p";
}

const c = "Header";

export default function Tag() {
  return (
    // <{b}>We can not use dynamic tag.</{b}>

    <h1 title={c}>We can use this</h1>
    // <h1 title='{c}'>We can't use this</h1>
  );
}
