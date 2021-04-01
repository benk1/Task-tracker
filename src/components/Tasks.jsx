import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
	const result =
		tasks.length === 0 ? (
			<h3>Please Add Tasks!</h3>
		) : (
			tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			))
		);
	return (
		<>
			<h3>We have {tasks.length} Tasks at the moment</h3>
			{result}
		</>
	);
};

export default Tasks;
