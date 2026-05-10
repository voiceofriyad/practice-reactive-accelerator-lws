import Card from "./component/Card";
import Init from "./component/init";
import Layout from "./component/Layout";
import Responsive from "./component/Responsive";

function App() {
  return (
    <div className="App bg-white dark:bg-slate-800">
      <Init />
      <Layout />
      <Responsive />
      <Card />
    </div>
  );
}

export default App;
