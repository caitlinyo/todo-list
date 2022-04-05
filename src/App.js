import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Tell my friends to learn React",
  ]);

  return (
    <div>
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
      <TodoItem todo={todo} key={index}/>
      ))}
    </div>
  );
}

export default App;
