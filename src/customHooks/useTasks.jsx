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

  const addTask = (task) => {
    return fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setHookTasks((prevTask) => [...prevTask, data.task]);
          return { success: true, task: data.task };
        } else {
          throw new Error(
            data.message || { success: false, message: "Messaggio di errore" }
          );
        }
      })
      .catch((error) => {
        return {
          success: false,
          message: error.message || "Errore sconosciuto",
        };
      });
  };

  const removeTask = (id) => {};

  const updateTask = (id, task) => {};

  return { hookTasks, hookTasksFetch, addTask, removeTask, updateTask };
}
