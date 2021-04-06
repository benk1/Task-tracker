import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddTask from './components/AddTask';
import axios from 'axios';
import Footer from './components/Footer';
import About from './components/About';
function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);
	//const [data, setData] = useState({ tasks: [] });

	useEffect(() => {
		const getTasks = async () => {
			const tasksFromTheServer = await fetchTasks();
			setTasks(tasksFromTheServer);
		};
		getTasks();
	}, []);

	// Fetch Tasks
	const fetchTasks = async () => {
		const res = await axios.get('http://localhost:5000/tasks');
		const tasksFromServer = await res.data;

		return tasksFromServer;
	};

	// Fetch Task
	const fetchTask = async (id) => {
		const res = await axios.get(`http://localhost:5000/tasks/${id}`);
		const singleTask = await res.data;

		return singleTask;
	};
	//Add Task
	const handleAdd = async (task) => {
		const res = await axios.post('http://localhost:5000/tasks', task, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		});
		const newTask = await res.data;

		setTasks([...tasks, newTask]);
	};

	// Delete Task
	const handleDelete = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'DELETE',
		});
		//We should control the response status to decide if we will change the state or not.
		res.status === 200
			? setTasks(tasks.filter((task) => task.id !== id))
			: alert('Error Deleting This Task');
	};
	//Delete a Task
	/*const handleDelete = async (id) => {
		const res = await axios(`http://localhost:5000/tasks/${id}`, {
			method: 'DELETE',
		});
		//We should control the response status to decide if we will change the state or not.
		res.status === 200
			? setTasks(tasks.filter((task) => task.id !== id))
			: alert('Error Deleting This Task');
	};*/

	//Toggle reminder

	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(updTask),
		});

		const data = await res.json();

		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
			)
		);
	};

	/*const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await axios(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(updatedTask),
		});

		const toggledData = await res.data;

		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: toggledData.reminder } : task
			)
		);
		console.log(id);
	}; */
	return (
		<Router>
			<div className='container'>
				<Header
					title='Welcome To Task Tracker App'
					onAdd={() => setShowAddTask(!showAddTask)}
					showAdd={showAddTask}
				/>
				<Route
					path='/'
					exact
					render={(props) => (
						<>
							{showAddTask && <AddTask onAdd={handleAdd} />}
							<Tasks
								tasks={tasks}
								onDelete={handleDelete}
								onToggle={toggleReminder}
							/>
						</>
					)}
				/>
				<Route path='/about' component={About} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
