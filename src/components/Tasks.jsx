import '../css/task.css';
import { RiEdit2Line as IconEdit, RiDeleteBack2Fill as IconRemove } from 'react-icons/ri';
import Input from './Input';

const Tasks = ({
	text,
	id,
	numberRandom,
	completedClass,
	completed,
	remove,
	getInput,
	tasks,
	newTask,
}) => {
	const COLOURS_TASKS = [
		'color1',
		'color2',
		'color3',
		'color4',
		'color5',
		'color6',
		'color7',
		'color8',
		'color9',
		'color10',
	];

	return (
		<>
			<div
				className={
					completedClass
						? 'container-task completed'
						: 'container-task ' + COLOURS_TASKS[numberRandom]
				}
			>
				<div className="task-text" onClick={() => completed(id)}>
					{text}
				</div>
				<IconEdit className="task-icon" onClick={() => getInput(id)} />
				<IconRemove className="task-icon" onClick={() => remove(id)} />
			</div>
			{tasks.map((item) =>
				item.id === id ? (
					item.edit === true ? (
						<Input
							key={item.id}
							newTask={newTask}
							id={item.id}
							color={COLOURS_TASKS[numberRandom]}
						/>
					) : null
				) : null
			)}
		</>
	);
};

export default Tasks;
