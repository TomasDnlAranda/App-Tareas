import React, { useState } from 'react';
import '../css/form.css';

const Form = ({ task }) => {
	const [taskText, setTareaTexto] = useState({
		text: '',
		status: false,
		edit: false,
	});
	const { text } = taskText;

	const handleChange = (e) => {
		setTareaTexto({
			...taskText,
			text: e.target.value,
			id: Date.now(),
			color: Math.floor(Math.random() * 10),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text.trim()) {
			return;
		}
		task(taskText);
		setTareaTexto({
			text: '',
		});
	};

	return (
		<form className="task-form" onSubmit={(e) => handleSubmit(e)}>
			<input
				className="task-input"
				type="text"
				placeholder="Escribe una tarea..."
				name="text"
				onChange={handleChange}
				value={text}
			/>
			<button className="task-button" type="submit">
				Agregar Tarea
			</button>
		</form>
	);
};

export default Form;
