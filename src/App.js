import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
function App() {
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
	//Delete a Task
	const handleDelete = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};
	return (
		<div className='container'>
			<h1>Welcome to Task Tracker App</h1>
			<Header title='Task Tracker' />
			<Tasks tasks={tasks} onDelete={handleDelete} />
		</div>
	);
}

export default App;
