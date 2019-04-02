export default function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case "UPDATE_VAL":
      return {
        ...state,
        inputVal: action.payload
      };
    case "FORM_SUBMIT":
      const newTodo = {
        id: Math.floor(Math.random() * 100000),
        text: state.inputVal,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
}
