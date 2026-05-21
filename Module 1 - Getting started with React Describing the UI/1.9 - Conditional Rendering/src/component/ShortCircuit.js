export default function ShortCircuit() {
  const lang = "Python";

  const result1 = lang && "JavaScript";
  // if left side is truthy, return right side. Otherwise return left side.

  const result2 = lang || "JavaScript";
  // if left side is falsy, return right side. Otherwise return left side.

  const result3 = lang ?? "JavaScript";
  // Nullish Coalescing Operator
  // if left side is Nullish (Null or Undefined), return right side. Otherwise return left side.

  console.log(result1);
  console.log(result2);
  console.log(result3);
}

ShortCircuit();
