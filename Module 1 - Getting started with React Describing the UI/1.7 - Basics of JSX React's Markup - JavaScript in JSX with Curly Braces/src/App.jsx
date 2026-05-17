import TodoList from "./components/Date";
import ExpressionStatement from "./components/ExpressionStatement";
import People from "./components/People";
import Tag from "./components/TagName";
import List from "./components/TodoList";

function App() {
  return (
    <>
      <TodoList />
      <Tag />
      <List />
      <People />
      <ExpressionStatement />
    </>
  );
}

export default App;
