import React, { useState } from 'react';
import '../css/input.css';

const Input = ({ newTask, id, color }) => {
	const [newComment, setNewComment] = useState({
		text: '',
		id: id,
	});
	const { text } = newComment;

	const handleChange = (e) => {
		setNewComment({
			...newComment,
			text: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text.trim()) {
			return;
		}

		setNewComment({
			...newComment,
			text: e.target.value,
			id: id,
		});

		newTask(newComment);
	};

	return (
		<form className="input" onSubmit={(e) => handleSubmit(e)}>
			<input
				className={'input-task'}
				type="text"
				placeholder="Escribe la nueva tarea..."
				name="text"
				onChange={handleChange}
				value={text}
			/>
			<button className={'submit ' + color} type="submit">
				Actualizar Tarea
			</button>
		</form>
	);
};

export default Input;
