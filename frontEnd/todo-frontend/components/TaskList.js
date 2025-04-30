
import React from "react";
import axios from "axios";

export default function TaskList({ fetchTasks, tasks }) {
const deleteTask = async (id) => {
await axios.delete(`http://localhost:8080/api/tasks/${id}`);
fetchTasks();
};

return (
    <ul>
    {tasks.map(task => (
    <li key={task.id}>
    {task.title} - {task.description}
    <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
))}
    </ul>
);
}