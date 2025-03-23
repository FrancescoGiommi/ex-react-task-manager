import { useEffect, useState } from "react";

export default function useTasks() {
  const [hookTasks, setHookTasks] = useState([]);

  useEffect(() => {
    hookTasksFetch();
  }, []);

  const hookTasksFetch = () => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHookTasks(data);
      })
      .catch((error) => console.error("Errore nel fetch:", error));
  };

  const addTask = (task) => {};

  const removeTask = (id) => {};

  const updateTask = (id, task) => {};

  return { hookTasks, hookTasksFetch, addTask, removeTask, updateTask };
}
