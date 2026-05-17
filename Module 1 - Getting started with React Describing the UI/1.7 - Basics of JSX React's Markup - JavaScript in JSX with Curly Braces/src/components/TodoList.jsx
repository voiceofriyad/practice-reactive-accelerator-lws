export default function TodoList() {
  const style = {
    backgroundColor: "black",
    color: "pink",
  };
  return (
    <ul
      /* style={{
        backgroundColor: "black",
        color: "pink",
      }} */
      style={style}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
