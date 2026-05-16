import Photo, { Profile } from "./components/Gallery";

function App() {
  return (
    <div>
      <p>Hello React</p>
      <Photo />
      <p>Import Profile from Gallery</p>
      <Profile />
    </div>
  );
}

export default App;
