import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
const [tasks, setTasks] = useState([]);
const fetchTasks = async () => {
const res = await axios.get("http://localhost:8080/api/tasks");
setTasks(res.data);
};
useEffect(() => { fetchTasks(); }, []);
return (
  <div>
  <h1>To-Do List</h1>
  <TaskForm fetchTasks={fetchTasks} />
  <TaskList fetchTasks={fetchTasks} tasks={tasks} />
  </div>
);
}
export default App;