import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  console.log(state);
  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span
              style={
                todo.completed
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
