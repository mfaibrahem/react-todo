/* eslint-disable array-callback-return */
import "./todos.css";
import React, { useContext } from "react";
import TodosContext from "./TodosContext";

const SingleTodo = ({ todo }) => {
	const { setTodos } = useContext(TodosContext);

	const { text } = todo;

	const handleCheckChange = () => {
		setTodos(prevState =>
			prevState.map(item =>
				item.id === todo.id
					? {
							...item,
							checked: !item.checked
					  }
					: item
			)
		);
	};

	const handleRemoveTodo = () => {
		todo.checked &&
			setTodos(prevState => prevState.filter(item => item.id !== todo.id));
	};

	return (
		<div className={`single-todo ${todo.checked ? "checked" : ""}`}>
			<h1>{text}</h1>
			<input
				checked={todo.checked}
				type="checkbox"
				name="check_todo"
				onChange={handleCheckChange}
			/>
			<div onClick={handleRemoveTodo}>❌</div>
		</div>
	);
};

export default SingleTodo;
