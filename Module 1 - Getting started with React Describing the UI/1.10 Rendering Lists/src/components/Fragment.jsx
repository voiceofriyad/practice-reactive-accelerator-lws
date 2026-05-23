import { Fragment } from "react";
import { people } from "./People";

export default function FragmentTest() {
  const listItems = people.map((person) => (
    <Fragment key={person.id}>
      <h1>{person.name}</h1>
    </Fragment>
  ));
  return <div> {listItems}</div>;
}
