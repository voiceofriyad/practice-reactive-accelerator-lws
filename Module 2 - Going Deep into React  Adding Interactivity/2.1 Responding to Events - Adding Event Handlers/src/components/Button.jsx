function Button() {
  /*  function handleClick() {
    alert("Button Clicked");
  } */
  return (
    <button
      onClick={() => {
        alert("Button Clicked");
      }}
    >
      I don't do anything
    </button>

    /* <button
      onClick={function handleClick() {
        alert("Button Clicked");
      }}
    >
      I don't do anything
    </button> */
  );
}

export default Button;
