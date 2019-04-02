import React, { useContext } from "react";
import TodosContext from "../context";
function AddTodo() {
  const { state, dispatch } = useContext(TodosContext);
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        dispatch({type: "FORM_SUBMIT", payload: e})
    }}>
      <input
        type="text"
        placeholder="Enter new todo.."
        value={state.inputVal}
        onChange={e =>
          dispatch({ type: "UPDATE_VAL", payload: e.target.value })
        }
      />
      <input type="submit" />
    </form>
  );
}

export default AddTodo;
