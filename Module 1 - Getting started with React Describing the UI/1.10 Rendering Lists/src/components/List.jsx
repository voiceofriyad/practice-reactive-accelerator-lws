const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function List() {
  const listItems = people.map((person) => (
    <li key={crypto.randomUUID()}>{person}</li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

export default List;
