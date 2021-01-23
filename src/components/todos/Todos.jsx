import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";
import TodosContext from "./TodosContext";
const Todos = () => {
	const { todos, setTodos } = useContext(TodosContext);

	const [todoValue, setTodoValue] = useState("");

	const handleTodoChange = event => {
		setTodoValue(event.target.value);
	};

	const renderTodos = todos => {
		return (
			<div className="todos-wrap">
				{todos.map(todo => (
					<SingleTodo key={todo.id} todo={todo} />
				))}
			</div>
		);
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleSubmitTodo = e => {
		e.preventDefault();
		if (todoValue) {
			setTodos(prevState => [
				...prevState,
				{
					id: nanoid(),
					text: todoValue,
					checked: false
				}
			]);
			setTodoValue("");
		}
	};

	return (
		<div className="todos">
			<form onSubmit={handleSubmitTodo}>
				<input
					type="text"
					name="todo"
					placeholder="Enter your todo"
					onChange={event => handleTodoChange(event)}
					value={todoValue}
				/>
				<button type="submit">Add Todo</button>
			</form>
			{renderTodos(todos)}
		</div>
	);
};

export default Todos;
