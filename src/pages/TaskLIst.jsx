import { useContext, useState, useMemo } from "react";
import { TaskContext } from "../globalContext/TaskContext";
import TaskRow from "../components/TaskRow";
export default function TaskList() {
  const tasks = useContext(TaskContext);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  // Funzione per colorare le righe in base allo stato

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => prev * -1);
    } else {
      setSortBy(field);
      setSortOrder(1);
    }
  };

  const sortIcon = sortOrder === 1 ? "▲" : "▼";

  const filteredAndSorteredTast = useMemo(() => {
    return [...tasks]
      .filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title) * sortOrder;
        }
        if (sortBy === "status") {
          const statusOrder = { "To do": 0, Doing: 1, Done: 2 };
          return (statusOrder[a.status] - statusOrder[b.status]) * sortOrder;
        }
        if (sortBy === "createdAt") {
          return (
            (new Date(a.createdAt).getTime() -
              new Date(b.createdAt).getTime()) *
            sortOrder
          );
        }
        return 0;
      });
  }, [tasks, sortBy, sortOrder, searchQuery]);

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
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Cerca per titolo"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort("title")} scope="col">
              Titolo {sortBy === "title" && sortIcon}
            </th>
            <th onClick={() => handleSort("status")} scope="col">
              Stato {sortBy === "status" && sortIcon}
            </th>
            <th onClick={() => handleSort("createdAt")} scope="col">
              Creato a {sortBy === "createdAt" && sortIcon}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSorteredTast.map((task, id) => (
            <TaskRow key={id} task={task} colorsStates={colorsStates} />
          ))}
        </tbody>
      </table>
    </>
  );
}
