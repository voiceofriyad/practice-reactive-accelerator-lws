function ExpressionStatement() {
  const style1 = {
    backgroundColor: "red",
  };

  const style2 = {
    backgroundColor: "green",
  };

  const color = "green";

  let bgStyle = "";

  if (color === "green") {
    bgStyle = style2;
  } else {
    bgStyle = style1;
  }

  return (
    <>
      {/* <ul style={color === "green" ? style2 : style1}> */}
      <ul style={bgStyle}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  );
}

export default ExpressionStatement;
