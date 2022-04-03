import React, { useState } from 'react';
import '../css/listTask.css';
import Form from './Form';
import Tasks from './Tasks';

const ListTask = () => {
	const [tasks, setTasks] = useState([]);

	const task = (task) => {
		setTasks([...tasks, task]);
	};

	const completed = (id) => {
		const toUpdate = tasks.map((item) =>
			item.id === id ? { ...item, status: !item.status, edit: false } : item
		);
		setTasks(toUpdate);
	};

	const remove = (id) => {
		const toUpdate = tasks.filter((item) => item.id !== id);
		setTasks(toUpdate);
	};

	const getInput = (id) => {
		const toUpdate = tasks.map((item) => (item.id === id ? { ...item, edit: !item.edit } : item));
		setTasks(toUpdate);
	};

	const newTask = (newTask) => {
		const toUpdate = tasks.map((item) =>
			item.id === newTask.id ? { ...item, text: newTask.text, edit: !item.id } : item
		);
		setTasks(toUpdate);
	};

	return (
		<>
			<Form task={task} />
			<div className="container-list-task">
				{tasks.map((item) => (
					<Tasks
						key={item.id}
						tasks={tasks}
						text={item.text}
						id={item.id}
						numberRandom={item.color}
						completedClass={item.status}
						completed={completed}
						remove={remove}
						getInput={getInput}
						newTask={newTask}
					/>
				))}
			</div>
		</>
	);
};

export default ListTask;
