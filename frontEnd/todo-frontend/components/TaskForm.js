
import React, { useState } from "react";
import axios from "axios";


export default function TaskForm({ fetchTasks })
{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/tasks", { title, description, completed: false });
    setTitle("");
    setDescription("");
    fetchTasks();
};
return (
    <form onSubmit={handleSubmit}>
    <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
    <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
    <button type="submit">Add Task</button>
    </form>
);
}