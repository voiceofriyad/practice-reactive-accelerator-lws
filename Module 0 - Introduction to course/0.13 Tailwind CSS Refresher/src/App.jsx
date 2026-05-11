import Card from "./component/Card";

import Layout from "./component/Layout";
import Responsive from "./component/Responsive";
import Sumon from "./component/Sumon";

function App() {
  return (
    <div className="App bg-white dark:bg-slate-800">
      <Sumon />
      <Layout />
      <Responsive />
      <Card />
    </div>
  );
}

export default App;
