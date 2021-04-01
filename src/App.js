import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors Appointment',
			day: 'Feb 2nd at 6:00pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Meeting at work',
			day: 'Feb 4th at 1:30pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Food Shopping',
			day: 'Feb 10th at 9:00pm',
			reminder: false,
		},
	]);
	//Add Task
	const handleAdd = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};
	//Delete a Task
	const handleDelete = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
		console.log(id);
	};
	return (
		<div className='container'>
			<Header
				title='Welcome To Task Tracker App'
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={handleAdd} />}
			<Tasks tasks={tasks} onDelete={handleDelete} onToggle={toggleReminder} />
		</div>
	);
}

export default App;
