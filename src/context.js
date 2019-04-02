import React from "react";

const TodosContext = React.createContext({
  inputVal: "",
  todos: [
    { id: 1, text: "Eat Breakfast", completed: false },
    { id: 2, text: "Eat Lunch", completed: false },
    { id: 3, text: "Eat Dinner", completed: true }
  ]
});

export default TodosContext;