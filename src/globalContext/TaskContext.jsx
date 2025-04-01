import { createContext, useContext } from "react";

import useTasks from "../customHooks/useTasks";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const { hookTasks, hookTasksFetch, addTask, removeTask, updateTask } =
    useTasks();

  return (
    <TaskContext.Provider
      value={{ hookTasks, addTask, removeTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const consumerTasks = () => {
  return useContext(TaskContext);
};
