export default function Nest({ children, title }) {
  return (
    <>
      <h1>{title}</h1>
      <p>Nest Profile</p>
      {children}
    </>
  );
}
