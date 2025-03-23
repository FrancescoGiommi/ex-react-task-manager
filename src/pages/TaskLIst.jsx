import { useContext } from "react";
import { TaskContext } from "../globalContext/TaskContext";
import TaskRow from "../components/TaskRow";
export default function TaskList() {
  const tasks = useContext(TaskContext);

  // Funzione per colorare le righe in base allo stato
  const colorsStates = (task) => {
    if (task.status === "To do") {
      return "bg-danger";
    }
    if (task.status === "Doing") {
      return "bg-warning";
    }
    if (task.status === "Done") {
      return "bg-success";
    }
    return "";
  };
  return (
    <>
      <h1>Lista delle task</h1>
      <hr />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Titolo</th>
            <th scope="col">Stato</th>
            <th scope="col">Creato a</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, id) => (
            <TaskRow key={id} task={task} colorsStates={colorsStates} />
          ))}
        </tbody>
      </table>
    </>
  );
}
