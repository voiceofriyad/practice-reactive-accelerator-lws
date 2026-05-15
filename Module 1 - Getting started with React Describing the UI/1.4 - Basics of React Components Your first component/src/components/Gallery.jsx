import Profile from "./Profile";

/* function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
} */

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

/* export default function Gallery() {

  // Never define a component inside another component!

  function Profile() {
    ...
  }
  ...
} */
