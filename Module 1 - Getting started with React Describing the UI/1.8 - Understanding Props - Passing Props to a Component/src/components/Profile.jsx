import NewProfile from "./NewProfile";

export default function Profile() {
  const person = "Tamim";
  const size = 38;
  const age = 39;
  return (
    <>
      {/* <Avatar
        person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
        // size={100}
      /> */}

      <div>
        <NewProfile person={person} size={size} age={age} />
      </div>
    </>
  );
}
