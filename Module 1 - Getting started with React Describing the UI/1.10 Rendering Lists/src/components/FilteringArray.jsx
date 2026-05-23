import { people } from "./People";
import { getImageUrl } from "./utils";

export default function FilteringArray() {
  const chemists = people
    .filter((person) => person.profession === "chemist")
    .map((chemist) => (
      <li key={chemist.id}>
        {/* <img src={getImageUrl(chemist)} /> */}
        <img src={getImageUrl()} />
        <p>{chemist.name}</p>
      </li>
    ));

  //   const listItems = chemists.map((chemist) => <li>{chemist.name}</li>);

  return (
    <div>
      {/* {listItems} */}
      {chemists}
    </div>
  );
}
