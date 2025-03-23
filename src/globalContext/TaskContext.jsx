import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const tasksFetch = () => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      })
      .catch((error) => console.error("Errore nel fetch:", error));
  };

  useEffect(() => {
    tasksFetch();
  }, []);

  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
};

export const useTasks = () => {
  return useContext(taskContext);
};
