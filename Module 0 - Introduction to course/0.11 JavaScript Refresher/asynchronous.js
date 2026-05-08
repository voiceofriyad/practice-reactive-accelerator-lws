async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    return data;
    // console.log(data.userId);
  } catch (err) {
    console.log(err);
  }
}

// getData();

function bigWork() {
  return getData();
}

// bigWork();

(async function () {
  const result = await bigWork();
  console.log(result);
})();

console.log("Need to use the response");
