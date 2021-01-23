import React, { createContext, useState } from "react";

const INITIAL_STATE = {
	todos: JSON.parse(localStorage.getItem("todos"))?.length
		? JSON.parse(localStorage.getItem("todos"))
		: [],
	setTodos: todo => {}
};

const TodosContext = createContext(INITIAL_STATE);

export const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useState(INITIAL_STATE.todos);
	return (
		<TodosContext.Provider
			value={{
				todos,
				setTodos: todo => setTodos(todo)
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};

export default TodosContext;
