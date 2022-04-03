import './App.css';
import ListTask from './components/ListTask';

function App() {
	return (
		<>
			<div className="app-task">
				<div className="task-list-principal">
					<h1>Mis Tareas</h1>
					<ListTask />
				</div>
			</div>
		</>
	);
}

export default App;
