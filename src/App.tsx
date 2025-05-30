import { type InputRef } from "antd";
import { useRef } from "react";
import AddTodo from "./components/AddTodo";
import TodoActions from "./components/DisplayTodo";

function App() {
  const inputRef = useRef<InputRef>(null);

  return (
    <>
      <AddTodo ref={inputRef} />
      <TodoActions />
    </>
  );
}

export default App;
