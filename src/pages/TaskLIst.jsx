import { useContext } from "react";
import { TaskContext } from "../globalContext/TaskContext";
import TaskRow from "../components/TaskRow";
export default function TaskList() {
  const tasks = useContext(TaskContext);
  return (
    <>
      <h1>Lista delle task</h1>
      <br />

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
            <TaskRow key={id} task={task} />
          ))}
        </tbody>
      </table>
    </>
  );
}
