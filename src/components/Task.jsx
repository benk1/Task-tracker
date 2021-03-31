import { FaTrash } from 'react-icons/fa';
import React from 'react';

const Task = ({ task, onDelete }) => {
	return (
		<div className='task'>
			<h3>
				{task.text}

				<FaTrash
					onClick={() => onDelete(task.id)}
					style={{ color: 'red', cursor: 'pointer' }}
				/>
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
